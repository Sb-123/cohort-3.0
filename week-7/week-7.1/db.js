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
  title: String,
  done: Boolean,
  userId: ObjectId,
  //   description: String,
  // token: String,
});

const UserModel = mongoose.model("user", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
  UserModel,
  TodoModel,
};
