const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { loginUser, registerUser} = require("../controllers/users");
const { createTask, getTask, allTask, updateTask, deleteTask } = require("../controllers/tasks");
 

//Routes for user 
router.post("/login", loginUser);
router.post("/register", registerUser);

//Routes for slots
//All below API's requires token to be passed in header
router.post("/createTask",auth,createTask);
router.get("/getTask/:id",auth,getTask);
router.get("/allTask/:user_id",auth,allTask);
router.patch("/updateTask/:id",auth,updateTask);
router.delete("/deleteTask/:id",auth,deleteTask);


module.exports = router;