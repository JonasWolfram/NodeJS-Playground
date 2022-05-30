const fs = require("fs");

fs.open("fs-open-demo.txt", "w", function (err) {
  if (err) throw err;
  console.log("S A V E D");
});
