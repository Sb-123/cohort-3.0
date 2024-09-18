const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendTheFinalValueHere(data);
  });
}

function readFile(fileName) {
  return new Promise(readTheFile);
}

function callback(contents) {
  console.log(contents);
}
const p = readFile();

p.then(callback);
