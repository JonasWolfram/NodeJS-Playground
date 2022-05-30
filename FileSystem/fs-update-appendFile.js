const fs = require("fs");

const textOld = "This is the old Text";
const newText = "... this on the other hand is newer. ";

fs.appendFile("./fs-update-appendFile.txt", newText, function (err) {
  if (err) throw err;
  console.log("U P D A T E D ");
});
