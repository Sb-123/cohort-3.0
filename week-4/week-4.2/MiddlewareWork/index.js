const express = require("express");

const app = express();

// fucntion that return a boolean if the age of the person is more the 14.
function isOldEnough(age) {
  if (age >= 14) return true;
  else return false;
}

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Sorry you are not of age yet",
    });
  }
}
// app.use(isOldEnoughMiddleware); /* this is an another way to declare the middleware function to use below all approach. */

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully ride the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You have successfully ride the ride 2",
  });
});

app.listen(30003);
