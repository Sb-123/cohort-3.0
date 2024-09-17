// returns ans object of the promise class.

function settimeoutPromisified(ms) {
  // let pt= new Promise(); //just think like this.

  let p = new Promise((resolve) => setTimeout(resolve, ms));

  return p;
  // what it return ?
  //   number?
  // string?
  // object of Date class?

  // object of the promise class.(true)
}

function callback() {
  console.log("3 seconds have passed");
}
setTimeout(callback, 3000);
settimeoutPromisified(3000).then(callback); // syntactically cleaner.

let p = settimeoutPromisified(5000); // it return you object of the promise class.
console.log(p);
