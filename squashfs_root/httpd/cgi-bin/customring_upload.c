#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <errno.h>

#define MAX_BYTES (12 * 1024 * 1024)   /* Max total request size */

/* Simple memmem implementation for portability */
static void *xmemmem(const void *haystack, size_t haystack_len,
                     const void *needle, size_t needle_len) {
    if (!haystack || !needle || needle_len == 0 || haystack_len < needle_len)
        return NULL;

    const unsigned char *h = (const unsigned char *)haystack;
    const unsigned char *n = (const unsigned char *)needle;

    if (needle_len == 1) {
        /* simple memchr */
        return memchr(haystack, n[0], haystack_len);
    }

    size_t last = haystack_len - needle_len;
    for (size_t i = 0; i <= last; i++) {
        if (h[i] == n[0] && memcmp(h + i, n, needle_len) == 0) {
            return (void *)(h + i);
        }
    }
    return NULL;
}

static void http_error(int code, const char *reason, const char *msg) {
    /* Minimal CGI error response */
    printf("Status: %d %s\r\n", code, reason ? reason : "");
    printf("Content-Type: text/plain\r\n\r\n");
    if (msg && *msg) {
        printf("%s\n", msg);
    }
    fflush(stdout);
    exit(0);
}

#include <stdarg.h>

#define CUSTOM_DIR "/dnake/data/_custom"
#define WAV_FINAL  CUSTOM_DIR "/ring3.wav"
#define WAV_TMP    CUSTOM_DIR "/ring3.wav.tmp"
#define MP3_TMP    CUSTOM_DIR "/ring3.mp3.tmp"
#define LOG_FILE   CUSTOM_DIR "/customring_upload.log"
#define LOG_FLAG   CUSTOM_DIR "/enable_cgi_debug"   /* presence enables logging */

static int debug_enabled(void)
{
    /* cached per CGI process; process is short-lived anyway */
    static int cached = -1;
    if (cached == -1) {
        /* enable logging only if the flag file exists */
        cached = (access(LOG_FLAG, F_OK) == 0) ? 1 : 0;
    }
    return cached;
}

static void log_msg(const char *fmt, ...)
{
    if (!debug_enabled())
        return;

    FILE *lf = fopen(LOG_FILE, "a");
    if (!lf) return;

    va_list ap;
    va_start(ap, fmt);
    vfprintf(lf, fmt, ap);
    va_end(ap);
    fputc('\n', lf);
    fclose(lf);
}

