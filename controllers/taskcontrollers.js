const {
  getAllTasks,
  getTasksById,
  createNewTask,
  removeTask,
  updateTasks,
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

async function deleteTask(req, res) {
  const taskId = parseInt(req.params.id, 10);
  try {
    const result = await removeTask(taskId);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function updateTask(req, res) {
  const taskId = parseInt(req.params.id, 10);
  const updatedTask = req.body;
  console.log("Updating task ID:", taskId, "with data:", updatedTask);
  try {
    const task = await updateTasks(taskId, updatedTask);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
};
