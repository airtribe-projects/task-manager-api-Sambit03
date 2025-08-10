const { readFileSync } = require("fs");
const { get } = require("http");
const path = require("path");

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

module.exports = {
  getAllTasks,
  getTasksById,
};
