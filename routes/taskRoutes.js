const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTaskById,
  addTask,
} = require("../controllers/taskcontrollers.js");

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", addTask);

module.exports = router;
