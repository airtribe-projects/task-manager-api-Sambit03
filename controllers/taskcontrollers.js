const {
  getAllTasks,
  getTasksById,
  createNewTask,
  removeTask,
  updateTasks,
  filterTasks,
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
  try {
    const task = await updateTasks(taskId, updatedTask);
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function filterTasksByCompletion(req, res) {
  const completedParam = req.query.completed;
  console.log("Filtering tasks by completion status:", completedParam);
  //   if (completedParam === undefined) {
  //     const data = await readAllTasks();
  //     return res.json(data.tasks);
  //   }

  const completed = completedParam === "true";
  try {
    const tasks = await filterTasks(completed);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error filtering tasks" });
  }
}

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
  filterTasksByCompletion,
};
