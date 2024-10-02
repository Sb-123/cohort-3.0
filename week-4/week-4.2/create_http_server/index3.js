// const express = require("express");
// const app = express();

// app.get("/songs/Liked-Songs", function (req, res) {
//   res.json({ data: "your data here" });
// });

// app.listen(3002); // which port.

const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  res.send("Server is working!");
});
