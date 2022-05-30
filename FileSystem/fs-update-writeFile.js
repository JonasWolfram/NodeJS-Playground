const fs = require("fs");

fs.writeFile(
  "fs-update-writeFile.txt",
  "This is my C O N T E N T !",
  function (err) {
    if (err) throw err;
    console.log("R E P L A C E D");
  }
);
