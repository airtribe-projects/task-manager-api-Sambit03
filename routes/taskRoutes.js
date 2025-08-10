const express = require("express");
const router = express.Router();
const { getTasks, getTaskById } = require("../controllers/taskcontrollers.js");

router.get("/", getTasks);
router.get("/:id", getTaskById);

module.exports = router;
