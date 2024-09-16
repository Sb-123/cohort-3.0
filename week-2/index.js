// const fs = require("fs");

// function read(err, data) {
//   console.log(data);
// }

// const data = fs.readFile("a.txt", "utf8", read); // async-ly

// // const data2 = fs.readFile("b.txt", "utf8", read); // sync-ly

// console.log("done!");

function timeout() {
  console.log("hi!");
}

setTimeout(timeout, 1000);

console.log("Welcome to loupe.");

let c = 0;
for (let i = 0; i < 10000000000; i++) {
  c++;
}
console.log("Expensive operation done");
