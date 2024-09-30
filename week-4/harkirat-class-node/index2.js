const path = require("path");
console.log(__dirname);
console.log(__dirname + "/index2.js");
console.log(path.join(__dirname, "../../index2.js", "/projects", "/index.js"));
