const Todo = require("../model/todoModel");

exports.getAllData = async (req, res) => {
  try {
    const todo = await Todo.find();
    if (!todo) {
      return res.status(404).json({
        success: "Fail",
        message: "There is no task",
      });
    }
    res.status(200).json({
      status: "Success",
      totalMessage: todo.length,
      data: {
        todo,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.createData = async (req, res) => {
  try {
    const data = await Todo.create(req.body);
    console.log("data is 🦁🦁🦁", data);
    res.status(201).json({
      status: "Success",
      message: "Successfully created",
      data: { data },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  try {
    const data = await Todo.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        success: "Fail",
        message: "There is no task available or you have deleted it",
      });
    }
    res.status(204).json({
      status: "Success",
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    });
  }
};
exports.updateData = async (req, res) => {
  try {
    const updatedTime = new Date().toLocaleString();
    console.log(updatedTime);
    const updateData = Object.assign(req.body, { updatedAt: updatedTime });
    const data = await Todo.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    res.status(200).json({
      status: "Success",
      data: {
        data,
      },
    });
  } catch (error) {
    return res.status(404).json({
      success: "Fail",
      message: error.message,
    });
  }
};

exports.getSingleData = async (req, res) => {
  try {
    const data = await Todo.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        success: "Fail",
        message: "There is no task",
      });
    }
    res.status(200).json({
      status: "Success",
      data: {
        data,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: error.message,
    });
  }
};
