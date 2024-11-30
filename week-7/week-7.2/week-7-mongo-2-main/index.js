const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://sb8031151:Au79Sb51%40m@cluster0.jg03m.mongodb.net/todo-sb-111"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(6).max(17),
    name: z.string(),
  });
  //   const parsedBody = requiredBody.parse(req.body);
  const parseDataWithSuccess = requiredBody.safeParse(req.body);

  /* 
    safeParse returns an object with a success property and value property.
    If the value property is true, the data was valid.
    If the value property is false, the data was invalid. like this:
    {
        success: true | false,
        data: {},
        error: {}
        
    }
*/

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Invalid format",
    });
    return;
  }

  /*
  my schema should be looking like this
  req.body = {
    email: "sanjeev@gmail.com",
    password: "123456",
    name: "sanjeev",
  };
   */

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  /*
    if (typeof email !== "string" || email.length < 5 || email.includes("@")) {
      res.json({
        message: "Invalid email",
      });
      return;
    }
 */

  let error = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
      email: email,
      password: hashedPassword,
      name: name,
    });
  } catch (e) {
    res.json({
      message: "User already exists",
    });
    error = true;
  }
  if (!error) {
    res.json({
      message: "You are signed up",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });
  if (!response) {
    res.status(403).json({
      message: "Incorrect credentials",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
