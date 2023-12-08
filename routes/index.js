const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { loginUser, registerUser} = require("../controllers/users");
const { createTask, getTask, allTask, updateTask, deleteTask } = require("../controllers/tasks");
 

//Routes for user 
router.post("/login", loginUser);
router.post("/register", registerUser);

//Routes for slots
router.post("/createTask",createTask);
router.get("/getTask/:id",getTask);
router.get("/allTask/:user_id",allTask);
router.patch("/updateTask/:id",updateTask);
router.delete("/deleteTask/:id",deleteTask);


module.exports = router;