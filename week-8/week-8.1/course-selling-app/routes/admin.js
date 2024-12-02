const { Router } = require("express");
const adminRouter = Router();
const { AdminModel } = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
// const { JWT_SECRET } = require("../auth");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const app = express();
app.use(express.json());

adminRouter.post("/signup", async function (req, res) {
  // you would expect the admin to sign up
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(6).max(12),
    firstName: z.string(),
    lastName: z.string(),
  });
  const parseDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
      message: "Invalid format",
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

    await AdminModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
  } catch (e) {
    res.json({
      message: "Admin already exists",
    });
    error = true;
  }
  if (!error) {
    res.json({
      message: "You are signed up",
    });
  }
});

adminRouter.post("/signin", async function (req, res) {
  // you would expect the admin to sign in
  const email = req.body.email;
  const password = req.body.password;

  const response = await AdminModel.findOne({
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

adminRouter.post("/add-course", function (req, res) {
  // you would expect the admin to add a course
  res.json({
    message: "Admin added a course",
  });
});

adminRouter.post("/remove-course", function (req, res) {
  // you would expect the admin to remove a course
  res.json({
    message: "Admin removed a course",
  });
});

adminRouter.post("/update-course", function (req, res) {
  // you would expect the admin to update a course
  res.json({
    message: "Admin updated a course",
  });
});

module.exports = {
  adminRouter,
};
