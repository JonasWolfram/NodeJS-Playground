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