int main(void) {
    const char *method = getenv("REQUEST_METHOD");
    const char *ct = getenv("CONTENT_TYPE");
    const char *cl = getenv("CONTENT_LENGTH");

    log_msg("main: method=%s ct=%s cl=%s",
            method ? method : "(null)",
            ct ? ct : "(null)",
            cl ? cl : "(null)");

    if (!method || strcmp(method, "POST") != 0) {
        http_error(405, "Method Not Allowed", "Only POST allowed");
    }

    if (!ct) {
        http_error(400, "Bad Request", "Missing Content-Type");
    }

    /* Must be multipart/form-data; boundary is required */
    if (strncmp(ct, "multipart/form-data", 19) != 0) {
        http_error(400, "Bad Request", "Expected multipart/form-data");
    }

    const char *bptr = strstr(ct, "boundary=");
    if (!bptr || !*(bptr + 9)) {
        http_error(400, "Bad Request", "Missing boundary");
    }
    const char *boundary = bptr + 9;

    if (!cl) {
        http_error(411, "Length Required", "Missing Content-Length");
    }

    char *endptr = NULL;
    long content_length = strtol(cl, &endptr, 10);
    if (endptr == cl || content_length <= 0) {
        http_error(400, "Bad Request", "Invalid Content-Length");
    }
    if (content_length > MAX_BYTES) {
        http_error(413, "Payload Too Large", "Request too large");
    }

    /* Read entire body */
    char *body = (char *)malloc((size_t)content_length);
    if (!body) {
        http_error(500, "Internal Server Error", "Alloc failed");
    }

    size_t total = 0;
    while (total < (size_t)content_length) {
        size_t r = fread(body + total, 1, (size_t)content_length - total, stdin);
        if (r == 0) {
            free(body);
            http_error(400, "Bad Request", "Failed to read request body");
        }
        total += r;
    }

    /* Build boundary marker: --boundary */
    size_t boundary_len = strlen(boundary);
    size_t marker_len = boundary_len + 2;
    char *marker = (char *)malloc(marker_len + 1);
    if (!marker) {
        free(body);
        http_error(500, "Internal Server Error", "Alloc failed");
    }
    marker[0] = '-';
    marker[1] = '-';
    memcpy(marker + 2, boundary, boundary_len);
    marker[marker_len] = '\0';

    char *p = body;
    char *end = body + total;

    char *file_data = NULL;
    size_t file_size = 0;

    while (p < end) {
        /* Find next boundary */
        char *b = xmemmem(p, (size_t)(end - p), marker, marker_len);
        if (!b) {
            break;
        }
        b += marker_len;
        if (b >= end) {
            break;
        }

        /* Check for final boundary: --boundary-- */
        if ((b + 2) <= end && b[0] == '-' && b[1] == '-') {
            break;
        }

        /* Skip CRLF after boundary */
        if ((b + 2) <= end && b[0] == '\r' && b[1] == '\n') {
            b += 2;
        }

        /* b now at start of part headers */
        char *hdr_start = b;
        char *hdr_end = xmemmem(hdr_start, (size_t)(end - hdr_start), "\r\n\r\n", 4);
        if (!hdr_end) {
            break;
        }

        /* Check if this part is name="file" */
        size_t hdr_len = (size_t)(hdr_end - hdr_start);
        if (xmemmem(hdr_start, hdr_len, "name=\"file\"", 11) != NULL) {
            char *data_start = hdr_end + 4;

            /* Find next boundary from data_start */
            char *next_b = xmemmem(data_start, (size_t)(end - data_start), marker, marker_len);
            char *data_end;
            if (!next_b) {
                data_end = end;
            } else {
                /* Trim trailing CRLF before boundary */
                data_end = next_b;
                while (data_end > data_start &&
                       (data_end[-1] == '\r' || data_end[-1] == '\n')) {
                    data_end--;
                }
            }

            if (data_end > data_start) {
                file_data = data_start;
                file_size = (size_t)(data_end - data_start);
            }
            break;
        }

        /* Move past this part to look for the next */
        p = hdr_end + 4;
    }

    if (!file_data || file_size == 0) {
        free(marker);
        free(body);
        http_error(400, "Bad Request", "No file field found");
    }

    /* We now support both WAV and MP3 uploads. */
    log_msg("upload: file_size=%zu", file_size);

    int is_wav = 0;
    int is_mp3 = 0;

    /* Detect WAV by RIFF/WAVE header */
    if (file_size >= 12 &&
        memcmp(file_data, "RIFF", 4) == 0 &&
        memcmp(file_data + 8, "WAVE", 4) == 0) {
        is_wav = 1;
    }

    /* Detect MP3 very loosely: ID3 tag or MPEG frame sync */
    if (!is_wav && file_size >= 4) {
        const unsigned char *b2 = (const unsigned char *)file_data;
        int id3   = (b2[0] == 'I' && b2[1] == 'D' && b2[2] == '3');
        int frame = (b2[0] == 0xFF && (b2[1] & 0xE0) == 0xE0);
        if (id3 || frame) {
            is_mp3 = 1;
        }
    }

    log_msg("upload: is_wav=%d is_mp3=%d", is_wav, is_mp3);

    if (!is_wav && !is_mp3) {
        free(marker);
        free(body);
        http_error(400, "Bad Request", "Unsupported audio format");
    }

    /* Ensure custom dir exists (best-effort) */
    mkdir(CUSTOM_DIR, 0755);

    if (is_wav) {
        /* Optional: re-check header strictly for WAV */
        if (file_size < 12 ||
            memcmp(file_data, "RIFF", 4) != 0 ||
            memcmp(file_data + 8, "WAVE", 4) != 0) {
            free(marker);
            free(body);
            http_error(400, "Bad Request", "Invalid WAV header");
        }

        const char *tmp_path   = WAV_TMP;
        const char *final_path = WAV_FINAL;

        FILE *f = fopen(tmp_path, "wb");
        if (!f) {
            log_msg("wav: fopen(%s) failed: %d", tmp_path, errno);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to open output");
        }

        if (fwrite(file_data, 1, file_size, f) != file_size) {
            log_msg("wav: fwrite failed");
            fclose(f);
            unlink(tmp_path);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to write output");
        }
        fclose(f);

        /* Best-effort chown */
        if (chown(tmp_path, 1011, 1011) != 0) {
            log_msg("wav: chown(%s) failed: %d", tmp_path, errno);
        }

        if (rename(tmp_path, final_path) != 0) {
            log_msg("wav: rename(%s -> %s) failed: %d", tmp_path, final_path, errno);
            unlink(tmp_path);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to finalize output");
        }
    } else if (is_mp3) {
        const char *mp3_tmp    = MP3_TMP;
        const char *wav_tmp    = WAV_TMP;
        const char *final_path = WAV_FINAL;

        /* Write MP3 upload to a temp file */
        FILE *f = fopen(mp3_tmp, "wb");
        if (!f) {
            log_msg("mp3: fopen(%s) failed: %d", mp3_tmp, errno);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to open mp3 temp");
        }
        if (fwrite(file_data, 1, file_size, f) != file_size) {
            log_msg("mp3: fwrite failed");
            fclose(f);
            unlink(mp3_tmp);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to write mp3 temp");
        }
        fclose(f);

        /* Pick mpg123 path */
        const char *mpg = NULL;
        if (access("/dnake/bin/mpg123", X_OK) == 0)      mpg = "/dnake/bin/mpg123";
        else if (access("/bin/mpg123", X_OK) == 0)       mpg = "/bin/mpg123";
        else if (access("/usr/bin/mpg123", X_OK) == 0)   mpg = "/usr/bin/mpg123";

        if (!mpg) {
            log_msg("mp3: no mpg123 found in known locations");
            unlink(mp3_tmp);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "MP3 decode failed");
        }

        char cmd[256];
        snprintf(cmd, sizeof(cmd),
                 "%s -q -w '%s' -m -n 4594 '%s'",
                 mpg, wav_tmp, mp3_tmp);
        log_msg("mp3: running: %s", cmd);

        int ret = system(cmd);
        log_msg("mp3: system() ret=%d", ret);
        if (ret != 0) {
            unlink(mp3_tmp);
            unlink(wav_tmp);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "MP3 decode failed");
        }

        /* Remove MP3 temp; keep only WAV */
        unlink(mp3_tmp);

        /* Chown + finalize WAV */
        if (chown(wav_tmp, 1011, 1011) != 0) {
            log_msg("mp3: chown(%s) failed: %d", wav_tmp, errno);
        }
        if (rename(wav_tmp, final_path) != 0) {
            log_msg("mp3: rename(%s -> %s) failed: %d", wav_tmp, final_path, errno);
            unlink(wav_tmp);
            free(marker);
            free(body);
            http_error(500, "Internal Server Error", "Failed to finalize output");
        }
    }

    /* Trigger ringtone update without reboot */
    if (system("/dnake/data/startup.sh ring >/dev/null 2>&1") == -1) {
        log_msg("startup: system() failed");
        /* ignore: best-effort hook */
    }

    free(marker);
    free(body);

    /* Success JSON (what your JS expects) */
    printf("Content-Type: application/json\r\n\r\n");
    printf("{\"code\":0,\"msg\":\"ok\"}\n");
    fflush(stdout);

    return 0;
}

