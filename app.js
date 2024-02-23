const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/", todoRoutes);

const db = process.env.DATABASE_LOCAL;
mongoose.connect(db).then(() => {
  console.log(chalk.blue.underline.bold("connected to mongodb"));
});

module.exports = app;
