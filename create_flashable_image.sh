#!/bin/bash
# Build a DNake-style firmware image:
# [squashfs payload] + [0xCC-byte footer with len+crc etc.]

set -euo pipefail

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 PAYLOAD_SQUASHFS OUTPUT_IMG" >&2
    exit 1
fi

PAYLOAD="$1"
OUTIMG="$2"

if [ ! -f "$PAYLOAD" ]; then
    echo "Error: payload file '$PAYLOAD' not found" >&2
    exit 1
fi

# sanity: payload must be at least something
SIZE=$(stat -c '%s' "$PAYLOAD" 2>/dev/null || stat -f '%z' "$PAYLOAD")
if [ "$SIZE" -le 0 ]; then
    echo "Error: payload size is zero?" >&2
    exit 1
fi

# Do the heavy lifting in Python so we match FUN_00011c14 exactly.
python3 - "$PAYLOAD" "$OUTIMG" << 'PY'
import sys, os, zlib, struct, shutil

payload, outimg = sys.argv[1:]

# 1. Get payload length (this will go into footer[0x04])
length = os.path.getsize(payload)

# 2. Compute CRC32 like FUN_00011c14:
#    - initial value: 0xFFFFFFFF
#    - update with each chunk
#    - final XOR with 0xFFFFFFFF
crc = 0xFFFFFFFF
with open(payload, "rb") as f:
    while True:
        chunk = f.read(0x2000)  # same 8192-byte chunks as firmware
        if not chunk:
            break
        crc = zlib.crc32(chunk, crc)
crc ^= 0xFFFFFFFF
crc &= 0xFFFFFFFF

# 3. Build 0xCC-byte footer
footer = bytearray(0xCC)

# Layout (all little-endian):
# 0x00: magic      = 0x00010000
# 0x04: length     = payload length (excluding footer)
# 0x08: crc        = CRC32 over [0 .. length-1]
# 0x0C: tag        = "dnak"
# 0x10: field5     = 0x65 (same as stock images)
# 0x4C: field4C    = 0x14
# 0x50: field50    = 0xA0
# all other bytes  = 0

magic  = 0x00010000
tag    = b"dnak"
field5 = 0x65
field4c = 0x14
field50 = 0xA0

struct.pack_into("<I", footer, 0x00, magic)
struct.pack_into("<I", footer, 0x04, length)
struct.pack_into("<I", footer, 0x08, crc)
footer[0x0C:0x10] = tag
struct.pack_into("<I", footer, 0x10, field5)
struct.pack_into("<I", footer, 0x4C, field4c)
struct.pack_into("<I", footer, 0x50, field50)
# rest is already zero

# 4. Write [payload][footer] to OUTIMG
with open(outimg, "wb") as out_f, open(payload, "rb") as in_f:
    shutil.copyfileobj(in_f, out_f, length=65536)
    out_f.write(footer)

print(f"Created {outimg}")
print(f"  payload length: {length} bytes")
print(f"  CRC32: 0x{crc:08X}")
PY

