### (Opis polski znajduje się pod angielskim)

# Important disclaimer - This is an unofficial modification. Flashing custom firmware may brick your device and will certainly void any warranty. Use at your own risk.
## Custom firmware for Kenik videophones
This firmware is intended to use with Kenik KG-M117 & KG-M217 videophones. These modifications may work on other models (modifications, not the whole firmware!), but until someone tests it out, there's no way to tell.

Changes to the original firmware include:
- web gui alteration (additional dialogue under Advanced - More)  
  for ringtone upload & reset (only in EN & PL, CN is not supported, sorry)
- additional, compiled cgi files that handle the ringtone replacement & restore
- preinstalled busybox
- custom startup script (can be altered)
- telnet deamon running at port 9999  
  (can be disabled, leaving only the default login on port 9900 with very limited sh shell)
- debug mode for ringtone file upload  
  (requires empty "enable_cgi_debug" file to be present in /dnake/data/_custom directory)

# Altering the firmware further
- unsquashfs the file, modify, if need be, recompile cgi files  
  (arm-linux-gnueabihf-gcc -Os -s -static -o [out.cgi] [in.c])
- squash again with "-comp xz -b 524288 -noappend"
- run the "create_flashable_image.sh [in] [out]" to get the version that can be flashed via web gui
- update the device, wait for reboot, once you see the default UI, you're done

There's *no* unbricking manual. I highly recommend utilizing bind mounts to test the altered files prior to flashing. If you break the frontend, you'll get a white page instead of web gui. Totally recoverable. If you alter the core files, ran at system boot, it may get ugly.

## Disclaimer - I am by no means a programmer, the code is probably average at best, so if you want to improve it, feel free to do a fork. No PRs will be accepted.
  
  ================================================================
  
  
# Ważna informacja - To nie jest oficjalne oprogramowanie. Wgrywanie niestandardowego firmware'u może zmienić Twój wideofon w drogi przycisk do papieru, a już na pewno unieważnia jakąkolwiek gwarancję. Używasz na własną odpowiedzialność.
## Niestandardowe oprogramowanie do wideofonów firmy Kenik
To oprogramowanie jest przeznaczone do modeli KG-M117 oraz KG-M217. Zastosowane modyfikacje mogą również zadziałać na innych modelach (modyfikacje, nie cały firmware!), ale nie ma pewności, dopóki ktoś tego nie przetestuje.

Zmiany w fabrycznym oprogramowaniu obejmują:
- zmiany w interfejsie webowym (dodatkowa opcja w menu Zaawansowane - Więcej) pozwalająca na załadowanie swojego  
  lub przywrócenie fabrycznego dzwonka (występuje tylko w języku polskim i angielskim, chiński nie jest obsługiwany)
- dodatkowe, skompilowane moduły cgi, które zajmują się podmianą i przywracaniem dzwonka
- preinstalowany busybox
- niestandardowy skrypt wywoływany przy starcie (może być edytowany)
- demon telnetowy pracujący na porcie 9999  
  (da się go wyłączyć, wtedy zostaje domyślna metoda logowania na porcie 9900, z bardzo ograniczoną powłoką sh)
- tryb debugowania dla procesu ładowania dzwonków  
  (wymaga utworzenia pustego pliku "enable_cgi_debug" w katalogu /dnake/data/_custom)

# Dokonywanie dalszych modyfikacji
- wypakuj firmware, nanieś swoje modyfikacje, w razie potrzeby rekompiluj pliki cgi  
  (arm-linux-gnueabihf-gcc -Os -s -static -o [out.cgi] [in.c])
- spakuj ponownie (z użyciem parametrów "-comp xz -b 524288 -noappend")
- uruchom "create_flashable_image.sh [plik wejściowy] [plik wyjściowy]" aby stworzyć wersję do użycia w web gui
- zaktualizuj urządzenie, zaczekaj na restart i pojawienie się domyślnego interfejsu; gotowe

*Nie ma* żadnej instrukcji "odceglania" urządzenia. Zalecam użycie bind mountów przy wszelakich testach, zanim zacznie się flashować przerobiony firmware. Popsucie frontendu (zamiast web gui, jest pusta, biała strona) to pół biedy, ale jeśli zaczniesz ruszać pliki używane podczas startu systemu, sytuacja może przybrać nieciekawy obrót.

## Istotne - nie jestem w żadnym razie programistą, kod jest w najlepszym wypadku średni, więc jeśli masz ochotę go poprawić, śmiało rób forka. PR nie będą akceptowane.


