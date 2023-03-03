const express = require("express");
const Task = require("../model/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController");

//Router and we need to export it in to server.js file
const router = express.Router();


//Create a Task
//Get ALL Task or Read Data
//Get Single task
//Delete Task
//Update Task
router.route("/").get(getTasks).post(createTask);
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
// router.post("/", createTask);
// router.get("/", getTasks);
// router.get("/:id", getTask);
// router.delete("/:id", deleteTask);
// router.put("/:id", updateTask);

module.exports = router;
