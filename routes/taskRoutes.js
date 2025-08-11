const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
  filterTasksByCompletion,
} = require("../controllers/taskcontrollers.js");

router.get("/", getTasks);
router.get("/filter", filterTasksByCompletion);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
