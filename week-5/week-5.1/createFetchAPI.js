const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    answer: a + b,
  });
});

app.get("/multiply", function (req, res) {});

app.get("/substracts", function (req, res) {});

app.listen(3000);
