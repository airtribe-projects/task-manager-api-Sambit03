const {
  getAllTasks,
  getTasksById,
  createNewTask,
} = require("../models/taskModel.js");

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
async function addTask(req, res) {
  const newTask = req.body;
  console.log("Adding new task:", newTask);
  try {
    const addedTask = await createNewTask(newTask);
    res.status(201).json(addedTask);
  } catch (error) {
    res.status(500).json({ message: "Error adding task" });
  }
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
};
