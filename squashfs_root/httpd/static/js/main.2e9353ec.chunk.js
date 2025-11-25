(this.webpackJsonpv160m_a2=this.webpackJsonpv160m_a2||[]).push([[3],{19:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"d",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var a=o(35),n={en_US:o(347),pl_PL:o(348),zh_CN:o(349)},r=function(e){Object(a.c)("language",e)},i=function(){var e="en_US";try{if(Object(a.a)("language"))return Object(a.a)("language");var t=(navigator.language||navigator.browserLanguage).toLowerCase();e=-1!==t.indexOf("zh")?"zh_CN":-1!==t.indexOf("en")?"en_US":-1!==t.indexOf("pl")?"pl_PL":"en_US"}catch(o){console.log(o)}return Object(a.c)("language",e),e},s=function(e){var t="";try{var o=i(),a=n[o];a[e]&&(t=a[e])}catch(r){console.log(r)}return t}},227:function(e,t,o){"use strict";o.d(t,"a",(function(){return y})),o.d(t,"b",(function(){return w}));var a=o(134),n=o(192),r=o(321),i=o.n(r),s=o(74),m=o(224),c=o(225),l=o(668),d=o(19),u=o(8),p=i.a.create({timeout:3e4,baseURL:"/cgi-bin"});p.interceptors.request.use((function(e){return e})),p.interceptors.response.use((function(e){if(200===e.status)return e;m.b.error({content:"error response!"})}));var b=function(){c.a.open({key:"timeout",message:Object(d.b)("login.timeout.error"),description:Object(d.b)("login.timeout.error_1"),icon:Object(u.jsx)(l.a,{style:{color:"#f00"}})})};function y(e){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(Object(a.a)().mark((function e(t){var o,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.api,n=t.props,void 0!==o){e.next=3;break}return e.abrupt("return");case 3:return r="",r="webapi.cgi?api=".concat(o),e.abrupt("return",p.get(r,{headers:{pragma:"no-cache"}}).catch((function(e){if(e.response&&401===e.response.status)return Object(s.b)("SessionID"),void(void 0!==n?(-1===n.location.pathname.indexOf("/login")&&b(),n.history.push("/login")):window.location.history())})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return g.apply(this,arguments)}function g(){return(g=Object(n.a)(Object(a.a)().mark((function e(t){var o,n,r,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.api,n=t.data,r=t.props,void 0!==o){e.next=3;break}return e.abrupt("return");case 3:return i="",i="webapi.cgi?api=".concat(o),e.abrupt("return",p.post(i,n).catch((function(e){if(e.response&&401===e.response.status)return Object(s.b)("SessionID"),-1===r.location.pathname.indexOf("/login")&&b(),void r.history.push("/login")})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},322:function(e){e.exports=JSON.parse('{"E211":{"name":"E211","inName":"M-A2"}}')},334:function(e,t){},347:function(e){e.exports=JSON.parse('{"save.button":"Save","save.loading":"Saving...","save.success":"Save successfully!","save.error":"Save error!","misc.none":"None","misc.start":"Start","misc.stop":"Stop","misc.enabled":"Enabled","misc.disabled":"Disabled","misc.action":"Action","misc.read":"Read","misc.relay":"Relay","misc.reboot.description":"The system is about to reboot!","misc.table.index":"No.","misc.table.add":"Add","misc.table.add.error":"Beyond maximum addable range","misc.table.edit":"Edit","misc.table.del":"Delete Select","misc.table.del.loading":"Deleting...","misc.table.del.success":"Successfully delete!","misc.table.del.error":"Delete Failed!","misc.table.del.tip":"Are you sure to delete select data?","misc.table.delAll":"Delete All","misc.table.delAll.tip":"Are you sure delete all data?","misc.table.import":"Import","misc.table.export":"Export","misc.table.search":"Search","misc.table.reset":"Reset","misc.table.select":"Selected","misc.readCard.loading":"Card reading...","misc.readCard.loading.tip":"Please swip your card on the card reader zone.","misc.readCard.success":"Read successfully!","misc.readCard.error":"Read error!","misc.readCard.timeout":"Read timeout!","misc.readCard.stop":"Stop reading!","misc.download.loading":"Downloading...","misc.download.success":"Download successfully!","misc.download.error":"Download error!","misc.ipInput.error":"Invalid IP addrs!","misc.nameInput.error":"Illegal string!","misc.seconds":"s","misc.minute":"min","misc.minutes":"mins","misc.url":"URL","misc.pwd":"Password","importFile.modalTitle":"Import","importFile.select":"Select File","importFile.success":"Upload successfully!","importFile.error":"Upload failed, please check if the file is correct!","importFile.error_1":"Invalid file!","importFile.format":"File Format: ","importFile.start":"Start Upload","importFile.loading":"Uploading...","importFile.tips":"The imported file will clear the original data.","login.title":"DNAKE","login.error":"Wrong user name or password!","login.error_1":"Please recheck the user name or password!","login.error_2":"Please input your user name!","login.error_3":"Please input your password!","login.rememberMe":"Remember me","login.button":"Sign in","login.timeout.error":"Login Timeout!","login.timeout.error_1":"Please login again!","frameout.menu.general":"General","frameout.menu.intercom":"Intercom","frameout.menu.security":"Security","frameout.menuItem.advanced":"Advanced","frameout.menuItem.dashboard":"Information","frameout.menuItem.time":"Time","frameout.menuItem.basic":"Basic","frameout.menuItem.password":"Password","frameout.menuItem.system":"System","frameout.menuItem.device":"Device","frameout.menuItem.network":"Network","frameout.menuItem.voip":"SIP","frameout.menuItem.call":"Call","frameout.menuItem.phonebook":"Phonebook","frameout.menuItem.callLogs":"Call Logs","frameout.menuItem.zone":"Zone","frameout.menuItem.scene":"Scene","frameout.menuItem.video":"Video","frameout.menuItem.relay":"Relay","frameout.menuItem.more":"More","frameout.menuItem.accounts":"Accounts","frameout.menuItem.qrcode":"QR Code","frameout.menuItem.ipc":"IPC","topMenu.logout":"Logout","topMenu.hello":"Hello,","dashboard.title":"Product","dashboard.title_1":"Network","dashboard.title_2":"SIP Account","dashboard.product.model":"Model","dashboard.product.talk":"Framework","dashboard.product.fw":"Firmware Version","dashboard.product.ui":"UI","dashboard.product.mac":"MAC Address","dashboard.product.mcu":"MCU","dashboard.account.sipUser":"Account","dashboard.account.status":"Status","dashboard.account.status.option_0":"Disabled","dashboard.account.status.option_1":"Register Success","dashboard.account.status.option_2":"Register Failed","time.title":"Time","time.title_1":"Daylight-saving Time","time.monthList_0":"January","time.monthList_1":"February","time.monthList_2":"March","time.monthList_3":"April","time.monthList_4":"May","time.monthList_5":"June","time.monthList_6":"July","time.monthList_7":"August","time.monthList_8":"September","time.monthList_9":"October","time.monthList_10":"November","time.monthList_11":"December","time.weekList_0":"First","time.weekList_1":"Second","time.weekList_2":"Third","time.weekList_3":"Fourth","time.weekList_4":"Last","time.dayList_0":"Sunday","time.dayList_1":"Monday","time.dayList_2":"Tuesday","time.dayList_3":"Wednesday","time.dayList_4":"Thursday","time.dayList_5":"Friday","time.dayList_6":"Saturday","time.date":"Date&Time","time.date.error":"Please select Date&Time!","time.ntp.enable":"Auto (Time)","time.ntp.url":"NTP URL","time.tz":"Time Zone","time.dst.start":"Start Time","time.dst.end":"End Time","time.dst.offset":"Offset Time","time.dst.offset.min":"min","time.timeFormat":"12H/24H","time.timeFormat.option_0":"12H","time.timeFormat.option_1":"24H","time.dateFormat":"Date Format","time.dateFormat.option_0":"MM-DD-YYYY","time.dateFormat.option_1":"DD-MM-YYYY","time.dateFormat.option_2":"YYYY-MM-DD","basic.title":"Language","basic.title_1":"Intercom","basic.title_2":"DND","basic.title_3":"Display","basic.bright":"Brightness","basic.sleep":"Sleep","basic.screen_lock":"Screen Lock","basic.volume.sys":"System Vol.","basic.volume.talk":"Intercom Vol.","basic.ring":"Ringtone","basic.key_tone":"Key Tone","basic.call_monitor":"Call From Monitor","basic.huangup":"Hang Up After Unlock","basic.answer":"Auto Answer","basic.dnd.mode_0":"Whole Day","basic.dnd.mode_1":"Duration","basic.dnd.start":"Start Time","basic.dnd.start.error":"Please enter Start Time","basic.dnd.end":"End Time","basic.dnd.end.error":"Please enter End Time","password.title":"Password","password.tab.title":"System","password.tab.title_1":"User","password.tab.title_2":"Web","password.save.success":"Password modified successfully!","password.save.success_1":"Please login again","password.save.error":"Old password error!","password.save.error_1":"Please recheck the old password","password.old":"Old Password","password.new":"New Password","password.new.error_0":"Max 8 characters!","password.new.error_1":"Max 10 characters!","password.new.error_2":"Password contains invalid characters!","password.confirm":"Confirm Password","password.confirm.error":"New Password is not match!","system.title":"System","system.tab":"Backup&Import","system.tab_1":"Debug","system.backupRestore":"Backup&Restore","system.backupRestore.text":"Backup all setting and restore settings.","system.backup":"Backup","system.backup.loading":"Backup loading...","system.backup.success":"Backup successfully!","system.backup.error":"Backup error!","system.backup.timeout":"Backup Timeout!","system.restore":"Restore","system.restore.success":"Restore successfully!","system.upgrade":"Upgrade","system.upgrade.success":"Upgrade successfully!","system.upgrade.error":"Upgrade error!","system.upgrade.error_1":"Please check whether the upgrade file is correct!","system.upgrade.text":"Upgrade equipment","system.reset":"Reset","system.reset.text":"Reset factory settings","system.reset.tip":"Are you sure to reset?","system.reset.message":"Reset successfully!","system.reboot":"Reboot","system.reboot.tip":"Are you sure to reboot?","system.reboot.text":"Reboot the device","system.reboot.message":"Reboot successfully!","system.capture.text":"Packet Capture","system.capture.text_1":"Capturing packets can help developers reproduce positioning problems.","system.log.text":"Logs","system.log.text_1":"Device logs","system.screenshot":"Screenshot","system.screenshot.text":"Screenshot device interface","system.ping.text":"Server Connection Test","system.ping.text_1":"Server network connection performance test.","device.title":"Device","device.build":"Building","device.build.rang":"Building range: 1~999","device.unit":"Unit","device.unit.rang":"Unit range: 0~99","device.room":"Room","device.room.rang":"Room range: 0~9899","device.index":"Device No.","device.index.rang":"Device No. range: 0~9","device.sync":"Sync","network.eth":"Ethernet","network.wifi":"Wi-Fi","network.wifi.pwd.err":"Password cannot be less than 8 characters!","network.wifi.pwd.err_1":"Failed to connect, please try again!","network.wifi.connecting":"Connecting...","network.wifi.disconnect":"Connection failed, please try again!","network.wifi.delete":"Your device will stop automatically connecting to this network.","network.wifi.getinfo":"Getting WiFi information...","network.dhcp":"DHCP","network.ip":"IP Address","network.mask":"Mask","network.gateway":"Gateway","network.dns":"DNS","network.cms":"Register To CMS","network.cms.server":"CMS IP","network.cms.password":"Password","network.notification":"Please login again according to the actual IP address of the device!","network.inerecom":"Intercom Network","network.inerecom.tip":"When Ethernet/WiFi is selected, the call will use the wired/WiFi network.","voip.title":"SIP","voip.port":"Port","voip.port.tip":"The default port is 5060","voip.proxy":"SIP Server Host","voip.outbound":"Outbound Proxy","voip.display_name":"Display Name","voip.register_name":"Register Name","voip.username":"Username","voip.password":"Password","voip.transport":"Transport Protocol","voip.ring_code":"Ring Code","voip.h264":"Video Payload","voip.h264.tip":"Video Payload range: 96~127","call.title":"Call Concierge","call.title_1":"Advanced","call.title_2":"Settings","call.concierge":"Message IP","call.concierge.enable":"Concierge Icon","call.ex_slv":"Ex Phone","call.multicast":"Multicast","call.multicast.tip":"After setting the switch, the device needs to be restarted to take effect.","call.ringing":"Ring Time","call.timeout":"Call Time","phonebook.title":"Phonebook","phonebook.name":"Name","phonebook.type":"Type","phonebook.type.tip":"Type (0=RoomNo.; 1=IP Address; 2=SIP Address)","phonebook.type.option_0":"Room No.","phonebook.type.option_1":"IP Address","phonebook.type.option_2":"SIP Address","phonebook.number":"Number","phonebook.add_in":"Group","phonebook.add_in.tip":"Group (0=Phonebook; 1=Whitelist)","phonebook.whitelist":"Whitelist","phonebook.error":"Name already exists in the list!","phonebook.error_1":"Please enter the correct SIP address!","phonebook.error_2":"Please select at least one item","phonebook.search.name":"Search Name","phonebook.search.number":"Search Number","callLogs.type":"Type","callLogs.type.option_0":"Answer","callLogs.type.option_1":"Outgoing","callLogs.type.option_2":"Missed","callLogs.name":"Name","callLogs.number":"Number","callLogs.timeout":"Duration","callLogs.date":"Date&Time","callLogs.search.name":"Search Name","callLogs.search.number":"Search Number","zone.title":"Zone","zone.type":"Type","zone.type.option_0":"Normal","zone.type.option_1":"Emergency","zone.type.option_2":"24 Hour","zone.mode":"Mode","zone.mode.option_0":"3C","zone.mode.option_1":"NO","zone.mode.option_2":"NC","zone.mode.option_3":"BELL","zone.delay":"Delay","zone.sensor":"Sensor","zone.sensor.option_0":"Smoke","zone.sensor.option_1":"Gas","zone.sensor.option_2":"PIR","zone.sensor.option_3":"Door","zone.sensor.option_4":"Window","zone.sensor.option_5":"Panic","zone.sensor.option_6":"Flood","zone.sensor.option_7":"Pull Cord","zone.sensor.option_8":"Bed Mat","scene.title":"Scene","scene.delay":"Activation time","scene.out":"Out","scene.home":"Home","scene.sleep":"Sleep","video.camera_first":"Camera First","video.rtsp":"RTSP Feed","video.rtsp.option_0":"Disabled","relay.title":"Relay","relay.local":"Local Relay","relay.local.delay":"Relay Delay","relay.local.type":"Relay Type","relay.local.type.option_0":"Open Door","relay.local.type.option_1":"Chime Bell","relay.door":"Door Relay","relay.door.button":"Button","relay.door.name":"Name","relay.door.type":"Type","relay.door.type.option_0":"Local Relay","relay.door.type.option_1":"DTMF","relay.door.type.option_2":"HTTP","relay.door.value":"Value","relay.door.http":"HTTP URL","relay.door.error":"Invalid DTMF value!","more.title_0":"SOS","more.title_1":"Wallpaper","more.title_2":"Logo","more.reset":"Reset","more.reset.loading":"Resetting...","more.reset.success":"Reset successfully!","more.reset.error":"Reset error!","more.photo.upload":"+ Upload","more.sos.delay":"Trigger Time","more.bkg.error_0":"Wrong image format!","more.bkg.error_1":"Image must smaller than 512KB!","more.bkg.error_2":"Image resolution cannot exceed","more.bkg.tip_0":"Image resolution: 1024*600/800*480/480*272 (subject to the actual resolution of the device)","more.bkg.tip_1":"Image format: JPG, PNG","more.bkg.tip_2":"Image size: <512KB","advanced.mac":"MAC","advanced.model":"Model","advanced.model.custom.option_0":"ODM","advanced.model.custom.option_1":"DNAKE","accounts.title":"Accounts Management","accounts.uuid":"UUID","accounts.key":"AuthKey","accounts.confirm":"The device will reboot after saving.","qrcode.title":"QR Code","qrcode.info":"Register Device","qrcode.error":"Please check if the account is online.","ipc.name":"Name","ipc.url":"IPC URL","ipc.tip":"Only add up to 8 IP cameras."}')},348:function(e){e.exports=JSON.parse('{"save.button":"Zapisz","save.loading":"Zapisz...","save.success":"Pomy\u015blny zapis!","save.error":"B\u0142\u0105d zapisu!","misc.none":"Brak","misc.start":"Start","misc.stop":"Stop","misc.enabled":"W\u0142\u0105czony","misc.disabled":"Wy\u0142\u0105czona","misc.action":"Edycja","misc.read":"Odczyt","misc.relay":"Przeka\u017anik","misc.reboot.description":"System ma zosta\u0107 ponownie uruchomiony!","misc.table.index":"Numer","misc.table.add":"Dodaj","misc.table.add.error":"Poza maksymalnym zakresem dodawania","misc.table.edit":"Edytuj","misc.table.del":"Usu\u0144 Wybierz","misc.table.del.loading":"Usuwanie...","misc.table.del.success":"Usuni\u0119cie powiod\u0142o si\u0119!","misc.table.del.error":"Usuwanie nie powiod\u0142o si\u0119!","misc.table.del.tip":"Czy na pewno chcesz usun\u0105\u0107 wybrane dane?","misc.table.delAll":"Usu\u0144 wszystko","misc.table.delAll.tip":"Czy na pewno chcesz usun\u0105\u0107 wszystkie dane?","misc.table.import":"Import","misc.table.export":"Eksport","misc.table.search":"Wyszukiwanie","misc.table.reset":"Resetuj","misc.table.select":"Wybrano","misc.readCard.loading":"Odczyt karty...","misc.readCard.loading.tip":"Przeci\u0105gnij kart\u0119 w strefie czytnika kart.","misc.readCard.success":"Pomy\u015blny odczyt!","misc.readCard.error":"B\u0142\u0105d odczytu!","misc.readCard.timeout":"Przekroczony czas odczytu!","misc.readCard.stop":"Zatrzymaj odczyt!","misc.download.loading":"Pobieranie...","misc.download.success":"Pobieranie powiod\u0142o si\u0119!","misc.download.error":"B\u0142\u0105d pobierania!","misc.ipInput.error":"Nieprawid\u0142owy adres IP!","misc.nameInput.error":"Nieprawid\u0142owy ci\u0105g znak\xf3w!","misc.seconds":"s","misc.minute":"min","misc.minutes":"mins","misc.url":"Adres IP","misc.pwd":"Has\u0142o","importFile.modalTitle":"Import","importFile.select":"Wybierz plik","importFile.success":"Przesy\u0142anie powiod\u0142o si\u0119!","importFile.error":"Przesy\u0142anie nie powiod\u0142o si\u0119, sprawd\u017a czy plik jest poprawny!","importFile.error_1":"Nieprawid\u0142owy plik!","importFile.format":"Format pliku","importFile.start":"Rozpocznij przesy\u0142anie","importFile.loading":"Przesy\u0142anie...","importFile.tips":"Zaimportowany plik wyczy\u015bci oryginalne dane.","login.title":"KENIK","login.error":"Nieprawid\u0142owa nazwa u\u017cytkownika lub has\u0142o!","login.error_1":"Sprawd\u017a ponownie nazw\u0119 u\u017cytkownika lub has\u0142o!","login.error_2":"Wprowad\u017a nazw\u0119 u\u017cytkownika!","login.error_3":"Wprowad\u017a has\u0142o!","login.rememberMe":"Zapami\u0119taj mnie","login.button":"Zaloguj si\u0119","login.timeout.error":"Przekroczony czas na logowanie!","login.timeout.error_1":"Zaloguj si\u0119 ponownie!","frameout.menu.general":"Og\xf3lne","frameout.menu.intercom":"Interkom","frameout.menu.security":"Bezpiecze\u0144stwo","frameout.menuItem.advanced":"Zaawansowane","frameout.menuItem.dashboard":"Informacje","frameout.menuItem.time":"Czas","frameout.menuItem.basic":"Podstawowe","frameout.menuItem.password":"Has\u0142o","frameout.menuItem.system":"System","frameout.menuItem.device":"Urz\u0105dzenie","frameout.menuItem.network":"Admin / WWW","frameout.menuItem.voip":"SIP","frameout.menuItem.call":"Po\u0142\u0105czenie","frameout.menuItem.phonebook":"Ksi\u0105\u017cka telefoniczna","frameout.menuItem.callLogs":"Dzienniki po\u0142\u0105cze\u0144","frameout.menuItem.zone":"Strefa","frameout.menuItem.scene":"Scena","frameout.menuItem.video":"Wideo","frameout.menuItem.relay":"Przeka\u017anik","frameout.menuItem.more":"Wi\u0119cej","frameout.menuItem.accounts":"Konta","frameout.menuItem.qrcode":"Kod QR","frameout.menuItem.ipc":"Kamera IP","topMenu.logout":"Wylogowanie","topMenu.hello":"Witaj,","dashboard.title":"Produkt","dashboard.title_1":"Sie\u0107","dashboard.title_2":"Konto SIP","dashboard.product.model":"Model","dashboard.product.talk":"Framework","dashboard.product.fw":"Wersja oprogramowania sprz\u0119towego","dashboard.product.ui":"UI","dashboard.product.mac":"Adres MAC","dashboard.product.mcu":"MCU","dashboard.account.sipUser":"Konto","dashboard.account.status":"Status","dashboard.account.status.option_0":"Wy\u0142\u0105czone","dashboard.account.status.option_1":"Powodzenie rejestru","dashboard.account.status.option_2":"Rejestr nie powi\xf3d\u0142 si\u0119","time.title":"Czas","time.title_1":"Czas letni","time.monthList_0":"Sty","time.monthList_1":"Lut","time.monthList_2":"Mar","time.monthList_3":"Kwi","time.monthList_4":"Maj","time.monthList_5":"Cze","time.monthList_6":"Lip","time.monthList_7":"Sie","time.monthList_8":"Wrz","time.monthList_9":"Pa\u017a","time.monthList_10":"List","time.monthList_11":"Gru","time.weekList_0":"Pierwszy","time.weekList_1":"Drugi","time.weekList_2":"Trzeci","time.weekList_3":"Czwarty","time.weekList_4":"Ostatni","time.dayList_0":"Nd.","time.dayList_1":"Pn.","time.dayList_2":"Wt.","time.dayList_3":"\u015ar.","time.dayList_4":"Czw.","time.dayList_5":"Pt.","time.dayList_6":"Sb.","time.date":"Data i godzina","time.date.error":"Wybierz dat\u0119 i godzin\u0119!","time.ntp.enable":"Auto (Czas)","time.ntp.url":"URL NTP","time.tz":"Strefa czasowa","time.dst.start":"Czas rozpocz\u0119cia","time.dst.end":"Czas zako\u0144czenia","time.dst.offset":"Czas przesuni\u0119cia","time.dst.offset.min":"min","time.timeFormat":"12H/24H","time.timeFormat.option_0":"12H","time.timeFormat.option_1":"24H","time.dateFormat":"Format daty","time.dateFormat.option_0":"MM-DD-RRRR","time.dateFormat.option_1":"DD-MM-RRRR","time.dateFormat.option_2":"RRRR-MM-DD","basic.title":"J\u0119zyk","basic.title_1":"Interkom","basic.title_2":"Funkcja \\"nie przeszkadza\u0107\\"","basic.title_3":"Wy\u015bwietlacz","basic.bright":"Jasno\u015b\u0107","basic.sleep":"U\u015bpienie","basic.screen_lock":"Blokada ekranu","basic.volume.sys":"G\u0142o\u015bno\u015b\u0107 systemu","basic.volume.talk":"G\u0142o\u015bno\u015b\u0107 interkomu","basic.ring":"D\u017awi\u0119k dzwonka","basic.key_tone":"D\u017awi\u0119k klawiszy","basic.call_monitor":"Po\u0142\u0105czenie z monitora","basic.huangup":"Roz\u0142\u0105czenie po odblokowaniu","basic.answer":"Automatyczne odbieranie","basic.dnd.mode_0":"Ca\u0142y dzie\u0144","basic.dnd.mode_1":"Czasowe","basic.dnd.start":"Czas rozpocz\u0119cia","basic.dnd.start.error":"Wprowad\u017a godzin\u0119 rozpocz\u0119cia","basic.dnd.end":"Godzina zako\u0144czenia","basic.dnd.end.error":"Wprowad\u017a godzin\u0119 zako\u0144czenia","password.title":"Has\u0142o","password.tab.title":"System","password.tab.title_1":"U\u017cytkownik","password.tab.title_2":"Web","password.save.success":"Has\u0142o zosta\u0142o pomy\u015blnie zmienione!","password.save.success_1":"Zaloguj si\u0119 ponownie","password.save.error":"Nieprawid\u0142owe stare has\u0142o!","password.save.error_1":"Sprawd\u017a ponownie stare has\u0142o","password.old":"Stare has\u0142o","password.new":"Nowe has\u0142o","password.new.error_0":"Maksymalnie 8 znak\xf3w!","password.new.error_1":"Maksymalnie 10 znak\xf3w!","password.new.error_2":"Has\u0142o zawiera nieprawid\u0142owe znaki!","password.confirm":"Potwierd\u017a has\u0142o","password.confirm.error":"Nowe has\u0142o nie pasuje!","system.title":"System","system.tab":"Kopia zapasowa i import","system.tab_1":"Debugowanie","system.backupRestore":"Kopia zapasowa i przywracanie","system.backupRestore.text":"Kopia zapasowa wszystkich ustawie\u0144 i przywracanie ustawie\u0144.","system.backup":"Kopia zapasowa","system.backup.loading":"\u0141adowanie kopii zapasowej...","system.backup.success":"Kopia zapasowa pomy\u015blnie!","system.backup.error":"B\u0142\u0105d kopii zapasowej!","system.backup.timeout":"Limit czasu tworzenia kopii zapasowej!","system.restore":"Przywracanie","system.restore.success":"Przywracanie powiod\u0142o si\u0119!","system.upgrade":"Aktualizacja","system.upgrade.success":"Aktualizacja powiod\u0142a si\u0119!","system.upgrade.error":"B\u0142\u0105d aktualizacji!","system.upgrade.error_1":"Sprawd\u017a, czy plik aktualizacji jest prawid\u0142owy!","system.upgrade.text":"Aktualizacja sprz\u0119tu","system.reset":"Reset","system.reset.text":"Przywr\xf3\u0107 ustawienia fabryczne","system.reset.tip":"Czy na pewno chcesz zresetowa\u0107?","system.reset.message":"Reset powi\xf3d\u0142 si\u0119!","system.reboot":"Restart","system.reboot.tip":"Czy na pewno chcesz zrestartowa\u0107 urz\u0105dzenie?","system.reboot.text":"Uruchom ponownie urz\u0105dzenie","system.reboot.message":"Ponowne uruchomienie powiod\u0142o si\u0119!","system.capture.text":"Przechwytywanie pakiet\xf3w","system.capture.text_1":"Przechwytywanie pakiet\xf3w mo\u017ce pom\xf3c programistom w odtworzeniu problem\xf3w z pozycjonowaniem.","system.log.text":"Dzienniki","system.log.text_1":"Dzienniki urz\u0105dzenia","system.screenshot":"Zrzut ekranu","system.screenshot.text":"Zrzut ekranu interfejsu urz\u0105dzenia","system.ping.text":"Server Connection Test","system.ping.text_1":"Server network connection performance test.","device.title":"Urz\u0105dzenie","device.build":"Budynek","device.build.rang":"Numery budynk\xf3w: 1~999","device.unit":"Strefa","device.unit.rang":"Numery stref: 0~99","device.room":"Pok\xf3j","device.room.rang":"Numery pokoj\xf3w: 1~999","device.index":"Urz\u0105dzenie","device.index.rang":"Numery urz\u0105dze\u0144: 0~9","device.sync":"Nr. synchronizacji","network.eth":"Ethernet","network.wifi":"Wi-Fi","network.wifi.pwd.err":"Has\u0142o nie mo\u017ce zawiera\u0107 mniej ni\u017c 8 znak\xf3w!","network.wifi.pwd.err_1":"Nie uda\u0142o si\u0119 po\u0142\u0105czy\u0107, spr\xf3buj ponownie!","network.wifi.connecting":"\u0141\u0105czenie...","network.wifi.disconnect":"Po\u0142\u0105czenie nie powiod\u0142o si\u0119, spr\xf3buj ponownie!","network.wifi.delete":"Urz\u0105dzenie przestanie automatycznie \u0142\u0105czy\u0107 si\u0119 z t\u0105 sieci\u0105.","network.wifi.getinfo":"Pobieranie informacji WiFi...","network.dhcp":"DHCP","network.ip":"Adres IP","network.mask":"Maska","network.gateway":"Brama","network.dns":"DNS","network.cms":"Zarejestruj si\u0119 w CMS","network.cms.server":"CMS IP","network.cms.password":"Has\u0142o","network.notification":"Zaloguj si\u0119 ponownie zgodnie z rzeczywistym adresem IP urz\u0105dzenia!","network.inerecom":"Sie\u0107 interkomu","network.inerecom.tip":"Po wybraniu Ethernet/WiFi po\u0142\u0105czenie b\u0119dzie korzysta\u0107 z sieci przewodowej/WiFi.","voip.title":"SIP","voip.port":"Port","voip.port.tip":"Domy\u015blny port to 5060","voip.proxy":"Host serwera SIP","voip.outbound":"Proxy wychodz\u0105ce","voip.display_name":"Wy\u015bwietlana nazwa","voip.register_name":"Domena rejestracji SIP","voip.username":"Nazwa u\u017cytkownika","voip.password":"Has\u0142o","voip.transport":"Protok\xf3\u0142 transportu","voip.ring_code":"G\u0142\xf3wny kod odpowied\u017ai","voip.h264":"Format RTP","voip.h264.tip":"Zakres: 96~127","call.title":"Po\u0142\u0105czenie z portierni\u0105","call.title_1":"Zaawansowane","call.title_2":"Ustawienia","call.concierge":"Komunikat IP","call.concierge.enable":"Ikona Portiera","call.ex_slv":"Rozszerzenie po\u0142\u0105cze\u0144","call.multicast":"Multicast","call.multicast.tip":"Po ustawieniu switcha, urz\u0105dzenie musi zosta\u0107 ponownie uruchomione, aby dzia\u0142a\u0142o prawid\u0142owo.","call.ringing":"Czas dzwonka","call.timeout":"Czas po\u0142\u0105czenia","phonebook.title":"Ksi\u0105\u017cka telefoniczna","phonebook.name":"Nazwa","phonebook.type":"Typ","phonebook.type.tip":"Typ (0=Nr pokoju; 1=Adres IP; 2=Adres SIP)","phonebook.type.option_0":"Numer pokoju","phonebook.type.option_1":"Adres IP","phonebook.type.option_2":"Adres SIP","phonebook.number":"Numer","phonebook.add_in":"Grupa","phonebook.add_in.tip":"Grupa (0=Ksi\u0105\u017cka telefoniczna; 1=Bia\u0142a lista)","phonebook.whitelist":"Bia\u0142a lista","phonebook.error":"Nazwa ju\u017c istnieje na li\u015bcie!","phonebook.error_1":"Wprowad\u017a poprawny adres SIP!","phonebook.error_2":"Wybierz co najmniej jedn\u0105 pozycj\u0119","phonebook.search.name":"Nazwa wyszukiwania","phonebook.search.number":"Numer wyszukiwania","callLogs.type":"Typ","callLogs.type.option_0":"Odpowied\u017a","callLogs.type.option_1":"Wychodz\u0105ce","callLogs.type.option_2":"Nieodebrane","callLogs.name":"Nazwa","callLogs.number":"Numer","callLogs.timeout":"Czas trwania","callLogs.date":"Data i godzina","callLogs.search.name":"Szukaj nazwy","callLogs.search.number":"Szukaj numeru","zone.title":"Strefa","zone.type":"Typ","zone.type.option_0":"Normalna","zone.type.option_1":"Awaryjna","zone.type.option_2":"24-godzinna","zone.mode":"Tryb","zone.mode.option_0":"3C","zone.mode.option_1":"NO","zone.mode.option_2":"NC","zone.mode.option_3":"Dzwonek","zone.delay":"Op\xf3\u017anienie","zone.sensor":"Czujnik","zone.sensor.option_0":"Dymu","zone.sensor.option_1":"Gazu","zone.sensor.option_2":"PIR","zone.sensor.option_3":"Drzwiowy","zone.sensor.option_4":"Okienny","zone.sensor.option_5":"Napadowy","zone.sensor.option_6":"Zalania","zone.sensor.option_7":"Linkowy","zone.sensor.option_8":"Przy\u0142\xf3\u017ckowy","scene.title":"Scena","scene.delay":"Czas aktywacji","scene.out":"Poza domem","scene.home":"Dom","scene.sleep":"Nocny","video.camera_first":"Pierwsza kamera","video.rtsp":"RTSP Feed","video.rtsp.option_0":"Wy\u0142\u0105czona","relay.title":"Przeka\u017anik","relay.local":"Przeka\u017anik lokalny","relay.local.delay":"Op\xf3\u017anienie przeka\u017anika","relay.local.type":"Typ przeka\u017anika","relay.local.type.option_0":"Otwarcie drzwi","relay.local.type.option_1":"Dzwonek","relay.door":"Przeka\u017anik drzwi","relay.door.button":"Przycisk","relay.door.name":"Nazwa","relay.door.type":"Typ","relay.door.type.option_0":"Przeka\u017anik lokalny","relay.door.type.option_1":"DTMF","relay.door.type.option_2":"HTTP","relay.door.value":"Warto\u015b\u0107","relay.door.http":"URL HTTP","relay.door.error":"Nieprawid\u0142owa warto\u015b\u0107 DTMF!","more.title_0":"SOS","more.title_1":"Tapeta","more.title_2":"Logo","more.reset":"Reset","more.reset.loading":"Resetowanie...","more.reset.success":"Resetowanie powiod\u0142o si\u0119!","more.reset.error":"B\u0142\u0105d resetowania!","more.photo.upload":"+ Przesy\u0142anie","more.sos.delay":"Czas wyzwalania","more.bkg.error_0":"Nieprawid\u0142owy format obrazu!","more.bkg.error_1":"Obraz musi by\u0107 mniejszy ni\u017c 512KB!","more.bkg.error_2":"Rozdzielczo\u015b\u0107 obrazu nie mo\u017ce przekracza\u0107","more.bkg.tip_0":"Rozdzielczo\u015b\u0107 obrazu: 1024*600/800*480/480*272 (w zale\u017cno\u015bci od rzeczywistej rozdzielczo\u015bci urz\u0105dzenia)","more.bkg.tip_1":"Format obrazu: JPG, PNG","more.bkg.tip_2":"Rozmiar obrazu: <512KB","advanced.mac":"MAC","advanced.model":"Model","advanced.model.custom.option_0":"ODM","advanced.model.custom.option_1":"KENIK","accounts.title":"Zarz\u0105dzanie kontami","accounts.uuid":"UUID","accounts.key":"AuthKey","accounts.confirm":"Po zapisaniu urz\u0105dzenie uruchomi si\u0119 ponownie.","qrcode.title":"Kod QR","qrcode.info":"Zarejestruj urz\u0105dzenie","qrcode.error":"Zeskanuj kod QR urz\u0105dzenia z monitora","ipc.name":"Nazwa","ipc.url":"IPC URL","ipc.tip":"Do urz\u0105dzenia mo\u017cna doda\u0107 tylko 8 kamer IP"}')},349:function(e){e.exports=JSON.parse('{"save.button":"\u4fdd\u5b58","save.loading":"\u4fdd\u5b58\u4e2d...","save.success":"\u4fdd\u5b58\u6210\u529f\uff01","save.error":"\u4fdd\u5b58\u5931\u8d25\uff01","misc.none":"None","misc.start":"\u5f00\u59cb","misc.stop":"\u505c\u6b62","misc.enabled":"\u5f00\u542f","misc.disabled":"\u5173\u95ed","misc.action":"\u64cd\u4f5c","misc.read":"\u8bfb\u53d6","misc.relay":"\u7ee7\u7535\u5668","misc.reboot.description":"\u7cfb\u7edf\u5373\u5c06\u91cd\u542f!","misc.table.index":"\u5e8f\u53f7","misc.table.add":"\u6dfb\u52a0","misc.table.add.error":"\u8d85\u51fa\u6700\u5927\u53ef\u6dfb\u52a0\u8303\u56f4","misc.table.edit":"\u7f16\u8f91","misc.table.del":"\u5220\u9664\u6240\u9009\u5185\u5bb9","misc.table.del.loading":"\u5220\u9664\u4e2d...","misc.table.del.success":"\u5220\u9664\u6210\u529f!","misc.table.del.error":"\u5220\u9664\u5931\u8d25!","misc.table.del.tip":"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e9b\u6570\u636e\u5417\uff1f","misc.table.delAll":"\u5220\u9664\u6240\u6709","misc.table.delAll.tip":"\u4f60\u786e\u5b9a\u8981\u5220\u9664\u6240\u6709\u6570\u636e\u5417\uff1f","misc.table.import":"\u5bfc\u5165","misc.table.export":"\u5bfc\u51fa","misc.table.search":"\u641c\u7d22","misc.table.reset":"\u91cd\u7f6e","misc.table.select":"\u5df2\u9009","misc.readCard.loading":"\u8bfb\u5361\u4e2d...","misc.readCard.loading.tip":"\u8bf7\u5728\u5237\u5361\u533a\u57df\u5237\u5361","misc.readCard.success":"\u8bfb\u53d6\u6210\u529f\uff01","misc.readCard.error":"\u8bfb\u53d6\u5931\u8d25\uff01","misc.readCard.timeout":"\u8bfb\u53d6\u8d85\u65f6\uff01","misc.readCard.stop":"\u505c\u6b62\u8bfb\u53d6\uff01","misc.download.loading":"\u4e0b\u8f7d\u4e2d...","misc.download.success":"\u4e0b\u8f7d\u6210\u529f!","misc.download.error":"\u4e0b\u8f7d\u5931\u8d25!","misc.ipInput.error":"\u65e0\u6548IP\u5730\u5740!","misc.nameInput.error":"\u975e\u6cd5\u5b57\u7b26\u4e32\uff01","misc.seconds":"\u79d2","misc.minute":"\u5206","misc.minutes":"\u5206","misc.url":"\u5730\u5740","misc.pwd":"\u5bc6\u7801","importFile.modalTitle":"\u5bfc\u5165","importFile.select":"\u9009\u62e9\u6587\u4ef6","importFile.success":"\u4e0a\u4f20\u6210\u529f\uff01","importFile.error":"\u4e0a\u4f20\u5931\u8d25, \u8bf7\u91cd\u65b0\u68c0\u67e5\u6587\u4ef6\u662f\u5426\u6b63\u786e\uff01","importFile.error_1":"\u65e0\u6548\u6587\u4ef6!","importFile.format":"\u6587\u4ef6\u683c\u5f0f\uff1a","importFile.start":"\u5f00\u59cb\u4e0a\u4f20","importFile.loading":"\u4e0a\u4f20\u4e2d...","importFile.tips":"\u5bfc\u5165\u7684\u6587\u4ef6\u5c06\u4f1a\u6e05\u9664\u539f\u6709\u6570\u636e\u3002","login.title":"DNAKE","login.error":"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef\uff01","login.error_1":"\u8bf7\u5728\u6b64\u68c0\u67e5\u7528\u6237\u540d\u6216\u5bc6\u7801\uff01","login.error_2":"\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01","login.error_3":"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01","login.rememberMe":"\u8bb0\u4f4f\u6211","login.button":"\u767b\u5f55","login.timeout.error":"\u767b\u5f55\u8d85\u65f6\uff01","login.timeout.error_1":"\u8bf7\u91cd\u65b0\u767b\u5f55","frameout.menu.general":"\u5e38\u89c4\u8bbe\u7f6e","frameout.menu.intercom":"\u5bf9\u8bb2\u8bbe\u7f6e","frameout.menu.security":"\u5b89\u9632\u62a5\u8b66","frameout.menuItem.advanced":"\u9ad8\u7ea7\u8bbe\u7f6e","frameout.menuItem.dashboard":"\u4fe1\u606f","frameout.menuItem.time":"\u65f6\u95f4","frameout.menuItem.basic":"\u57fa\u7840\u8bbe\u7f6e","frameout.menuItem.password":"\u5bc6\u7801","frameout.menuItem.system":"\u7cfb\u7edf","frameout.menuItem.device":"\u8bbe\u5907","frameout.menuItem.network":"\u7f51\u7edc","frameout.menuItem.voip":"SIP","frameout.menuItem.call":"\u547c\u53eb","frameout.menuItem.phonebook":"\u7535\u8bdd\u7c3f","frameout.menuItem.callLogs":"\u547c\u53eb\u8bb0\u5f55","frameout.menuItem.zone":"\u9632\u533a","frameout.menuItem.scene":"\u6a21\u5f0f","frameout.menuItem.video":"\u89c6\u9891","frameout.menuItem.relay":"\u7ee7\u7535\u5668","frameout.menuItem.more":"\u66f4\u591a","frameout.menuItem.accounts":"\u8d26\u53f7","frameout.menuItem.qrcode":"\u4e8c\u7ef4\u7801","frameout.menuItem.ipc":"IP \u6444\u50cf\u5934","topMenu.logout":"\u767b\u51fa","topMenu.hello":"\u4f60\u597d\uff0c","dashboard.title":"\u8bbe\u5907","dashboard.title_1":"\u7f51\u7edc","dashboard.title_2":"SIP\u8d26\u53f7","dashboard.product.model":"\u578b\u53f7","dashboard.product.talk":"\u8f6f\u4ef6\u7248\u672c","dashboard.product.fw":"\u56fa\u4ef6\u7248\u672c","dashboard.product.ui":"UI","dashboard.product.mac":"MAC\u5730\u5740","dashboard.product.mcu":"MCU","dashboard.account.sipUser":"\u8d26\u53f7","dashboard.account.status":"\u72b6\u6001","dashboard.account.status.option_0":"\u7981\u7528","dashboard.account.status.option_1":"\u6ce8\u518c\u6210\u529f","dashboard.account.status.option_2":"\u6ce8\u518c\u5931\u8d25","time.title":"\u65f6\u95f4","time.title_1":"\u590f\u4ee4\u65f6","time.monthList_0":"\u4e00\u6708","time.monthList_1":"\u4e8c\u6708","time.monthList_2":"\u4e09\u6708","time.monthList_3":"\u56db\u6708","time.monthList_4":"\u4e94\u6708","time.monthList_5":"\u516d\u6708","time.monthList_6":"\u4e03\u6708","time.monthList_7":"\u516b\u6708","time.monthList_8":"\u4e5d\u6708","time.monthList_9":"\u5341\u6708","time.monthList_10":"\u5341\u4e00\u6708","time.monthList_11":"\u5341\u4e8c\u6708","time.weekList_0":"\u7b2c\u4e00\u4e2a","time.weekList_1":"\u7b2c\u4e8c\u4e2a","time.weekList_2":"\u7b2c\u4e09\u4e2a","time.weekList_3":"\u7b2c\u56db\u4e2a","time.weekList_4":"\u6700\u540e","time.dayList_0":"\u661f\u671f\u65e5","time.dayList_1":"\u661f\u671f\u4e00","time.dayList_2":"\u661f\u671f\u4e8c","time.dayList_3":"\u661f\u671f\u4e09","time.dayList_4":"\u661f\u671f\u56db","time.dayList_5":"\u661f\u671f\u4e94","time.dayList_6":"\u661f\u671f\u516d","time.date":"\u65e5\u671f\u548c\u65f6\u95f4","time.date.error":"\u8bf7\u5148\u9009\u62e9\u65e5\u671f\u548c\u65f6\u95f4\uff01","time.ntp.enable":"\u81ea\u52a8\u8bbe\u7f6e\uff08\u65f6\u95f4\uff09","time.ntp.url":"NTP\u5730\u5740","time.tz":"\u65f6\u533a","time.dst.start":"\u5f00\u59cb\u65f6\u95f4","time.dst.end":"\u7ed3\u675f\u65f6\u95f4","time.dst.offset":"\u504f\u79fb\u65f6\u95f4","time.dst.offset.min":"\u5206\u949f","time.timeFormat":"12\u5c0f\u65f6\u5236/24\u5c0f\u65f6\u5236","time.timeFormat.option_0":"12\u5c0f\u65f6\u5236","time.timeFormat.option_1":"24\u5c0f\u65f6\u5236","time.dateFormat":"\u65e5\u671f\u683c\u5f0f","time.dateFormat.option_0":"\u6708-\u65e5-\u5e74","time.dateFormat.option_1":"\u65e5-\u6708-\u5e74","time.dateFormat.option_2":"\u5e74-\u6708-\u65e5","basic.title":"\u8bed\u8a00","basic.title_1":"\u5bf9\u8bb2","basic.title_2":"\u514d\u6253\u6270","basic.title_3":"\u663e\u793a","basic.bright":"\u4eae\u5ea6","basic.sleep":"\u4f11\u7720\u65f6\u95f4","basic.screen_lock":"\u9501\u5c4f","basic.volume.sys":"\u7cfb\u7edf\u97f3\u91cf","basic.volume.talk":"\u5bf9\u8bb2\u97f3\u91cf","basic.ring":"\u94c3\u58f0","basic.key_tone":"\u6309\u952e\u58f0","basic.call_monitor":"\u5ba4\u5185\u673a\u547c\u53eb\u5ba4\u5185\u673a","basic.huangup":"\u5f00\u9501\u540e\u81ea\u52a8\u6302\u65ad","basic.answer":"\u81ea\u52a8\u63a5\u542c","basic.dnd.mode_0":"\u5168\u5929","basic.dnd.mode_1":"\u5468\u671f","basic.dnd.start":"\u5f00\u59cb\u65f6\u95f4","basic.dnd.start.error":"\u8bf7\u9009\u62e9\u5f00\u59cb\u65f6\u95f4","basic.dnd.end":"\u7ed3\u675f\u65f6\u95f4","basic.dnd.end.error":"\u8bf7\u9009\u62e9\u7ed3\u675f\u65f6\u95f4","password.title":"\u5bc6\u7801","password.tab.title":"\u7cfb\u7edf","password.tab.title_1":"\u7528\u6237","password.tab.title_2":"\u7f51\u9875","password.save.success":"\u5bc6\u7801\u4fee\u6539\u6210\u529f\uff01","password.save.success_1":"\u8bf7\u91cd\u65b0\u767b\u5f55","password.save.error":"\u65e7\u5bc6\u7801\u9519\u8bef\uff01","password.save.error_1":"\u8bf7\u518d\u6b21\u786e\u8ba4\u5bc6\u7801\uff01","password.old":"\u65e7\u5bc6\u7801","password.new":"\u65b0\u5bc6\u7801","password.new.error_0":"\u6700\u591a\u652f\u63018\u4f4d\u6570\u5b57\uff01","password.new.error_1":"\u6700\u591a\u652f\u630110\u4e2a\u5b57\u7b26\uff01","password.new.error_2":"\u5bc6\u7801\u5305\u542b\u65e0\u6548\u5b57\u7b26\uff01","password.confirm":"\u786e\u8ba4\u5bc6\u7801","password.confirm.error":"\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4\uff01","system.title":"\u7cfb\u7edf","system.tab":"\u5907\u4efd\u4e0e\u5bfc\u5165","system.tab_1":"\u8c03\u8bd5","system.backupRestore":"\u5907\u4efd\u4e0e\u6062\u590d","system.backupRestore.text":"\u5907\u4efd\u3001\u6062\u590d\u8bbe\u7f6e","system.backup":"\u5907\u4efd","system.backup.loading":"\u5907\u4efd\u4e2d...","system.backup.success":"\u5907\u4efd\u6210\u529f\uff01","system.backup.error":"\u5907\u4efd\u5931\u8d25\uff01","system.backup.timeout":"\u5907\u4efd\u8d85\u65f6\uff01","system.restore":"\u6062\u590d","system.restore.success":"\u6062\u590d\u6210\u529f\uff01","system.upgrade":"\u5347\u7ea7","system.upgrade.success":"\u5347\u7ea7\u6210\u529f\uff01","system.upgrade.error":"\u5347\u7ea7\u5931\u8d25\uff01","system.upgrade.error_1":"\u8bf7\u68c0\u67e5\u5347\u7ea7\u6587\u4ef6\u662f\u5426\u6b63\u786e\uff01","system.upgrade.text":"\u5347\u7ea7\u8bbe\u5907","system.reset":"\u91cd\u7f6e","system.reset.text":"\u6062\u590d\u51fa\u5382\u8bbe\u7f6e","system.reset.tip":"\u4f60\u786e\u5b9a\u8981\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\u5417\uff1f","system.reset.message":"\u6062\u590d\u51fa\u5382\u8bbe\u7f6e\u6210\u529f!","system.reboot":"\u91cd\u542f","system.reboot.tip":"\u4f60\u786e\u5b9a\u8981\u91cd\u542f\u5417\uff1f","system.reboot.text":"\u8bbe\u5907\u91cd\u542f","system.reboot.message":"\u91cd\u542f\u6210\u529f\uff01","system.capture.text":"\u6570\u636e\u5305\u6355\u83b7","system.capture.text_1":"\u6355\u83b7\u6570\u636e\u5305\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u91cd\u73b0\u5b9a\u4f4d\u95ee\u9898","system.log.text":"\u65e5\u5fd7","system.log.text_1":"\u8bbe\u5907\u65e5\u5fd7","system.screenshot":"\u622a\u56fe","system.screenshot.text":"\u622a\u53d6\u8bbe\u5907\u754c\u9762","system.ping.text":"\u670d\u52a1\u5668\u8fde\u63a5\u6d4b\u8bd5","system.ping.text_1":"\u670d\u52a1\u5668\u7f51\u7edc\u8fde\u63a5\u6027\u80fd\u6d4b\u8bd5","device.title":"\u8bbe\u5907","device.build":"\u680b\u53f7","device.build.rang":"\u680b\u53f7\u8303\u56f4\uff1a1~999","device.unit":"\u5355\u5143\u53f7","device.unit.rang":"\u5355\u5143\u53f7\u8303\u56f4\uff1a0~99","device.room":"\u623f\u53f7","device.room.rang":"\u623f\u53f7\u8303\u56f4\uff1a0~9899","device.index":"\u8bbe\u5907\u7f16\u53f7","device.index.rang":"\u8bbe\u5907\u7f16\u53f7\u8303\u56f4\uff1a0~9","device.sync":"\u540c\u6b65\u7801","network.eth":"\u4ee5\u592a\u7f51","network.wifi":"Wi-Fi","network.wifi.pwd.err":"\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e8\u4f4d\u5b57\u7b26!","network.wifi.pwd.err_1":"\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01","network.wifi.connecting":"\u8fde\u63a5\u4e2d...","network.wifi.disconnect":"\u8fde\u63a5\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01","network.wifi.delete":"\u505c\u6b62\u81ea\u52a8\u8fde\u63a5\u6b64\u7f51\u7edc\uff0c\u518d\u6b21\u8fde\u63a5\u65f6\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u8f93\u5165\u5bc6\u7801\uff01","network.wifi.getinfo":"\u6b63\u5728\u83b7\u53d6WIFI\u4fe1\u606f...","network.dhcp":"DHCP","network.ip":"IP\u5730\u5740","network.mask":"\u5b50\u7f51\u63a9\u7801","network.gateway":"\u9ed8\u8ba4\u7f51\u5173","network.dns":"DNS","network.cms":"\u6ce8\u518c\u81f3CMS","network.cms.server":"CMS IP","network.cms.password":"\u5bc6\u7801","network.notification":"\u8bf7\u6839\u636e\u8bbe\u5907\u7684\u5b9e\u9645IP\u5730\u5740\u518d\u6b21\u767b\u5f55!","network.inerecom":"\u5bf9\u8bb2\u7f51\u7edc","network.inerecom.tip":"\u5f53\u9009\u62e9\u4ee5\u592a\u7f51/WiFi \u65f6\uff0c\u901a\u8bdd\u5c06\u4f7f\u7528\u6709\u7ebf/WiFi \u7f51\u7edc\u3002","voip.title":"SIP","voip.port":"\u7aef\u53e3\u53f7","voip.port.tip":"\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a5060","voip.proxy":"SIP\u670d\u52a1\u5668","voip.outbound":"SIP\u4ee3\u7406","voip.display_name":"\u663e\u793a\u540d\u79f0","voip.register_name":"\u767b\u9646\u540d","voip.username":"\u7528\u6237\u540d","voip.password":"\u5bc6\u7801","voip.transport":"\u4f20\u8f93\u534f\u8bae","voip.ring_code":"\u632f\u94c3\u7801","voip.h264":"\u89c6\u9891\u8f6c\u7801","voip.h264.tip":"\u89c6\u9891\u8f6c\u7801\u7684\u8303\u56f4: 96~127","call.title":"\u547c\u53eb\u7ba1\u7406\u673a","call.title_1":"\u9ad8\u7ea7","call.title_2":"\u8bbe\u7f6e","call.concierge":"\u6d88\u606fIP","call.concierge.enable":"\u7ba1\u7406\u673a\u56fe\u6807","call.ex_slv":"\u6269\u5c55\u5206\u673a","call.multicast":"\u7ec4\u64ad","call.multicast.tip":"\u8bbe\u7f6e\u5f00\u5173\u540e\uff0c\u8bbe\u5907\u9700\u91cd\u542f\u624d\u53ef\u751f\u6548","call.ringing":"\u632f\u94c3\u65f6\u95f4","call.timeout":"\u901a\u8bdd\u65f6\u95f4","phonebook.title":"\u7535\u8bdd\u7c3f","phonebook.name":"\u540d\u79f0","phonebook.type":"\u7c7b\u578b","phonebook.type.tip":"\u7c7b\u578b (0=\u623f\u53f7.; 1=IP\u5730\u5740; 2=SIP\u5730\u5740)","phonebook.type.option_0":"\u623f\u53f7","phonebook.type.option_1":"IP\u5730\u5740","phonebook.type.option_2":"SIP\u5730\u5740","phonebook.number":"\u53f7\u7801","phonebook.add_in":"\u7ec4","phonebook.add_in.tip":"\u7ec4\uff080=\u8054\u7cfb\u4eba\uff1b1=\u767d\u540d\u5355\uff09","phonebook.whitelist":"\u767d\u540d\u5355","phonebook.error":"\u8be5\u540d\u79f0\u5df2\u5b58\u5728\uff01","phonebook.error_1":"\u8bf7\u8f93\u5165\u6b63\u786e\u7684SIP\u5730\u5740","phonebook.error_2":"\u8bf7\u8f93\u5165\u81f3\u5c11\u9009\u62e9\u4e00\u9879","phonebook.search.name":"\u641c\u7d22\u540d\u79f0","phonebook.search.number":"\u641c\u7d22\u53f7\u7801","callLogs.type":"\u7c7b\u578b","callLogs.type.option_0":"\u5df2\u63a5","callLogs.type.option_1":"\u547c\u51fa","callLogs.type.option_2":"\u672a\u63a5","callLogs.name":"\u540d\u79f0","callLogs.number":"\u53f7\u7801","callLogs.timeout":"\u6301\u7eed\u65f6\u95f4","callLogs.date":"\u65e5\u671f\u548c\u65f6\u95f4","callLogs.search.name":"\u641c\u7d22\u540d\u79f0","callLogs.search.number":"\u641c\u7d22\u76ee\u6807","zone.title":"\u9632\u533a","zone.type":"\u7c7b\u578b","zone.type.option_0":"\u5ef6\u65f6","zone.type.option_1":"\u7d27\u6025","zone.type.option_2":"24\u5c0f\u65f6","zone.mode":"\u6a21\u5f0f","zone.mode.option_0":"3C","zone.mode.option_1":"NO","zone.mode.option_2":"NC","zone.mode.option_3":"BELL","zone.delay":"\u5ef6\u65f6","zone.sensor":"\u4f20\u611f\u5668","zone.sensor.option_0":"\u70df\u611f","zone.sensor.option_1":"\u7164\u6c14","zone.sensor.option_2":"\u7ea2\u5916","zone.sensor.option_3":"\u95e8\u78c1","zone.sensor.option_4":"\u7a97\u78c1","zone.sensor.option_5":"\u7d27\u6025\u6309\u94ae","zone.sensor.option_6":"\u6c34\u6d78","zone.sensor.option_7":"\u7d27\u6025\u7ef3\u7d22","zone.sensor.option_8":"\u5e8a\u5934\u6309\u94ae","scene.title":"\u6a21\u5f0f","scene.delay":"\u6fc0\u6d3b\u65f6\u95f4","scene.out":"\u5916\u51fa","scene.home":"\u5728\u5bb6","scene.sleep":"\u5c31\u5bdd","video.camera_first":"\u6444\u50cf\u5934\u4f18\u5148\u663e\u793a","video.rtsp":"RTSP\u89c6\u9891\u8f93\u5165","video.rtsp.option_0":"\u5173\u95ed","relay.title":"\u7ee7\u7535\u5668","relay.local":"\u672c\u673a\u7ee7\u7535\u5668","relay.local.delay":"\u7ee7\u7535\u5668\u5ef6\u65f6","relay.local.type":"\u7ee7\u7535\u5668\u7c7b\u578b","relay.local.type.option_0":"\u5f00\u95e8","relay.local.type.option_1":"\u94c3\u58f0","relay.door":"\u95e8\u53e3\u673a\u7ee7\u7535\u5668","relay.door.button":"\u6309\u94ae","relay.door.name":"\u540d\u79f0","relay.door.type":"\u7c7b\u578b","relay.door.type.option_0":"\u672c\u673a\u7ee7\u7535\u5668","relay.door.type.option_1":"DTMF","relay.door.type.option_2":"HTTP","relay.door.value":"\u503c","relay.door.http":"HTTP \u5730\u5740","relay.door.error":"\u65e0\u6548DTMF\u503c!","more.title_0":"SOS","more.title_1":"\u58c1\u7eb8","more.title_2":"Logo","more.reset":"\u91cd\u7f6e","more.reset.loading":"\u91cd\u7f6e\u4e2d...","more.reset.success":"\u91cd\u7f6e\u6210\u529f!","more.reset.error":"\u91cd\u7f6e\u5931\u8d25!","more.photo.upload":"+ \u4e0a\u4f20","more.sos.delay":"\u89e6\u53d1\u65f6\u95f4","more.bkg.error_0":"\u56fe\u7247\u683c\u5f0f\u9519\u8bef\uff01","more.bkg.error_1":"\u56fe\u7247\u5fc5\u987b\u5c0f\u4e8e 512KB\uff01","more.bkg.error_2":"\u56fe\u7247\u5206\u8fa8\u7387\u4e0d\u80fd\u8d85\u8fc7","more.bkg.tip_0":"\u56fe\u7247\u5206\u8fa8\u7387\uff1a1024*600/800*480/480*272\uff08\u4ee5\u8bbe\u5907\u5b9e\u9645\u5206\u8fa8\u7387\u4e3a\u51c6\uff09","more.bkg.tip_1":"\u56fe\u7247\u683c\u5f0f\uff1aJPG, PNG","more.bkg.tip_2":"\u56fe\u7247\u5927\u5c0f\uff1a<512KB","more.logo.tip_0":"\u56fe\u7247\u5206\u8fa8\u7387\uff1a136*28/107*23/82*31\uff08\u4ee5\u8bbe\u5907\u5b9e\u9645\u5206\u8fa8\u7387\u4e3a\u51c6\uff09","more.logo.tip_1":"\u56fe\u7247\u683c\u5f0f\uff1aJPG, PNG","more.logo.tip_2":"\u56fe\u7247\u5927\u5c0f\uff1a<512KB","advanced.mac":"MAC","advanced.model":"\u578b\u53f7","advanced.model.custom.option_0":"\u4e2d\u6027","advanced.model.custom.option_1":"\u54c1\u724c\uff08\u6e20\u9053\uff09","accounts.title":"\u8d26\u53f7\u7ba1\u7406","accounts.uuid":"UUID","accounts.key":"AuthKey","accounts.confirm":"\u8bbe\u5907\u5c06\u5728\u4fdd\u5b58\u540e\u91cd\u542f","qrcode.title":"\u4e8c\u7ef4\u7801","qrcode.info":"\u6ce8\u518c\u8bbe\u5907","qrcode.error":"\u8bf7\u68c0\u67e5\u8d26\u6237\u662f\u5426\u5728\u7ebf","ipc.name":"\u540d\u79f0","ipc.url":"IPC \u5730\u5740","ipc.tip":"\u53ea\u80fd\u6dfb\u52a08\u4e2a\u6444\u50cf\u5934"}')},35:function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var a=o(139),n=o.n(a),r=function(e,t,o){var a=o||7,r={data:t,expire:(new Date).getTime()+24*a*3600*1e3};n.a.setItem(e,JSON.stringify(r))},i=function(e){var t="";try{var o=n.a.getItem(e),a=(new Date).getTime();if(o){var r=JSON.parse(o);a<r.expire?t=r.data:n.a.removeItem(e)}}catch(i){console.log(i)}return t},s=function(e){n.a.removeItem(e)}},453:function(e,t,o){},667:function(e,t,o){"use strict";o.r(t);var a=o(231),n=o(0),r=o(40),i=o.n(r),s=o(37),m=o(38),c=o(65),l=o(64),d=o(31),u=o(66),p=o.n(u),b=o(225),y=o(32),h=o(187),w=o.n(h),g=o(323),k=o.n(g),f=o(324),z=o.n(f),_=o(146),v=o.n(_),I=(o(341),o(342),o(224)),j=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(m.a)(o,[{key:"componentDidUpdate",value:function(e){I.b.destroy(),b.a.destroy(),this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),o}(n.Component),P=Object(d.g)(j),O=o(19),L=o(29),S=o.n(L),x=o(672),C=o(8),N=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(m.a)(o,[{key:"render",value:function(){return Object(C.jsx)("div",{className:"loading",children:Object(C.jsx)(x.a,{})})}}]),o}(n.Component),R=S()({loader:function(){return Promise.all([o.e(0),o.e(6)]).then(o.bind(null,832))},loading:N}),D=S()({loader:function(){return Promise.all([o.e(0),o.e(12)]).then(o.bind(null,803))},loading:N}),M=S()({loader:function(){return Promise.all([o.e(0),o.e(11)]).then(o.bind(null,805))},loading:N}),T=S()({loader:function(){return Promise.all([o.e(1),o.e(0),o.e(16)]).then(o.bind(null,808))},loading:N}),A=S()({loader:function(){return Promise.all([o.e(1),o.e(0),o.e(29),o.e(17)]).then(o.bind(null,809))},loading:N}),F=S()({loader:function(){return Promise.all([o.e(0),o.e(25)]).then(o.bind(null,810))},loading:N}),E=S()({loader:function(){return Promise.all([o.e(0),o.e(10),o.e(13)]).then(o.bind(null,811))},loading:N}),U=S()({loader:function(){return Promise.all([o.e(0),o.e(21)]).then(o.bind(null,813))},loading:N}),W=S()({loader:function(){return Promise.all([o.e(2),o.e(0),o.e(9)]).then(o.bind(null,839))},loading:N}),B=S()({loader:function(){return Promise.all([o.e(0),o.e(15)]).then(o.bind(null,814))},loading:N}),G=S()({loader:function(){return Promise.all([o.e(1),o.e(0),o.e(19)]).then(o.bind(null,836))},loading:N}),K=S()({loader:function(){return Promise.all([o.e(0),o.e(27)]).then(o.bind(null,815))},loading:N}),H=S()({loader:function(){return Promise.all([o.e(0),o.e(8)]).then(o.bind(null,816))},loading:N}),Z=S()({loader:function(){return Promise.all([o.e(1),o.e(2),o.e(0),o.e(22)]).then(o.bind(null,817))},loading:N}),q=S()({loader:function(){return Promise.all([o.e(0),o.e(14)]).then(o.bind(null,818))},loading:N}),J=S()({loader:function(){return Promise.all([o.e(0),o.e(28)]).then(o.bind(null,819))},loading:N}),Y=S()({loader:function(){return Promise.all([o.e(0),o.e(24)]).then(o.bind(null,820))},loading:N}),V=(S()({loader:function(){return Promise.all([o.e(0),o.e(26)]).then(o.bind(null,821))},loading:N}),S()({loader:function(){return Promise.all([o.e(0),o.e(23)]).then(o.bind(null,822))},loading:N})),Q=S()({loader:function(){return Promise.all([o.e(1),o.e(0),o.e(18)]).then(o.bind(null,823))},loading:N}),X=S()({loader:function(){return o.e(20).then(o.bind(null,824))},loading:N}),$=S()({loader:function(){return Promise.all([o.e(0),o.e(7)]).then(o.bind(null,825))},loading:N}),ee={GENERAL:1,INTERCOM:2,SECURITY:3,ADVANCED:4,OTHER:5},te=[{pathname:"/admin/dashboard",component:R,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.dashboard"),subMenulevel:1},{pathname:"/admin/basic",component:E,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.basic"),subMenulevel:1},{pathname:"/admin/time",component:F,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.time"),subMenulevel:1},{pathname:"/admin/password",component:U,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.password"),subMenulevel:1},{pathname:"/admin/system",component:W,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.system"),subMenulevel:2},{pathname:"/admin/device",component:B,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.device"),subMenulevel:1},{pathname:"/admin/network",component:G,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.network"),subMenulevel:1},{pathname:"/admin/voip",component:K,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.voip"),subMenulevel:1},{pathname:"/admin/call",component:H,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.call"),subMenulevel:1},{pathname:"/admin/phonebook",component:Z,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.phonebook"),subMenulevel:1},{pathname:"/admin/CallLogs",component:q,menuItem:ee.INTERCOM,title:Object(O.b)("frameout.menuItem.callLogs"),subMenulevel:1},{pathname:"/admin/zone",component:J,menuItem:ee.SECURITY,title:Object(O.b)("frameout.menuItem.zone"),subMenulevel:1},{pathname:"/admin/scene",component:Y,menuItem:ee.SECURITY,title:Object(O.b)("frameout.menuItem.scene"),subMenulevel:1},{pathname:"/admin/relay",component:V,menuItem:ee.ADVANCED,title:Object(O.b)("frameout.menuItem.relay"),subMenulevel:1},{pathname:"/admin/ipc",component:T,menuItem:ee.ADVANCED,title:Object(O.b)("frameout.menuItem.ipc"),subMenulevel:1},{pathname:"/admin/more",component:Q,menuItem:ee.ADVANCED,title:Object(O.b)("frameout.menuItem.more"),subMenulevel:1}],oe=[{pathname:"/special/dashboard",component:R,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.dashboard"),subMenulevel:1},{pathname:"/special/advanced",component:D,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.advanced"),subMenulevel:1},{pathname:"/special/accounts",component:M,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.accounts"),subMenulevel:1}],ae=[{pathname:"/user/dashboard",component:R,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.dashboard"),subMenulevel:1},{pathname:"/user/qrcode",component:A,menuItem:ee.GENERAL,title:Object(O.b)("frameout.menuItem.qrcode"),subMenulevel:1}],ne=[{pathname:"/login",component:$},{pathname:"/404",component:X}],re=o(674),ie=o(675),se=o(670),me=o(320),ce=o(677),le=o(678),de=o(679),ue=o(680),pe=o(671),be=o(144),ye=o(676),he=o(669),we=o(74),ge=o(35),ke={zh_CN:"\u7b80\u4f53\u4e2d\u6587",en_US:"English",pl_PL:"Polski"},fe=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(s.a)(this,o),(e=t.call(this)).handleMenuClick=function(e){"logout"===e.key?Object(we.b)("SessionID"):Object(O.d)(e.key),window.location.reload()},e.state={language:Object(O.a)(),username:Object(ge.a)("username")},e}return Object(m.a)(o,[{key:"render",value:function(){var e=this.state,t=e.language,o=e.username,a=Object(C.jsx)(se.a,{onClick:this.handleMenuClick,style:{margin:"18px -12px"},items:[{key:"logout",label:p.a.get("topMenu.logout")}]}),n=Object(C.jsx)(se.a,{selectedKeys:t,onClick:this.handleMenuClick,style:{margin:"12px"},items:[{key:"zh_CN",label:ke.zh_CN},{key:"pl_PL",label:ke.pl_PL},{key:"en_US",label:ke.en_US}]});return Object(C.jsxs)("div",{style:{float:"right"},children:[Object(C.jsx)(pe.a,{overlay:n,children:Object(C.jsxs)(be.a,{type:"link",style:{color:"#fff"},icon:Object(C.jsx)(ye.a,{}),children:[ke[t]," ",Object(C.jsx)(he.a,{})]})}),Object(C.jsx)(pe.a,{overlay:a,children:Object(C.jsxs)("a",{style:{color:"#fff"},onClick:function(e){return e.preventDefault()},children:[p.a.get("topMenu.hello")+" "+o," ",Object(C.jsx)(he.a,{})]})})]})}}]),o}(n.Component),ze=o(227),_e=o(322),ve=(o(453),re.a.Header),Ie=re.a.Content,je=re.a.Sider;function Pe(e,t,o,a,n){return{key:t,icon:o,children:a,label:e,type:n}}var Oe=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(e){var a;Object(s.a)(this,o),(a=t.call(this,e)).getData=function(){var e="",t=!1,o=!1;Object(ze.a)({api:"advanced2",props:a.props}).then((function(n){e=n.data.model?n.data.model:"E211",Object(ge.c)("devModel",_e[e]),Object(ge.c)("wifi",void 0!==n.data.wifi&&!!parseInt(n.data.wifi)),void 0!==n.data.logo&&(t=!!parseInt(n.data.logo)),void 0!==n.data.tuya&&(o=!!parseInt(n.data.tuya)),a.setState({logo:t,tuya:o}),a.setMenus()})).catch((function(e){console.log(e)}))},a.setMenus=function(){for(var e="admin",t=[],o=[],n=[],r=[],i=[],s=[],m=[],c=0;c<oe.length;c++)("/special/accounts"!==oe[c].pathname||a.state.tuya)&&s.push(oe[c]);for(var l=0;l<ae.length;l++)("/user/qrcode"!==ae[l].pathname||a.state.tuya)&&m.push(ae[l]);Object(ge.a)("username")&&(e=Object(ge.a)("username")),"admin"===e?(t=te.filter((function(e){return e.menuItem===ee.GENERAL})),o=te.filter((function(e){return e.menuItem===ee.INTERCOM})),n=te.filter((function(e){return e.menuItem===ee.SECURITY})),r=te.filter((function(e){return e.menuItem===ee.ADVANCED})),i=[Pe(p.a.get("frameout.menu.intercom"),ee.INTERCOM,Object(C.jsx)(ce.a,{}),o.map((function(e){return Pe(e.title,e.pathname)}))),Pe(p.a.get("frameout.menu.security"),ee.ACCESS,Object(C.jsx)(le.a,{}),n.map((function(e){return Pe(e.title,e.pathname)}))),Pe(p.a.get("frameout.menuItem.advanced"),ee.ADVANCED,Object(C.jsx)(de.a,{}),r.map((function(e){return Pe(e.title,e.pathname)})))]):"special"===e?t=s.filter((function(e){return e.menuItem===ee.GENERAL})):"user"===e&&(t=m.filter((function(e){return e.menuItem===ee.GENERAL}))),i.unshift(Pe(p.a.get("frameout.menu.general"),ee.GENERAL,Object(C.jsx)(ue.a,{}),t.map((function(e){return Pe(e.title,e.pathname)})))),a.setState({items:i,username:e})},a.leftMenuClick=function(e){var t=e.key;a.props.history.push(t)};var n=ee.GENERAL,r=te.filter((function(e){return e.pathname===a.props.location.pathname}));return r.length&&(n=r[0].menuItem),a.state={items:[],username:"admin",cur_submenu:n,logo:!1,tuya:!1},a}return Object(m.a)(o,[{key:"componentDidMount",value:function(){Object(we.a)("SessionID")&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.items,o=e.cur_submenu,a=e.logo;return Object(C.jsxs)(re.a,{children:[Object(C.jsxs)(ve,{style:{position:"fixed",zIndex:1,width:"100%"},children:[a?Object(C.jsx)("img",{style:{margin:"0 0 6px -24px"},src:"/images/logo.png?t=".concat(Math.random()),alt:"logo"}):null,Object(C.jsx)(fe,{})]}),Object(C.jsxs)(re.a,{hasSider:!0,children:[Object(C.jsx)(re.a,{className:"pageView",children:Object(C.jsxs)(Ie,{children:[Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)("div",{children:this.props.children}),Object(C.jsx)(ie.a,{})]})}),Object(C.jsx)(je,{theme:"light",style:{width:"130px",height:"100vh",position:"fixed",marginTop:64},children:Object(C.jsx)(me.Scrollbars,{style:{height:"calc(100vh - 56px)"},children:Object(C.jsx)(se.a,{mode:"inline",onClick:this.leftMenuClick,style:{height:1024,borderRight:0,paddingRight:8},defaultOpenKeys:[""+o],selectedKeys:this.props.location.pathname,items:t})})})]})]})}}]),o}(n.Component),Le=Object(d.g)(Oe),Se={admin:te,special:oe,user:ae},xe=function(e){Object(c.a)(o,e);var t=Object(l.a)(o);function o(){var e;Object(s.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={username:"admin",locale:w.a,loginState:!0,initDone:!1},e.setLanguage=function(){var t=Object(O.a)();p.a.init({currentLocale:t,locales:O.c}).then((function(){e.setState({initDone:!0})})),e.setAntdLocale(t)},e.setAntdLocale=function(t){var o=w.a;switch(t){case"en_US":o=w.a;break;case"pl_PL":o=k.a;break;case"zh_CN":o=z.a}e.setState({locale:o})},e.checkLogin=function(){if(Object(we.a)("SessionID")){var t=Object(ge.a)("username");t&&e.setState({username:t}),e.setState({loginState:!1})}},e}return Object(m.a)(o,[{key:"componentDidMount",value:function(){b.a.config({placement:"top"}),v.a.locale("zh-cn"),this.setLanguage(),this.checkLogin()}},{key:"render",value:function(){var e=this.state,t=e.loginState,o=e.initDone,a=e.locale,n=e.username;return o?Object(C.jsx)(y.a,{locale:a,children:Object(C.jsx)(P,{children:Object(C.jsx)(Le,{children:Object(C.jsxs)(d.d,{children:[t?Object(C.jsx)(d.a,{to:"/login"}):Se[n].map((function(e){return Object(C.jsx)(d.b,{path:e.pathname,component:e.component},e.pathname)})),Object(C.jsx)(d.a,{from:"/".concat(n),to:Se[n][0].pathname,exact:!0}),Object(C.jsx)(d.a,{to:"/404"})]})})})}):null}}]),o}(n.Component),Ce=xe,Ne=(o(464),o(131)),Re="admin";Object(ge.a)("username")&&(Re=Object(ge.a)("username")),console.log("username",Re),i.a.render(Object(C.jsx)(Ne.a,{children:Object(C.jsxs)(d.d,{children:[Object(C.jsx)(d.b,{path:"/"+Re,render:function(e){return Object(C.jsx)(Ce,Object(a.a)({},e))}}),ne.map((function(e,t){return Object(C.jsx)(d.b,{path:e.pathname,component:e.component},e.pathname)})),Object(C.jsx)(d.a,{from:"/",to:"/"+Re,exact:!0}),Object(C.jsx)(d.a,{to:"/404"})]})}),document.getElementById("root"))},74:function(e,t,o){"use strict";o.d(t,"c",(function(){return r})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return s}));var a=o(186),n=o.n(a),r=function(e,t,o){var a=o||7,r=new Date((new Date).getTime()+24*a*3600*1e3);n.a.save(e,t,{path:"/",expires:r})},i=function(e){return n.a.load(e)},s=function(e){n.a.remove(e,{path:"/"})}}},[[667,4,1,5]]]);
(function () {
  // --- Translations for the custom ringtone UI ---
  var CR_LOCALE = {
    pl_PL: {
      title: 'Niestandardowy dzwonek (zastępuje nr 3)',
      browse: 'Przeglądaj...',
      nofile: 'Brak wybranego pliku',
      hint: 'Tylko plik WAV lub MP3, maksymalnie 12MB. Rekomendowane: WAV PCM, 16-bit, ≤44.1kHz, mono.',
      ok: 'Niestandardowy dzwonek został zapisany.',
      err_format: 'Nieprawidłowy format: tylko WAV lub MP3',
      err_size: 'Plik jest za duży (maks. 12MB)',
      err_hdr: 'Nieprawidłowy nagłówek pliku audio (WAV/MP3)',
      err_read: 'Błąd odczytu pliku',
      err_verify: 'Błąd podczas weryfikacji pliku',
      err_upload: 'Błąd podczas wysyłania pliku',
      revert_label: 'Przywróć domyślny dzwonek',
      ok_revert: 'Przywrócono domyślny dzwonek.'
    },
    en_US: {
      title: 'Custom ringtone (replaces #3)',
      browse: 'Browse...',
      nofile: 'No file selected',
      hint: 'WAV or MP3, up to 12MB. Recommended: WAV PCM, 16-bit, ≤44.1kHz, mono.',
      ok: 'Custom ringtone saved.',
      err_format: 'Wrong format: WAV or MP3 only',
      err_size: 'File too large (max 12MB)',
      err_hdr: 'Invalid audio header (WAV/MP3)',
      err_read: 'File read error',
      err_verify: 'File validation error',
      err_upload: 'Upload failed',
      revert_label: 'Restore default ringtone',
      ok_revert: 'Default ringtone restored.'
    }
  };

  function isVisible(el) {
    if (!el) return false;
    var style = window.getComputedStyle ? getComputedStyle(el) : null;
    if (style) {
      if (style.display === 'none' || style.visibility === 'hidden') return false;
      if (parseFloat(style.opacity || '1') === 0) return false;
    }
    if (el.offsetWidth <= 0 && el.offsetHeight <= 0) {
      var rects = el.getClientRects();
      if (!rects || !rects.length) return false;
    }
    return true;
  }

  function detectLangFromTopbar() {
    var nodes = document.querySelectorAll('span,div,a,button');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!isVisible(el)) continue;
      var txt = (el.textContent || '').trim();
      if (!txt) continue;
      if (txt === 'Polski' || txt === 'Polish') return 'pl_PL';
      if (txt === 'English') return 'en_US';
    }
    return null;
  }

  function detectLangCode() {
    var top = detectLangFromTopbar();
    if (top) {
      console.log('[custom-ring] lang from topbar:', top);
      return top;
    }

    try {
      if (window.localStorage) {
        var raw = localStorage.getItem('language') || '';
        var s = raw.trim();
        var val = '';

        if (s && s.charAt(0) === '{') {
          try {
            var obj = JSON.parse(s);
            if (obj && obj.data) {
              val = String(obj.data).toLowerCase();
            }
          } catch (ejson) {}
        } else {
          val = s.toLowerCase();
        }

        if (val) {
          if (val.indexOf('pl') === 0) {
            console.log('[custom-ring] lang from storage:', raw, '=> pl_PL');
            return 'pl_PL';
          }
          if (val.indexOf('en') === 0) {
            console.log('[custom-ring] lang from storage:', raw, '=> en_US');
            return 'en_US';
          }
        }
      }
    } catch (e) {}

    try {
      var t = (navigator.language || navigator.browserLanguage || '').toLowerCase();
      if (t.indexOf('pl') !== -1) {
        console.log('[custom-ring] lang from navigator:', t, '=> pl_PL');
        return 'pl_PL';
      }
      if (t.indexOf('en') !== -1) {
        console.log('[custom-ring] lang from navigator:', t, '=> en_US');
        return 'en_US';
      }
    } catch (e2) {}

    console.log('[custom-ring] lang default: en_US');
    return 'en_US';
  }

  function getTexts() {
    var code = detectLangCode();
    var L = CR_LOCALE[code] || CR_LOCALE.en_US;
    console.log('[custom-ring] using locale:', code);
    return L;
  }

  function showMsg(msg) {
    if (window.layer && typeof window.layer.msg === 'function') {
      window.layer.msg(msg);
    } else {
      alert(msg);
    }
  }

  function findWallpaperAnchor() {
    var labels = document.querySelectorAll('div,span,h1,h2,h3,h4,label');
    for (var i = 0; i < labels.length; i++) {
      var el = labels[i];
      if (!isVisible(el)) continue;
      var txt = (el.textContent || '').trim();
      if (!txt) continue;
      if (txt === 'Tapeta' || txt === 'Wallpaper') {
        return el;
      }
    }
    return null;
  }

  function buildCard(L, anchor) {
    if (!anchor) return;
    if (document.getElementById('custom-ring-card')) return;

    var root = anchor.closest ? anchor.closest('div') : (anchor.parentNode || document.body);

    var card = document.createElement('div');
    card.id = 'custom-ring-card';
    card.style.marginTop = '24px';
    card.style.background = '#ffffff';
    card.style.borderRadius = '6px';
    card.style.boxShadow = '0 1px 3px rgba(15,35,52,0.08)';
    card.style.padding = '16px 24px 18px 24px';
    card.style.boxSizing = 'border-box';

    var header = document.createElement('div');
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.marginBottom = '12px';

    var stripe = document.createElement('div');
    stripe.style.width = '4px';
    stripe.style.height = '18px';
    stripe.style.borderRadius = '2px';
    stripe.style.marginRight = '8px';
    stripe.style.background = '#7C3AED';
    header.appendChild(stripe);

    var title = document.createElement('div');
    title.textContent = L.title;
    title.style.fontWeight = '600';
    title.style.fontSize = '15px';
    title.style.color = '#1f2933';
    header.appendChild(title);

    card.appendChild(header);

    var uploadRow = document.createElement('div');
    uploadRow.style.display = 'flex';
    uploadRow.style.alignItems = 'center';
    uploadRow.style.flexWrap = 'wrap';
    uploadRow.style.gap = '10px';
    uploadRow.style.marginBottom = '6px';

    var labelBtn = document.createElement('label');
    labelBtn.textContent = L.browse;
    labelBtn.style.display = 'inline-block';
    labelBtn.style.padding = '6px 14px';
    labelBtn.style.background = '#f3f4ff';
    labelBtn.style.border = '1px solid #7C3AED';
    labelBtn.style.borderRadius = '4px';
    labelBtn.style.color = '#111827';
    labelBtn.style.fontSize = '13px';
    labelBtn.style.cursor = 'pointer';
    labelBtn.style.userSelect = 'none';

    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.wav,.mp3,audio/wav,audio/mpeg';
    input.style.display = 'none';
    labelBtn.appendChild(input);

    var fileName = document.createElement('span');
    fileName.textContent = L.nofile;
    fileName.style.fontSize = '13px';
    fileName.style.color = '#6b7280';

    uploadRow.appendChild(labelBtn);
    uploadRow.appendChild(fileName);
    card.appendChild(uploadRow);

    var hint = document.createElement('div');
    hint.textContent = L.hint;
    hint.style.fontSize = '12px';
    hint.style.color = '#9ca3af';
    card.appendChild(hint);

    var revertRow = document.createElement('div');
    revertRow.style.marginTop = '8px';

    var revertBtn = document.createElement('button');
    revertBtn.textContent = L.revert_label || 'Restore default ringtone';
    revertBtn.style.padding = '4px 10px';
    revertBtn.style.fontSize = '12px';
    revertBtn.style.borderRadius = '4px';
    revertBtn.style.border = '1px solid #d1d5db';
    revertBtn.style.background = '#f9fafb';
    revertBtn.style.cursor = 'pointer';

    revertBtn.onclick = function () {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '/cgi-bin/customring_revert.cgi', true);
      xhr.onload = function () {
        if (xhr.status === 200) {
          showMsg(L.ok_revert || L.ok || 'Default ringtone restored.');
        } else {
          showMsg(L.err_upload);
        }
      };
      xhr.onerror = function () {
        showMsg(L.err_upload);
      };
      xhr.send();
    };

    revertRow.appendChild(revertBtn);
    card.appendChild(revertRow);

    if (root.parentNode) {
      root.parentNode.appendChild(card);
    } else {
      document.body.appendChild(card);
    }

    labelBtn.onclick = function () {
      input.click();
    };

    input.onchange = function (ev) {
      var file = ev.target.files && ev.target.files[0];
      if (!file) {
        fileName.textContent = L.nofile;
        return;
      }

      fileName.textContent = file.name;

      var name = file.name || '';
      var isWavExt = /\.wav$/i.test(name);
      var isMp3Ext = /\.mp3$/i.test(name);

      if (!isWavExt && !isMp3Ext) {
        showMsg(L.err_format);
        ev.target.value = '';
        fileName.textContent = L.nofile;
        return;
      }

      var maxBytes = 12 * 1024 * 1024;
      if (file.size > maxBytes) {
        showMsg(L.err_size);
        ev.target.value = '';
        fileName.textContent = L.nofile;
        return;
      }

      var reader = new FileReader();
      reader.onload = function () {
        try {
          var buf = new Uint8Array(reader.result || []);
          var isWavHeader =
            buf.length >= 12 &&
            buf[0] === 0x52 && // R
            buf[1] === 0x49 && // I
            buf[2] === 0x46 && // F
            buf[3] === 0x46 && // F
            buf[8] === 0x57 && // W
            buf[9] === 0x41 && // A
            buf[10] === 0x56 && // V
            buf[11] === 0x45;  // E

          var isMp3Header = false;
          if (buf.length >= 4) {
            if (
              buf[0] === 0x49 && // I
              buf[1] === 0x44 && // D
              buf[2] === 0x33    // 3
            ) {
              isMp3Header = true;
            } else if (
              buf[0] === 0xff &&
              (buf[1] & 0xe0) === 0xe0
            ) {
              isMp3Header = true;
            }
          }

          var ok = false;
          if (isWavExt) {
            ok = isWavHeader;
          } else if (isMp3Ext) {
            ok = isMp3Header;
          }

          if (!ok) {
            showMsg(L.err_hdr);
            input.value = '';
            fileName.textContent = L.nofile;
            return;
          }
        } catch (e) {
          showMsg(L.err_verify);
          input.value = '';
          fileName.textContent = L.nofile;
          return;
        }

        var form = new FormData();
        form.append('file', file);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/cgi-bin/customring_upload.cgi', true);
        try {
          xhr.setRequestHeader('X-Filename', encodeURIComponent(name));
        } catch (e) {}

        xhr.onload = function () {
          if (xhr.status === 200) {
            try {
              var resp = JSON.parse(xhr.responseText || '{}');
              if (resp && resp.code === 0) {
                showMsg(L.ok);
              } else {
                showMsg(L.err_upload);
              }
            } catch (ejson) {
              showMsg(L.ok); // backend still returned 200
            }
          } else {
            showMsg(L.err_upload);
          }
        };
        xhr.onerror = function () {
          showMsg(L.err_upload);
        };
        xhr.send(form);
      };

      reader.onerror = function () {
        showMsg(L.err_read);
        input.value = '';
        fileName.textContent = L.nofile;
      };

      reader.readAsArrayBuffer(file.slice(0, 64));
    };
  }

  function tryInjectOnce() {
    if (document.getElementById('custom-ring-card')) return;
    var anchor = findWallpaperAnchor();
    if (!anchor) return;
    var L = getTexts();
    buildCard(L, anchor);
  }

  window.addEventListener('load', function () {
    tryInjectOnce();
  });

  window.addEventListener('hashchange', function () {
    tryInjectOnce();
  });

  if (window.MutationObserver) {
    var mo = new MutationObserver(function () {
      if (!document.getElementById('custom-ring-card')) {
        tryInjectOnce();
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }
})();

