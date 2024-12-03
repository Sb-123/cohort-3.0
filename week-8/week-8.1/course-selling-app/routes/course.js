const { Router } = require("express");
const courseRouter = Router();
const { courseModel } = require("../db");

courseRouter.post("/purchase", function (req, res) {
  // you would expect the user to pay for the course
  res.json({
    message: "Course purchased",
  });
});

courseRouter.post("/preview", async function (req, res) {
  // you would expect the user to preview the course
  const courses = await courseModel.find({ creatorId: req.userId });
  res.json(courses);
});

module.exports = {
  courseRouter,
};
