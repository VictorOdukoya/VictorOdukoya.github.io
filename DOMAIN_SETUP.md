# Website für victorodukoya.com vorbereiten

Stand: 25.10.2026. Website auf Cloudflare veröffentlicht; Telefonnummer auf Wunsch entfernt.
Live: https://victorodukoya.com/ . Cloudflare-Delegation, Hauptdomain mit HTTPS und Weiterleitungen sowie Mailtest nach der Umstellung bestätigt.
`www` leitet erfolgreich auf die Hauptdomain um; sein zusätzlicher Pages-Domaineintrag zeigt noch „Verifying“.

## Lokal

Node 24 verwenden (`nvm use`), dann:

```sh
npm ci
npm run lint
npm test
npm run build
npm run check:site
npm run preview -- --host 127.0.0.1 --port 4322
```

Buildausgabe: `dist/`. Entfernte Prototypen und Platzhalter werden nicht veröffentlicht.
Die ursprüngliche Arbeitskopie bleibt unverändert.

## Bereits vorbereitet

- Unternehmensdomain in Astro, Canonical-/Open-Graph-Metadaten, robots.txt und Sitemap.
- Einheitliche `.com`-Adressen für Kontakt, Support und Datenschutz; kein zusätzlicher `legal`-Alias nötig.
- Impressumsentwurf mit § 5 DDG; alte TMG-/RStV-/ODR-Blöcke entfernt. Keine neue Namensdarstellung mit weiteren Vornamen.
- Website-Datenschutzhinweise für das vorgesehene Cloudflare-/STRATO-Hosting; App-Datenschutz separat.
- Schriftarten lokal aus Fontsource-Paketen; keine Verbindung zu Google Fonts notwendig.
- Keine erfundenen Storepreise, Free-KI-Quoten oder unbegrenzte Pro-KI-Nutzung mehr. Der gelesene Pairloom-Servercode
  begrenzt Pro auf 300 KI-Vorgänge pro Monat; vor Veröffentlichung mit dem tatsächlich deployten Stand vergleichen.
- Astro aktualisiert; Tailwind-3-Integration über PostCSS erhält das bestehende Design. Node 24 in CI.
- Lint/Typprüfung, Unit-Tests für die neue URL-Logik mit 85-%-Mindestgrenzen und Prüfung des statischen Builds.
  Die Coverage betrifft `src/lib/site.mjs`, nicht sämtliche Astro-Komponenten oder Pairloom.

## Cloudflare Pages – veröffentlicht

- Anmeldung am vorhandenen Cloudflare-Konto bestätigt. Die bestehende GitHub-Integration bietet das Website-Repository
  bereits an; keine neue Integration und keine zusätzlichen GitHub-Rechte erteilt.
- Projekt erstellt und erfolgreich deployt: `victorodukoya-website`, Ausgabe `dist`, `NODE_VERSION=24`,
  Buildbefehl `npm run lint && npm test && npm run build && npm run check:site`. Expliziter Build funktioniert mit
  Framework-Preset „None“. Cloudflare bestätigt erfolgreiches Deployment des Commits `fa15125`.
- Produktionsbranch: `codex/website-production`. Die lokalen Vorbereitungscommits wurden vor dem Push
  zusammengefasst, damit auch über deren Historie keine entfernte Telefonnummer veröffentlicht wird.
  Nur dieser bereinigte Branch wurde hochgeladen; die Vorbereitungsbranch-Historie bleibt lokal.
- Live im Chrome-Browser geprüft: Impressum ohne Telefonnummer, Apps ohne Clup/Platzhalter, Support,
  Kontolösch-Anfrage und App-Informationsseite. Bei diesen Besuchen keine Browser-Konsolenfehler/-warnungen.
  Ein zusätzlicher Python-HTTP-Test erhielt 403 und wird nicht als erfolgreicher Live-Test gezählt.
- Gewünschten Produktionsbranch bewusst auswählen. Die ursprüngliche lokale Arbeitskopie steht auf `master`,
  während der vorhandene GitHub-Pages-Workflow `main` beobachtet; nicht ungeprüft einen davon als Livebranch annehmen.
