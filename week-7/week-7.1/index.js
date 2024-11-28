const express = require("express"); // importing express
const { UserModel, TodoModel } = require("./db"); // importing the db.js file
const jwt = require("jsonwebtoken"); // importing jsonwebtoken
const { mongoose } = require("mongoose"); // importing mongoose

const JWT_SECRET = "gayushiod"; // secret key

const app = express(); // initializing express
app.use(express.json()); // using the json() middleware
mongoose.connect(
  "mongodb+srv://sb8031151:Au79Sb51%40m@cluster0.jg03m.mongodb.net/todo-sb-111"
); // connecting to the database

app.post("/signup", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  await UserModel.create({
    name: username,
    password: password,
    email: email,
  });
  res.json({
    message: "You are signed up",
  });
});

app.post("/signin", async function (req, res) {
  const password = req.body.password;
  const email = req.body.email;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Credentials are incorrect",
    });
  }
});

app.post("/todo", auth, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.get("/todos", auth, function (req, res) {});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.id) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).send({
      message: "you are not signed in",
    });
  }
}

app.listen(3000);
