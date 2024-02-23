const express = require("express");
const {
  getAllData,
  createData,
  deleteData,
  updateData,
  getSingleData,
} = require("../controllers/todoContoller");

const router = express.Router();

router.route("/").get(getAllData).post(createData);

router.route("/:id").get(getSingleData).delete(deleteData).patch(updateData);

module.exports = router;
