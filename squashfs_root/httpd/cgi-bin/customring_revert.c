#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

#define CUSTOM_WAV  "/dnake/data/_custom/ring3.wav"
#define SOUND_WAV   "/dnake/sound/ring3.wav"

int main(void) {
    const char *method = getenv("REQUEST_METHOD");
    if (method && strcmp(method, "POST") != 0 && strcmp(method, "GET") != 0) {
        printf("Status: 405 Method Not Allowed\r\n");
        printf("Content-Type: text/plain\r\n\r\n");
        printf("POST or GET required\n");
        return 0;
    }

    /* Best-effort unmount; in case your bind-mount script stacked anything */
    (void)system("umount " SOUND_WAV " 2>/dev/null");

    /* Remove custom WAV so factory file is used next time */
    unlink(CUSTOM_WAV);

    printf("Content-Type: application/json\r\n\r\n");
    printf("{\"code\":0,\"msg\":\"ok\"}\n");
    fflush(stdout);
    return 0;
}

