const url = require("url");

// Webadresse
const adr = "http://localhost:8080/default.htm?year=2017&month=february";
// parse() auf die Webadresse anwenden
const q = url.parse(adr, true);

console.log(q.hostname);
console.log(q.host);
console.log(q.search);

let qData = q.query;
console.log(qData);
