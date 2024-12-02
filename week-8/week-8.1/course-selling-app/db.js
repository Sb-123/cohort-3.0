const { Schema, ObjectId, default: mongoose } = require("mongoose");

// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});

const purchaseSchema = new Schema({
  userId: ObjectId,
  courseId: ObjectId,
  date: Date,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const UserModel = mongoose.model("users", userSchema);
const CourseModel = mongoose.model("courses", courseSchema);
const PurchaseModel = mongoose.model("purchases", purchaseSchema);
const AdminModel = mongoose.model("admins", adminSchema);

module.exports = {
  UserModel,
  CourseModel,
  PurchaseModel,
  AdminModel,
};
