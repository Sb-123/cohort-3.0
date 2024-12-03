const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { adminMiddleware } = require("../middleware/admin");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();

adminRouter.post("/signup", async function (req, res) {
  // you would expect the admin to sign up
  const requiredBody = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(6).max(25),
    firstName: z.string(),
    lastName: z.string(),
  });
  const parseDataWithSuccess = requiredBody.safeParse(req.body);

  if (!parseDataWithSuccess.success) {
    res.json({
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
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);

    await adminModel.create({
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

  const response = await adminModel.findOne({
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
      process.env.JWT_SECRET_admin
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

adminRouter.post("/add-course", adminMiddleware, async function (req, res) {
  // you would expect the admin to add a course
  const adminId = req.adminId;

  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId: adminId,
  });
  res.json({
    message: "Course added",
    courseId: course._id,
  });
});

adminRouter.put("/update-course", adminMiddleware, async function (req, res) {
  // you would expect the admin to update a course
  const adminId = req.userId;

  const { title, description, price, imageUrl, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      description,
      price,
      imageUrl,
    }
  );

  res.json({
    message: "Course updated",
    courseId: course._id,
  });
});

adminRouter.get("/courses/bulk", adminMiddleware, async function (req, res) {
  // you would expect the admin to get all courses
  // const courses = await courseModel.find({ creatorId: req.adminId });
  // res.json(courses);

  const adminId = req.adminId;

  const courses = await courseModel.find({
    creatorId: adminId,
  });
  res.json(courses);
});

adminRouter.post("/remove-course", adminMiddleware, async function (req, res) {
  // you would expect the admin to remove a course
  res.json({
    message: "Course removed",
  });
});

module.exports = {
  adminRouter,
};
