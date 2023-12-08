const express = require("express");
const Tasks = require("../models/tasks");
const User = require("../models/users");
// const tasks = require("../models/tasks");

const deleteTask = async (req, res) => {
  const {id} = req.params;
  try {
    const deletedTask = await Tasks.findByIdAndDelete(id);
    if (deletedTask) {
      res.status(200).json({ msg: "Task deleted" });
    }
  } catch {
    res.status(500).json({ msg: "Task cant be deleted" });
  }
};

const createTask = async (req, res) => {
    const { title, desc , due_date,author } = req.body;
    try {
        const newTask = await Tasks.create({ title, desc, due_date, author });
        await newTask.save();
        res.status(200).json({ msg: "Task created", data: newTask });
    } catch {
        res.status(500).json({ msg: "Task cant be created" });
    }
    }

    const allTask = async (req, res) => {
      const { user_id } = req.params;
      // console.log(id);
      try {
        const taskDetails = await Tasks.find({"author":user_id});
        console.log(taskDetails);
        res.status(200).json({
          msg:"found",
          data: taskDetails
        });
      } catch {
        res.status(400).json({ msg: "try again" });
      }
    };

const getTask = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const taskDetails = await Tasks.findById(id);
    console.log(taskDetails);
    res.status(200).json({
      data: taskDetails
    });
  } catch {
    res.status(400).json({ msg: "try again" });
  }
};


const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, desc, due_date,status } = req.body;
  try {
    const taskDetails = await Tasks.findByIdAndUpdate(id, {
      title,
      desc,
      due_date,
      status
    });
    console.log(taskDetails);
    res.status(200).json({
      msg: "updated",
      data: taskDetails
    });
  } catch {
    res.status(400).json({ msg: "try again" });
  }
}


module.exports = {
  deleteTask,
  createTask,
  allTask,
  getTask,
  updateTask
};
