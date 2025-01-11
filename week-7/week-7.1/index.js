const express = require("express"); // importing express
const { UserModel, TodoModel } = require("./db"); // importing the db.js file
const jwt = require("jsonwebtoken"); // importing jsonwebtoken
const { mongoose } = require("mongoose"); // importing mongoose
const { auth } = require("./auth"); // importing auth.js file

const app = express(); // initializing express
app.use(express.json()); // using the json() middleware
mongoose.connect(
  "mongodb+srv://sb8031151:Au79Sb51%40m@cluster0.jg03m.mongodb.net/"
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

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  // console.log(user);

  if (response) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
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

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    title: title,
    done: done,
    userId: userId,
  });

  res.json({
    message: "Todo created successfully",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({ userId: userId });
  res.json({ todos });
});

app.listen(3000);
