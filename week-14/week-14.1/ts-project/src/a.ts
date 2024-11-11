// problem:-I
function greet(fstName: string): void{
    console.log(`Hello ${fstName}`);

}
greet("John");


// problem:-II
function sum(a: number, b: number): number { 
    return a + b;
}
console.log(sum(2, 3));

// problem:-III
function isLegal(age: number): boolean { 
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isLegal(20));

// problem:-IV
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(() => console.log("Hello, world!"));