function readFileAsync() {
  return new Promise(function (resolve, reject) {
    FileSystem.readFile("aasdaflsdjfal.txt", "utf-8", function (err, data) {
      // error
      if (err) {
        reject("file not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("files has been read");
  })
  .catch(function (e) {
    console.log(e);
  });
