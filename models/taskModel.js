const { readFileSync } = require("fs");
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "../task.json");

async function readAllTasks() {
  const data = readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

async function getAllTasks() {
  const tasks = await readAllTasks();
  return tasks;
}

async function getTasksById(id) {
  const data = await readAllTasks();

  const task = data.tasks.find((task) => task.id === id);

  if (!task) {
    throw new Error("Task not found");
  }
  return task;
}

async function createNewTask(newTask) {
  const data = await readAllTasks();
  newTask.id = data.tasks.length + 1;
  console.log("New Task ID:", newTask);
  data.tasks.push(newTask);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return newTask;
}

async function removeTask(id) {
  const data = await readAllTasks();
  const taskIndex = data.tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new Error("Task not found");
  }

  data.tasks.splice(taskIndex, 1);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return { message: "Task deleted successfully" };
}

module.exports = {
  getAllTasks,
  getTasksById,
  createNewTask,
  removeTask,
};
