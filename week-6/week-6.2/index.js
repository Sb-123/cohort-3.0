const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "gayushiod";
const app = express();
app.use(express.json());

const users = [];

function logger(req, res, next) {
  console.log(req.method + "request came");
  next();
}

// localhost:3000
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/signup", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  //   we should check if a user with this username already exists.

  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // maps and filter
  //   foundUser = users.find((user) => user.username === username && user.password === password);

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    // foundUser.token = token;
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Credentials are incorrect",
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.status(403).send({
      message: "you are not signed in",
    });
  }
}

app.get("/me", logger, auth, function (req, res) {
  let foundUser = null;
  const currentUser = req.username;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === currentUser) {
      foundUser = users[i];
    }
  }
  res.json({
    username: foundUser.username,
    password: foundUser.password,
  });
});

/*
app.get("/todo", logger, (req, res) => {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    // stmt.
  } else {
    res.status(403).send({
      message: "you are not signed in",
    });
  }
});
*/

app.listen(3000); // that the http server is listening on port 3000
