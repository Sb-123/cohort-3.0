const { Router } = require("express");
const express = require("express");
const userRouter = Router();
const { userModel, courseModel, purchaseModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { z } = require("zod");
const { userMiddleware } = require("../middleware/user");
const app = express();
app.use(express.json());

userRouter.post("/signup", async function (req, res) {
  // you would expect the user to sign up
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(6).max(25),
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
userRouter.post("/signin", async function (req, res) {
  // you would expect the user to sign in
  const email = req.body.email;
  const password = req.body.password;

  const response = await userModel.findOne({
    email: email,
  });
  if (!response) {
    res.status(403).json({
      message: "Incorrect credentials",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(
    password,
    response.password.toString()
  );

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      process.env.JWT_SECRET_user
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

userRouter.get("/purchases", userMiddleware, async function (req, res) {
  // you would expect the user to purchase a course
  const userId = req.userId;

  const purchases = await purchaseModel.find({
    userId,
  });

  // let purchasedCourseIds = [];
  // for (let i = 0; i < purchases.length; i++) {
  //   purchasedCourseIds.push(purchases[i].courseId);
  // }

  const coursesData = await courseModel.find({
    _id: { $in: purchasedCourseIds },
  });

  res.json({
    purchases,
    coursesData,
  });
});

module.exports = {
  userRouter,
};
