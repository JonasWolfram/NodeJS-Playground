# Node JS

- Text Node Intro

> Eine wichtige Eigenschaft von NodeJS ist, dass es **asynchrone Programmierung** nutz.

Hier ein Vergleich zum File Request zwischen PHP, [ASP.NET](http://ASP.NET) und NodeJS

**PHP - ASP:**

1. Sendet die Aufgabe an das Datei Systems des Computers
2. Warten während der Computer die Datei öffnet und liest.
3. Nun erfolgt eine Rückgabe an den Client
4. Bereit für den nächsten Request.

**NodeJS**

1. Sendet die Aufgabe an das Datei Systems des Computers
2. Bereit für den nächsten Request.
3. Wenn der Computer die Datei geöffnet und gelesen hat, sendet er den Datei Content zurück an den Client.

### Was kann NodeJS?

- NodeJS kann dynamischen Website Inhalt erzeugen.
- NodeJS kann **create**, **open**, **read**, **write**, **delete** und **close** Funktionen auf Dateien die auf einem Server liegen anwenden.
- NodeJS kann Formular Inhalte sammeln und an eine Datenbank weitergeben.
- NodeJS kann Daten in Datenbanken hinzufügen, löschen oder verändern .

### Was ist eine NodeJS-Datei?

- NodeJS Dateien werden ausgeführt, wenn Events eintreten, für die sie dann die vorgesehenden Funktionen bereithalten.
- Ein Typisches Event wäre beispielsweise ein User Zugriff auf einen Port.
- NodeJS Dateien müssen auf dem Server zunächt initiert werden, bevor sie ihre Funktionen ausführen können.
- NodeJS Dateien enden genau wie JavaScript Dateien mit der Endung `.js`

## Getting Started

Um direkt eigenen Inhalt in einem Browser sehen zu können, erstellen wir als erstes einen eigenen Server Service.

```tsx
const http = require("http");

http
  .createServer(function (rep, res) {
    res.writeHead(200, { "Content-Typ": "text/html" });
    res.end("Hooray . . . this works fine !");
  })
  .listen(8080);
```

Nun zu Erklärung der einzelnen Schritte dieses Codes:

Um ein Modul von NodeJS in einer Datei nutzbar zu machen, müssen wir desen Eigenschaften anfordern. Dies geschieht durch das Schlüsselwort `require`.

```tsx
const http = require("http");
```

Nun haben wir das Modul und desen Eigenschaften in die Variable `http` übergeben.

Von nun an können wir mit dieser Variablen auf die Funktionen und Methoden des http Modules zugreifen, wie beispielsweise createServer, eine Instanz der Klasse / Funktion http mit der wir einen Server Service initialisieren können.

```tsx
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);
```

Im folgenden übergeben wir noch weitere Details, auf die wir später eingehen werden.

### Eigene Module Exportieren

Um eigene Module zu erstellen müssen wir diese Verfügbar machen, dies geschieht durch einen gezielten `exports`. Dies ist durch verschieden Möglichkeiten realisierbar, so können einzelne Methoden / Funktionen exportiert werden, aber auch ganze Datei Inhalte oder mehrere Methoden / Funktionen.

**Export Datei:**

```tsx
exports.createDate = function () {
  return Date();
};
```

**Import:**

```tsx
const dt = require("./own-modules-export");

const today = dt.createDate();
console.log(today);
```

Das Ergebnis der Ausgabe der Datei im Terminal durch den Befehl: `node own-modules-import.js` ist:

```tsx
Sun May 29 2022 10:18:32 GMT+0200 (GMT+02:00)
```

## HTTP Module

NodeJS verfügt über ein integriertes Modul mit dem Namen `http`, welches es NodeJS erlaubt Daten via HTTP, also dem **Hyper Text Transfer Protocol**, zu transferieren.

Wir haben bereits eine Instanz des http-Modules angefordert (require) und in der Variablen `http` gespeichert.

Nun gehen wir näher auf die Details ein.

```tsx
const http = require('http');

http.createServer(function(req, res) {    <- Erstellt ein Server Objekt
	res.write('Hallo Welt!');               <- Antwort an den Client
	res.end();                              <- Ende der Antwort
}).listen(8080);                          <- Port an dem das Server Objekt
																						 zuhören soll.
```

Wenn wir nun [http://localhost:8080](http://localhost:8080) besuchen, sehen wir unseren Response. Allerdings nicht als HTML. Soll die Ausgabe in Browser freundlichen HTML erfolgen, müssen wir dies spezifizieren, beispielsweise durch writeHead, welches zwei Parameter entgegen nimmt: ein HTTP Status Code, in diesem Fall 200, was heißt das alles ok ist und ein Objekt erwartet, das aus Schlüssel/Wert paar dann genauere Informationen der Antwort beinhaltet.

```tsx
http
  .createServer(function (req, res) {
    **res.writeHead(200, { "Content-Type": "text/html" });**
    res.end("Hooray ... this works!");
  })
  .listen(8080);
```

Nun sehen wir einen gewohnten, weissen Hintergrund.

### Query String

Die Funktion http.createServer() hat neben dem Parameter res (Antwort), auch das Argument req (Request).

Im folgenden nutzen wir diese Anfrage um verschieden URL Routen anzuzeigen.

```tsx
const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url);
    res.end();
  })
  .listen(8080);
```

Nun testen wir verschiedene URLs und kriegen jeweils eine Anzeige darüber, wo wir uns gerade befinden.

```tsx
[http://localhost:8080](http://localhost:8080)/sommer
//-> /sommer

[http://localhost:8080](http://localhost:8080)/winter
//-> /winter
```
