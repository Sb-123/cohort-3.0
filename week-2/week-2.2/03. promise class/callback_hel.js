function callback() {
  console.log("hi");
}
setTimeout(function () {
  console.log("hi");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("Sanjeev");
    }, 5000);
  }, 3000);
}, 1000);

// M-II:-

function step3Done() {
  console.log("Hello there");
}

function step2Done() {
  console.log("Hello");
  setTimeout(step3Done, 5000);
}
function step1done() {
  console.log("Hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1done, 1000);

// M-III:-
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("Hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("Hello there.");
    });
  });
});
// M-IV:-
setTimeoutPromisified(1000)
  .then(function () {
    console.log("Hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("Hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there..");
  });
