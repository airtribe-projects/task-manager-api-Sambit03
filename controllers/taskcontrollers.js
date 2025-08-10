const { getAllTasks, getTasksById } = require("../models/taskModel.js");

async function getTasks(req, res) {
  try {
    const tasks = await getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving tasks" });
  }
}

async function getTaskById(req, res) {
  const taskId = parseInt(req.params.id, 10);
  try {
    const task = await getTasksById(taskId);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getTasks,
  getTaskById,
};
