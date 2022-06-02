# Node JS

- Text Node Intro

> Eine wichtige Eigenschaft von NodeJS ist, dass es **asynchrone Programmierung** nutzt.

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

### Query String lesen

Die Funktion `http.createServer()` hat neben dem Parameter `res` (Antwort), auch das Argument `req` (Request).

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

### Query String aufteilen

Es gibt integrierte Module um Query Strings in einfacher zu lesende Teile aufzuteilen;

```tsx
const http = require("http");
const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);
  })
  .listen(8080);
```

Dies wird uns auf der Port-Adresse 8080 nun die Ausgabe “undefined undefined” anzeigen. Aber nun haben wir die Möglichkeit die beiden Parameter `year` und `month` zu nutzen.

```tsx
http://localhost:8080/?year=2022&month=Mai
//-> 2022 Mai
```

# File System

Mit dem integrierten File System Module ist es möglich mit dem File System des oder eines Computers zu arbeiten.

Um dies zu tun müssen wir das Module wie folgt einbinden:

```tsx
const fs = require("fs");
```

Dies ist nützlich um:

- **Dateien zu lesen.**
- **Dateien zu erstellen.**
- **Dateien zu bearbeiten.**
- **Dateien zu löschen.**
- **Dateien umzubenennen.**

### FS - read

Die Methode `fs.readFile()` wird genutzt um Dateien vom Computer zu lesen.

Angenommen wir haben folgende HTML-Datei:

```tsx
<html>
  <body>
    <h1>My Header</h1>
    <p>My paragraph.</p>
  </body>
</html>
```

Nun schreiben wir eine Server Funktion, die nicht nur einen Server generiert, sondern auch die von uns geschaffene HTML-Datei lädt und anzeigt:

```tsx
const http = require("http");
const fs = require("fs");

http.createServer(function(req, res){
	fs.readFile("./fs-read-demo.html", function(err, data) {
		res.writeHead(200, {"Content-Type", "text/html"});
		res.write(data);
		retrun res.end()
	});
})
```

Die Ausgabe würde uns nun die HTML-Anzeigen:

![Bildschirmfoto 2022-05-30 um 15.18.52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b0de1d96-7110-4e42-847c-f5519b53e499/Bildschirmfoto_2022-05-30_um_15.18.52.png)

### FS - create

Das NodeJS File System hat mehrere Möglichkeiten neue Dateien zu erstellen wie:

- `fs.appendFile()`
- `fs.open()`
- `fs.writeFile()`

Die Methode `fs.appendFile()` kann spezifizierte Inhalte in eine Datei schreiben oder dieser Datei hinzufügen. Sollte diese Datei nicht existieren, wird diese Datei erstellt.

Im folgenden Beispiel erstellen wir eine .txt Datei und fügen Ihr von uns spezifizierten Text hinzu!

```tsx
const fs = require("fs");

fs.appendFile(
  "my-first-created-file.txt",
  "H E U R E K A ! ! !",
  function (note) {
    let note = "S A V E D";
    console.log(note);
  }
);
```

Die `fs.open()` Methode nimmt als zweites Argument noch “w” für write entgegen, dies signalisiert das die Datei speziell zum schreiben neuer Daten geöffnet wird. Sollte keine Datei existieren, wird eine neue erstellt.

```tsx
const fs = require("fs");

fs.open("fs-open-demo.txt", "w", function (err) {
  if (err) throw err;
  console.log("S A V E D");
});
```

Die `fs.writeFile()` Methode ersetzt die spezifizierte Datei und desen Content wenn sie existiert. Sollte dies nicht der Fall sein, wird diese Datei und Content erstellt.

```tsx
const fs = require("fs");

const date = new Date();

fs.writeFile(
  "fs-writeFile-demo.txt",
  "This is a demo file C O N T E N T from " + date.toUTCString(),
  function (err) {
    if (err) throw err;
    console.log("S A V E D");
  }
);
```

