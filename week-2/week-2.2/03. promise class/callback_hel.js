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
