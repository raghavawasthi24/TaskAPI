const express = require("express");
const Tasks = require("../models/tasks");

//delete a pariicular task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await Tasks.findByIdAndDelete(id);
    if (deletedTask) {
      res.status(200).json({ msg: "Task deleted" });
    } else {
      res.status(404).json({ msg: "Task not found" });
    }
  } catch {
    res.status(500).json({ msg: "Task cant be deleted" });
  }
};

//create a new task
const createTask = async (req, res) => {
  const { title, desc, due_date, author } = req.body;
  try {
    const newTask = await Tasks.create({ title, desc, due_date, author });
    await newTask.save();
    res.status(200).json({ msg: "Task created", data: newTask });
  } catch {
    res.status(500).json({ msg: "Task cant be created" });
  }
};

//get all tasks of a particular user
const allTask = async (req, res) => {
  const { user_id } = req.params;
  try {
    const taskDetails = await Tasks.find({ author: user_id }); //finding authoe id in task model
    if(taskDetails.length==0){ //if no tasks found
      res.status(400).json({msg:"No tasks found"})
    }
    res.status(200).json({
      msg: "found",
      data: taskDetails,
    });
  } catch {
    res.status(500).json({ msg: "Try again" });
  }
};


//get a particular task
const getTask = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const taskDetails = await Tasks.findById(id);
    if (!taskDetails) {
      res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({
      data: taskDetails,
    });
  } catch {
    res.status(400).json({ msg: "Try again" });
  }
};


//update a particular task
//only title, desc, due_date, status can be updated
//pass only those fields which you want to update
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, desc, due_date, status } = req.body;
  try {
    const taskDetails = await Tasks.findByIdAndUpdate(id, {
      title,
      desc,
      due_date,
      status,
    });
    if (!taskDetails) {
      res.status(404).json({ msg: "Task not found" });
    }
    res.status(200).json({
      msg: "Task Updated",
      data: taskDetails,
    });
  } catch {
    res.status(400).json({ msg: "try again" });
  }
};

module.exports = {
  deleteTask,
  createTask,
  allTask,
  getTask,
  updateTask,
};