Um zu sehen das es sich um einen ersetzten Text handelt, fügen wir noch Variable hinzu die, die aktuelle Zeit, Tag, Datum und Zeitzone in die Datei schreibt.

### FS - Update

Um einer Datei ein Update zu unterziehen haben wir wieder verschiedene Möglichkeiten, die wir bereits in den `create` Methoden kennengelernt haben.

- `fs.appendFile()`
- `fs.writeFile()`

Dabei ist wichtig zu unterscheiden das:

- `fs.appendFile()` fügt neue Inhalte an das Ende der bestehenden Inhalte hinzu.
- `fs.writeFile()` ersetzt den Content komplett.

Beispiele:

```tsx
const fs = require("fs");

const textOld = "This is the old Text";
const newText = "... this on the other hand is newer. ";

fs.appendFile("./fs-update-appendFile.txt", newText, function (err) {
  if (err) throw err;
  console.log("U P D A T E D ");
});
```

Resultat nach zwei durchläufen, einmal mit `oldText` und das zweite mal mit `newText`:

```tsx
This is the old Text... this on the other hand is newer.
```

Hier eine Update Variante die im Terminal noch ausgibt, das die vorherige Datei **R E P L A C E D** wurde.

```tsx
const fs = require("fs");

fs.writeFile(
  "fs-update-writeFile.txt",
  "This is my C O N T E N T !",
  function (err) {
    if (err) throw err;
    console.log("R E P L A C E D");
  }
);
```

### FS - Delete

Um eine Datei aus dem System zu löschen nutzt man die Methode `fs.unlink()`.

Dafür erstellen wir zunächst die Datei: _fs-delete-toBeDeleted.txt_

Wenn wir nun den unteren Code ausführen, wird diese Datei gelöscht.

```tsx
const fs = require("fs");

fs.unlink("./fs-delete-toBeDeleted.txt", function (err) {
  if (err) throw err;
  console.log("All Files Deleted");
});
```

### FS - Rename

Mit der Methode fs.rename() lassen sich Dateien umbenennen.

Zunächst erstellen wir eine Datei: _fs-rename-one.txt_

Die Methode nimmt **zwei Argumente** entgegen, zunächst den aktuellen Namen der Datei, danach den Namen die, die Datei erhalten soll.

```tsx
const fs = require("fs");

fs.rename("fs-rename-one.txt", "fs-rename-two.txt", function (err) {
  if (err) throw err;
  console.log("R E N A M E D");
});
```

# URL System

Mit dem URL-Module können wir Webadressen in lesbare Teile zerlegen.

Module anfordern:

```tsx
const url = require("url");
```

Um eine Webadresse zu analysieren können wir die Methode `url.parse()` nutzen. Diese Methode hat folgenden Syntax:

Syntax:

```tsx
url.parse(urlString, parseQueryString, slashesDenoteHost);
```

- urlString:
  - Beinhaltet die URL
- parseQueryString:
  - Boolean Wert. Wenn true wird das QueryProperty ein Object wieder geben. Default ist false.
