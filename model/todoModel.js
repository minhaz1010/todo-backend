const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title have to be present"],
    trim: true,
    unique: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: [true, "You must put a description"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleString(),
  },
  updatedAt: {
    type: Date,
    default: new Date().toLocaleString(),
  },
  taskDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
