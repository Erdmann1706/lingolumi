LINGOLUMI – GEPRÜFTE VERSION 2.0
Kostenloser Englisch-Lernbegleiter für das iPhone 12 mini

WAS DIE APP KANN
- 60 englische Wörter in sechs Themen (Tiere, Essen, Schule, Gefühle, Alltag, Abenteuer)
- Fünf Aufgaben pro Runde; Richtung Deutsch/Englisch und Hörübungen
- Später Schreibaufgaben; Wiederholungen richten sich nach beantworteten Aufgaben
- Englisch vorlesen mit der im Gerät vorhandenen Safari/iOS-Sprachausgabe
- Anzeigen des Lernstands und Sicherung / Wiederherstellung als JSON-Datei
- Keine Werbung, keine Anmeldung, keine kostenpflichtige Schnittstelle, kein Tracking
- Keine generative KI. Apple Intelligence läuft nicht auf dem iPhone 12 mini.

SO VERÖFFENTLICHST DU DIE APP KOSTENLOS ÜBER GITHUB PAGES
1. Ein kostenloses GitHub-Konto anlegen: https://github.com/signup
2. Ein ÖFFENTLICHES Repository mit dem Namen "lingolumi" erstellen.
3. Diese ZIP-Datei lokal entpacken. WICHTIG: Die SIEBEN Dateien aus dem ZIP direkt
   in das Hauptverzeichnis des Repositories hochladen ("Add file" > "Upload files").
   Nicht den Ordner oder das ZIP selbst hochladen! index.html muss im Hauptverzeichnis liegen.
4. Im Repository: Settings > Pages > Build and deployment > Deploy from a branch.
   Branch: main. Folder: /(root). Mit "Save" bestätigen.
5. GitHub zeigt danach die HTTPS-Adresse an, normalerweise:
   https://BENUTZERNAME.github.io/lingolumi/
6. Diese Adresse am iPhone in Safari öffnen. Teilen > Zum Home-Bildschirm
   > (ggf. "Als Web-App öffnen") > Hinzufügen.
7. Über das neue Home-Bildschirm-Icon öffnen, mit Internetverbindung starten
   und eine Runde testen. Die wichtigsten App-Dateien werden dabei für Offline
   vorgehalten; die englische Stimme hängt von den iOS-Einstellungen ab.

DATENSCHUTZ UND DATENSICHERUNG
Die App ist eine statische Website. Die Programmdateien und die Webadresse
sind auf GitHub Pages öffentlich erreichbar. Keine Klientendaten oder
personenbezogenen Inhalte in den Programmcode eintragen.
Der Lernstand wird ausschließlich lokal im Speicher dieser App gespeichert.
Safari und die zum Home-Bildschirm hinzugefügte Web-App können getrennte
Speicherbereiche haben. Beim Gerätetausch, Löschen der App oder Löschen der
Website-Daten kann der Lernstand verloren gehen. Im Menü "Mehr" regelmäßig
"Lernstand sichern" nutzen. Die JSON-Sicherung kann über "Sicherung
wiederherstellen" wieder eingelesen werden. Keine Cloud-Synchronisation.

TECHNISCHE GRENZEN
Die App ist eine PWA (Web-App), keine native iOS-App. Eine echte konversationelle
KI / Apples Foundation Models und eine verlässliche automatische
Aussprachebewertung stehen auf dem iPhone 12 mini in dieser App nicht zur
Verfügung. Es wird stattdessen die lokale adaptive Lernlogik verwendet.
Ohne nutzbare Sprachausgabe lassen sich Hörfragen in eine Leseaufgabe umwandeln.
Der erste Start der App und spätere Updates benötigen eine Internetverbindung.

DATEIEN
index.html – Einstieg; style.css – Layout; app.js – Übungen und Lernlogik
sw.js – Offline-Caching; manifest.webmanifest – Installationsangaben
icon-192.png / icon-512.png – App-Symbole

FACHLICHER HINWEIS
Dies ist ein kindgerechter Grundwortschatztrainer, kein vollständiger
Englischunterricht. Die adaptiven Regeln sind nachvollziehbar, aber nicht
pädagogisch wissenschaftlich evaluiert. Teste Lernstand, Stimmen und Bedienung
auf dem tatsächlichen iPhone vor der dauerhaften Nutzung.
