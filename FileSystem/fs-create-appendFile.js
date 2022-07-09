const fs = require("fs");

fs.appendFile("fs-appendFile-file.txt", " H E U R E K A ! ! !", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
