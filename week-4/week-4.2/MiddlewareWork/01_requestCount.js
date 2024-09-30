const express = require("express");

const app = express();
const port = 3000;
let requestCount = 0;

// you have been given an express server which has a few endpoints.
// your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global.

app.use(function (req, res, next) {
  requestCount++;
  next();
});

app.get()("/user", function (req, res) {
  res.status(200).json({ name: "sanju" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});
module.exports = app;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
