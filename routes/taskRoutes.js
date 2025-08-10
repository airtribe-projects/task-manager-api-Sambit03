const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
} = require("../controllers/taskcontrollers.js");

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.delete("/:id", deleteTask);

module.exports = router;
