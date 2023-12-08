const mongoose = require("mongoose");

let taskSchema = mongoose.Schema({
   title:{
         type: String,
         required: true,
    },
    description:{
         type: String,
         default:""
    },
    due_date:{
         type: Date,
         default: Date.now,
    },
    status:{
         type: String,
         default: "Pending",
         enum: ['Pending', 'In Progress', 'Completed'],
    },
    author:{
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User',
           required: true,
    }
   }
);

module.exports = mongoose.model("Tasks", taskSchema);