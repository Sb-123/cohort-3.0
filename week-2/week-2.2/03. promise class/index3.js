// function waitFor3s(resolve) {
//   setTimeout(resolve, 10000);
// }

// function settimeoutPromisified() {
//   return new Promise();
// }
// function main() {
//   console.log("main is called");
// }
// settimeoutPromisified().then(main); // promisified based approach.

// ***********************************************************************************************

function random(resolve) {
  // resolve is also a function.
  setTimeout(resolve, 3000);
}

// using the eventual value returned by the promise.
function callback() {
  console.log("promise succeeded");
}
let p = new Promise(random); // supposed to return you something eventually.
p.then(callback);
console.log(p);

// create the promisified version of fs
