const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskcontrollers.js");

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
