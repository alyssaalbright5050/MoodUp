const fs = require('fs');
const folderPath = './Dashboard.js';

"OneSaddest".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this saddest is working guys");
      });
}
"OneSad".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this sad is working guys");
      });
}
"OneNeutral".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this netural is working guys");
      });
}
"OneHappy".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this happy is working guys");
      });
}
"OneHappiest".onclick = function(){
    fs.readdir(folderPath, (err, files) => {
        console.log("this happiest is working guys");
      });
}

  
  