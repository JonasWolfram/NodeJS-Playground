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