- Pages-Adresse geprüft; anschließend eigene Domain verbinden.
- Hauptdomain `victorodukoya.com` und `www.victorodukoya.com` gemeinsam einrichten; eine kanonische Adresse mit
  Weiterleitung der anderen festlegen. HTTPS anschließend von außen prüfen.
- Für die Hauptdomain verlangt Cloudflare Pages Cloudflare-Nameserver. Vor dem Wechsel die gesamte DNS-Zone sichern,
  importierte Einträge mit STRATO vergleichen und insbesondere den Mailbetrieb erhalten. Bestand privat gesichert.
- Nach ausdrücklicher Freigabe bei STRATO die Nameserver `leonidas.ns.cloudflare.com` und
  `sarah.ns.cloudflare.com` gespeichert. STRATO bestätigt Übermittlung an die Registry. Cloudflare zeigt
  „Waiting for your registrar to propagate your new nameservers“. Aktivierung noch nicht bestätigt.
- `www.victorodukoya.com` im Pages-Projekt hinterlegt, DNS-Setup noch ausstehend. Zugehöriger CNAME in Cloudflare
  auf `victorodukoya-website.pages.dev` geändert (proxied).
- Cloudflare Single Redirect „WWW to victorodukoya.com“ gespeichert und enabled: Hostfilter exakt
  `www.victorodukoya.com`, dynamisches Ziel `concat("https://victorodukoya.com", http.request.uri.path)`,
  Status 301, Querystring erhalten. Tatsächliche Weiterleitung erst nach Aktivierung/HTTPS prüfbar.

Mail-DNS nach erfolgter SPF-Einrichtung am 25.10.2026:

| Name | Typ | Wert |
| --- | --- | --- |
| `@` | MX | Priorität 5, `smtpin.rzone.de` |
| `@` | TXT | `v=spf1 redirect=_spf.strato.com` |
| `_dmarc` | TXT | `v=DMARC1;p=reject;` |
| `_autodiscover._tcp` | SRV | Priorität 0, Gewicht 100, Port 443, `autoconfigure.strato.de` |
| `autoconfig` | CNAME | `autoconfigure.strato.de` – DNS only |
| `strato-dkim-0002._domainkey` | CNAME | `strato-dkim-0002._domainkey.rzone.de` – DNS only |
| `strato-dkim-0003._domainkey` | CNAME | `strato-dkim-0003._domainkey.rzone.de` – DNS only |

Diese Liste ist **kein vollständiger Zonenexport**. Die Testmail wurde mit der eigenen Domain erfolgreich DKIM-signiert.
Der Cloudflare-Import ließ beide DKIM-Selektoren aus; sie wurden gemäß aktueller STRATO-Anleitung als CNAMEs ergänzt.
MX, SPF, DMARC, Autodiscover-SRV und Autoconfig vor dem Wechsel direkt gegen beide zugewiesenen Cloudflare-Nameserver
geprüft; Werte stimmen mit STRATO überein. Beide DKIM-CNAMEs dort bestätigt. Mailnamen nicht als HTTP-Proxy konfigurieren.
Der STRATO-Hinweis zu Mail bei eigenen Nameservern wurde mit der offiziellen Anleitung für STRATO-Mail hinter externen
Nameservern abgeglichen. Versand/Empfang nach tatsächlicher Delegation trotzdem erneut testen.

## Domainabschluss am 25. Oktober 2026

Die vorherigen Abschnitte beschreiben den Einrichtungsverlauf. Folgende aktuelle Nachweise ersetzen deren offenen
Aktivierungsstände:

- Öffentliche NS-Abfrage und Cloudflare-Zonenübersicht bestätigen die aktive Cloudflare-Delegation.
- Anfangs lieferte die Hauptdomain HTTPS-Fehler 525. Im Pages-Dialog bestätigt: alte STRATO-Webziele
  A `217.160.0.125` und AAAA `2001:8d8:100f:f000::200`. Beim Zuordnen der Hauptdomain wurden beide durch den
  CNAME auf `victorodukoya-website.pages.dev` ersetzt. Mail-Records blieben erhalten.
- Pages bestätigt die Hauptdomain als **Active / SSL enabled**. Das kostenlose Universal-SSL-Zertifikat deckt
  Hauptdomain und erste Subdomain-Ebene ab. Kein STRATO-SSL oder kostenpflichtiges Zertifikat gekauft.
