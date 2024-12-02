const { Router } = require("express");
const userRouter = Router();
const { userModel } = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
// const { JWT_SECRET } = require("../auth");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const app = express();
app.use(express.json());

userRouter.post("/signup", async function (req, res) {
  // you would expect the user to sign up
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(6).max(12),
    firstName: z.string(),
    lastName: z.string(),
  });
  const parseDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.status(400).json({
      message: "Invalid format",
      errors: parseDataWithSuccess.error.errors,
    });
    return;
  }

  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  let error = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    // console.log(hashedPassword);

    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
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
userRouter.post("/signin", function (req, res) {
  // you would expect the user to sign in
  res.json({
    message: "User signed in",
  });
});

userRouter.get("/purchase", function (req, res) {
  // you would expect the user to purchase a course
  res.json({
    message: "User purchased a course",
  });
});

module.exports = {
  userRouter,
};
