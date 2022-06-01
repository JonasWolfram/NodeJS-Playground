const fs = require("fs");
const rs = fs.createReadStream("./demofile.md");

rs.on("open", () => {
  console.log("Datei wurde geöffnet!");
});
