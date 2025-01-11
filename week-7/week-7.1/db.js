const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  password: String,
  email: { type: String, unique: true },
  // token: String,
});

const Todo = new Schema({
  userId: ObjectId,
  title: String,
  done: Boolean,
  //   description: String,
  // token: String,
});

const UserModel = mongoose.model("users", User); // creating the model
const TodoModel = mongoose.model("todos", Todo); // creating the model

module.exports = {
  UserModel,
  TodoModel,
};