- **Always Use HTTPS** aktiviert. HTTP wird auf HTTPS umgeleitet. Die bestehende WWW-Regel leitet mit 301 auf die
  Hauptdomain, Pfad und Querystring bleiben erhalten. `/.well-known/` ist nach Cloudflares DCV-Anleitung vom
  WWW-Redirect ausgenommen. Die zusätzliche Slash-Normalisierung liefert ggf. 308.
- Mit curl inklusive normaler Zertifikatsprüfung bestätigt: Hauptdomain, Impressum, Apps, Datenschutz und
  Kontolösch-Anfrage liefern am endgültigen HTTPS-Ziel HTTP 200. Browser bestätigt Startseite und Impressum unter
  eigener Domain; Telefonnummer und Clup-Link fehlen wie freigegeben. Python-HTTP-Anfragen erhielten 403 und
  werden nicht als erfolgreiche Prüfungen gewertet.
- MX, SPF, DMARC und beide STRATO-DKIM-CNAMEs öffentlich erneut abgeglichen. Anschließend eigener realer Test
  Outlook → Support → Outlook: Empfang in Apple Mail und Rückantwort im normalen privaten Eingang bestätigt.
  Microsoft-Header dieser neuen Antwort: **SPF pass, DKIM pass, DMARC pass, compauth pass; SCL 1**.
  Dies ist der neue Nachweis nach tatsächlicher Delegation; eine generelle Inbox-Zusage folgt daraus nicht.
- Der zusätzliche `www`-Domaineintrag in Pages zeigt zuletzt noch **Verifying**; DNS-Nachprüfung ausgelöst.
  Die für Besucher verwendete HTTPS-Weiterleitung funktioniert bereits, unabhängig von diesem zusätzlichen
  Pages-Status. Der zunächst umgeleitete ACME-Prüfpfad wird nach ergänzter Ausnahme nicht mehr umgeleitet
  (zufälliger Testpfad: 404 statt 301); normale WWW-Umleitung bleibt 301. Verifizierung danach erneut ausgelöst;
  Abschlussstatus später kontrollieren. Keine erneute Nameserver-Umstellung nötig.

## Mail – am 25.10.2026 geprüft

- `victor`, `contact`, `support` und `privacy` sind gespeicherte Aliasse desselben STRATO-Postfachs und in Apple Mail
  als Absender eingerichtet. Hauptabsender: `victor@victorodukoya.com`.
- Empfang einer externen Testmail an `contact` in Apple Mail bestätigt. Versand von `victor` an die eigene externe
  Outlookadresse ebenfalls bestätigt; die Nachricht wurde zusätzlich im Empfängerpostfach geöffnet.
- SMTP-Anmeldefehler behoben: `smtp.strato.de`, Port **465**, TLS/SSL **an**, Authentifizierung **Passwort**,
  Benutzername `webmaster@victorodukoya.com`. Zuvor war „Ohne“ als Authentifizierung aktiv. Das vom Nutzer bereits
  eingegebene Passwort wurde nicht gelesen oder verändert. IMAP bleibt `imap.strato.de`.
- Empfangene Microsoft-Header bestätigen **SPF=pass, DKIM=pass, DMARC=pass und compauth=pass**, jeweils zur eigenen
  Absenderdomain ausgerichtet. Eine zusätzliche nicht unterstützte DKIM-Signatur wurde ignoriert; die geprüfte
  Signatur besteht.
- Die Testmail landete dennoch in Outlook **Spam**, SCL **5**. Das ist keine Zusage zuverlässiger Inbox-Zustellung.
  Der genaue Klassifizierungsgrund ist nicht belegt; Domain-Reputation ist nur eine mögliche Ursache. DMARC nicht
  abschwächen. Bei wiederholten Problemen weitere reale Antworten/Tests und STRATO-/Empfänger-Support einbeziehen.
- Nicht alle Alias-Absender einzeln extern getestet. Während der Einrichtung entstand außerdem ein zusätzlicher
  ungesendeter Testentwurf; keine automatische Bereinigung anderer Entwürfe vornehmen.
