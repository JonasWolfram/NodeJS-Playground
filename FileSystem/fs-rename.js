const fs = require("fs");

fs.rename("fs-rename-one.txt", "fs-rename-two.txt", function (err) {
  if (err) throw err;
  console.log("R E N A M E D");
});
