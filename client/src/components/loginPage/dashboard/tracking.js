const fs = require('fs');
const folderPath = './Dashboard.js';

"flow-text dark blue-text text-darken-1".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this is working guys");
      });
}
  
  