- Zusatztest nach STRATO-Speicherbestätigung des NS-Wechsels: Nachricht von der eigenen externen Outlookadresse
  an `support@victorodukoya.com` gesendet und deren Eingang in Apple Mail bestätigt. Dies prüft noch nicht den Betrieb
  nach tatsächlicher Registry-Delegation, da zu diesem Zeitpunkt öffentlich weiter STRATO-Nameserver aktiv waren.

## Pairloom-Kontolöschung

`.env.example` enthält ausschließlich die Namen zweier öffentlicher Browserwerte. Für das Hosting als Buildvariablen
eintragen: `PUBLIC_SUPABASE_URL` und `PUBLIC_SUPABASE_PUBLISHABLE_KEY`. Kein Service-Role-/Secret-Key im Browser.
Für den neuen Ursprung zusätzlich den exakten OAuth-Rücksprung `https://victorodukoya.com/delete-account` in Supabase
freigeben. Der OAuth-Callback bei Google bleibt der von Supabase angegebene Callback; keine Google-Secrets in Astro.
Nach dem Domainwechsel mit einem eigens angelegten Testkonto durchspielen. Keine echten Nutzerkonten zum Test löschen.
Ohne Konfiguration bietet die Seite eine E-Mail-Anfrage; sie behauptet keine erfolgte Löschung.

## Vor Veröffentlichung noch bestätigen

- Victor hat Name, Anschrift und USt-ID am 25.10.2026 zur Veröffentlichung auf GitHub/Cloudflare freigegeben.
  Die Telefonnummer ist ausdrücklich ausgenommen und aus dem öffentlichen Entwurf entfernt.
- Weitere Alias-Absender bei Bedarf einzeln extern testen und Inbox-Zustellung beobachten; Basistest siehe oben.
- Das reine STRATO-Domainpaket enthält laut Anbieter **keinen Webmail-Zugang**. Das vorhandene Postfach mit einem
  IMAP-/SMTP-Client verwenden. Eine Webmail-Ablehnung beweist daher kein falsches Postfachpasswort. Apple Mail ist
  mit `webmaster@victorodukoya.com`, `imap.strato.de` und `smtp.strato.de` eingerichtet; Empfang und Versand bestätigt.
  Kein zusätzliches Mail-Abo allein für diesen Test buchen.
- Cloudflare-Konto/Projekt, Anbindung und erforderliche Auftragsverarbeitungsvereinbarungen prüfen/abschließen.
- Tatsächliche Log-Aufbewahrung, Drittlandtransfers, Anbietervereinbarungen und Kontaktdaten in den Datenschutzhinweisen
  abgleichen. App-Altersgruppe, Werbeeinwilligung und aktive Anbieter ebenfalls am Release-Stand prüfen.
- Die übernommenen pauschalen App-Bedingungen wurden für die Vorabwebsite durch eine reine Informationsseite ersetzt.
  Vor dem Store-Release müssen die tatsächlichen App-/Abo-Bedingungen gesondert vorbereitet und geprüft werden.
- Storelinks erst nach Veröffentlichung eintragen. Externe Profil-Links der bestehenden Website vor Launch bestätigen.
- Aktuell verbleiben vier moderate npm-Meldungen im Tailwind-3-Buildwerkzeugbaum; `npm audit --omit=dev` meldete null.
  Kein `npm audit fix --force` ausführen: das vorgeschlagene Typography-Downgrade ist keine sinnvolle pauschale Reparatur.
  Bei einer späteren Tailwind-Migration diese Meldungen erneut prüfen.

## Quellen

- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/pages/configuration/debugging-pages/
- https://developers.cloudflare.com/ssl/edge-certificates/changing-dcv-method/troubleshooting/
- https://docs.astro.build/en/guides/upgrade-to/v7/
- https://www.gesetze-im-internet.de/ddg/__5.html
- https://consumer-redress.ec.europa.eu/site-relocation_en
- https://www.strato.de/faq/mail/passwort-fuer-strato-webmail-vergessen/
- https://www.strato.de/faq/domains/wie-kann-ich-bei-strato-meine-dns-eintraege-verwalten/
- https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/

Die Pages-Veröffentlichung ist bestätigt; die eigene Domain noch nicht. Eine abgeschlossene rechtliche Prüfung wird nicht behauptet.
