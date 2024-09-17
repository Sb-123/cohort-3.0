function waitFor3s(resolve) {
  setTimeout(resolve, 3000);
}

function main() {
  console.log("main is called");
}
waitFor3s(main);

waitFor3s(function () {
  console.log("hi");
});