- slashesDenoteHost:
  - Dies ist ein boolescher Wert. Wenn er auf true gesetzt ist, wird das erste Token nach der Zeichenkette // und vor dem nächsten / als Host interpretiert.
  - Zum Beispiel: [//geeksforgeeks.org/web-technology](notion://geeksforgeeks.org/web-technology) enthält das Ergebnis {host: '[geeksforgeeks.org](http://geeksforgeeks.org/)', pathname: '/web-technology'} und nicht {pathname: '[//geeksforgeeks.org/web-technology](notion://geeksforgeeks.org/web-technology)'}. Sein Standardwert ist false.

Nun zerlegen wir eine Webadresse mit Parse in seine Einzelteile

```tsx
const url = require("url");

// Webadresse
const adr = "http://localhost:8080/default.htm?year=2017&month=february";
// parse() auf die Webadresse anwenden
const q = url.parse(adr, true);

console.log(q.hostname);
//-> localhost
console.log(q.host);
//-> localhost:8080
console.log(q.search);
//-> ?year=2017&month=february

let qData = q.query;
console.log(qData);
//-> [Object: null prototype] { year: '2017', month: 'february' }
```

Nun erstellen wir aus den vorherigen Übungen zu http und fs einen Webserver der vorhandene HTML-Dateien lesen kann und die URL lesen kann.

```tsx
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
```

Im einzelen passiert folgendes:

1. **Anfordern der Module:**

   Durch die require Methode:

   ```tsx
   const http = require("http");
   const fs = require("fs");
   const url = require("url");
   ```

2. **Erstellung des Webservers.**

   Durch die HTTP-Methode createServer auf Port 8080

   ```tsx
   http
     .createServer(function (req, res) {
   		...
   		...
   		...
     }).listen(8080);
   ```

3. **Initialsierung der URL - Variable die “.” und Patchname konkatiniert.**

   Dazu nutzen wir das req Argument des Webservers um an die URL zu gelangen.

   Nun Speichern wir den aktuellen pathname / Dateiname noch in eine Variable, die konkatinieren wir noch durch einen Punkt vor der Pathnamen

   ```tsx
   let q = url.parse(req.url, true);
   let filename = "." + q.pathname;
   ```

   Hier noch eine Darstellung der zusammen gesetzten Variablen:

   ```tsx
   q.pathname = /summer

   filename = '.' + q.pathname

   Ergibt
   **./summer**
   ```

4. **Zugriff auf das File-System mir der readFile() Methode.**

   Nun greifen wir auf das File-System zu um die benötigten Dateien zu finden. Dazu nutzen wir die `readFile()` Methode und übergeben ihr als erstes Argument die Variable `filename`.

   ```tsx
   fs.readFile(filename, function (err, data) {
   			...
   			...
   });
   ```

   Danach fangen wir zunächst alle möglichen Fehler ab und geben einen “404 Not Found” wieder, sollte keine Content gefunden werden.

   ```tsx
   fs.readFile(filename, function (err, data) {
         if (err) {
           res.writeHead(404, { "Content-Type": "text/html" });
           return res.end("404 Not Found");
         }
   			...
       });
   ```

   Alle gefunden Dateien können nun angezeigt werden. Dafür nutzen wir die Methoden `res.writeHead()`, `res.write()` und geben die Dateien wieder zurück durch return `res.end()`

   ```tsx
   fs.readFile(filename, function (err, data) {
     if (err) {
       res.writeHead(404, { "Content-Type": "text/html" });
       return res.end("404 Not Found");
     }
     res.writeHead(200, { "Content-Type": "text/html" });
     res.write(data);
     return res.end();
   });
   ```

Die gesamte Datei sieht nun wie folgt aus.

```tsx
const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
```

Eine Übersicht aller URL-System Methoden sind hier zu finden:

[URL | Node.js v18.2.0 Documentation](https://nodejs.org/api/url.html)

# NPM

NodeJS verfügt über einen mächtigen und sehr weit verbreiteten Paketmanager mit dem Namen **NPM** (Node Package Manager).

Über `npm` lassen sich vorhanden Pakete / Module laden und im eigenen Projekt benutzen.

Auf [www.npmjs.com](https://www.npmjs.com/) lassen sich tausend von kostemlosen Pakete herunterladen und benutzen. Dabei wird `npm` automatisch auf dem Computer mit installiert, wenn man [NodeJS](https://nodejs.org/de/) installiert.

## NVM - Node Version Manager

Wenn man NodeJS von der offiziellen Seite heraus installiert, steht nur genau die Version zu Verfügung, die installiert wurde.

Über die Open-Source Software `nvm` lassen sich mehrere Version von NodeJS installieren, verwalten und es ist möglich zwischen den Versionen schnell zu wechseln.

Alle informationen über nvm sind hier zu finden → https://github.com/nvm-sh/nvm

Die wichtigsten Befehle von nvm sind:

```tsx
nvm install [*version]*
nvm ls
nvm use [*version*]
```

## Packages in Node

NPM-Pakete enthalten alle nötigen funktionalitäten um ein Module zu Verfügung zu stellen.

Module sind JavaScript Librarys, welche dann im eigenen Projekt genutzt werden kann.

## Packages downloaden

npm-Packages werden über den eigenen CLI (Command Line Interface) installiert.

Im einfachsten Fall sieht dieses so aus:

```tsx
npm install upper-case
```

Da NPM ein komplett eigenes Ökosystem ist, gehen wir hier nur auf die nötigsten Funktionsweisen ein.

In Projekten werden NPM-Pakete im Ordner `node_modules` gespeichert und über die Datei `package.json` verwaltet.

## Packages nutzen

Um ein geladenes Paket / Module zu nutzen, gehen wir gewohnt vor:

```tsx
const uc = require("upper-case");
```

Nun können wir dieses Module nutzen.

```tsx
const http = require("http");
const uc = require("upper-case");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("hello world!"));
    return res.end();
  })
  .listen(8080);

//-> HELLO WORLD!
```

# NodeJS Events

NodeJS eignet sich hervoragend um Event-Getrieben Applikationen zu entwerfen.

## Events in NodeJS

Jede Aktion / Interaktion mit einem Computer ist ein Event. Beispielsweise wenn man eine Verbindung zu einem Netzwerk aufbaut oder eine Datei öffnet.

In NodeJS können Objekte Event auslösen, wie beispielsweise `readStream`, welches Dateien öffnet und schließen kann.

```tsx
const fs = require("fs");
const rs = fs.createReadStream("./demofile.md");

rs.on("open", () => {
  console.log("Datei wurde geöffnet!");
});
```

Im oberen Beispiel fordern wir zunächst das Module fs an, danach erstellen wir eine Variable, die als Inhalt die Datei `‘demofile.md’` aus via dem File-System liest.

Dafür verwenden wir die Methode `createReadstream`.

## Event Module

NodeJS hat ein integriertes Module mit dem Namen ‘Events’ mit dem sich schnell Events zum erstellen, lesen, listen oder auslösen von Events erstellen lassen.

Im Fall des Event Modules müssen wir nicht nur ein `require()` erstellen, sondern auch bei gewissen Objekt-Typen eine Instanz erstellen:

```tsx
const events = require("events");
const eventEmitter = new events.EventEmitter();
```

Das Ergebnis dieser Instanziierung wäre:

```tsx
console.log(eventEmitter);

/*
EventEmitter {
  _events: [Object: null prototype] {},
  _eventsCount: 0,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false
}
*/
```

## Das EventEmitter Objekt

Durch das EventEmitter-Objekt lassen sich Ereignissen eigene Event-Handler zuweisen.

Im folgenden Beispiel soll ein Event ausgelöst werden, wenn ein `‘Schrei’` Event eintritt.

```tsx
const events = require("events");
const eventEmitter = new events.EventEmitter();

// Event-Handler erstellen
const eventHandler = function () {
  console.log("Ich höre einen Schrei !!!");
};

// Zuweisung des Event-Handlers an ein Event
eventEmitter.on("Schrei", eventHandler);

// Auslösen des Events
eventEmitter.emit("Schrei");
```

# Upload Files

Für das abwicklen von Datei Uploads hat NodeJS das Modul “Formidable” an Bord.

Das Formidable Module kann über NPM installiert werden:

```tsx
npm install formidable
```

Nun erstellen wir zunächst einen kleinen Webserver mit einem HTML-Form Objekt das einmal die <input> Variante zur Dateiauswahl, sowie einen “senden” Button beinhaltet:

```tsx
const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" methode="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  })
  .listen(8080);
```

Nun implementieren wir das Module Formidable
