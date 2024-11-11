"use strict";
// problem:-I
function greet(fstName) {
    console.log(`Hello ${fstName}`);
}
greet("John");
// problem:-II
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
// problem:-III
function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(20));
// problem:-IV
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(() => console.log("Hello, world!"));
