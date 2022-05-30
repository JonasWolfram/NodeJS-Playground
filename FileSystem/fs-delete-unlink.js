const fs = require("fs");
/* 
    Create File: 
    fs-delete-toBeDeleted.txt 
    Execute: 
    node fs-delete-unlink.js 
    and your file is gone.   
*/

fs.unlink("./fs-delete-toBeDeleted.txt", function (err) {
  if (err) throw err;
  console.log("All Files Deleted");
});
