const mongoose = require("mongoose");
const express = require("express");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
// const { userModel, courseModel, adminModel } = require("./db");
const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env.MONGO_URL);

const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
}

// async function main() {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://sb8031151:Au79Sb51%40m@cluster0.jg03m.mongodb.net/course-selling-app"
//     );
//     console.log("Connected to MongoDB");
//     app.listen(3000, () => {
//       console.log("Server is running on port 3000");
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

main();
