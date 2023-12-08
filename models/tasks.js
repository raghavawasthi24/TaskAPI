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
    date:{
         type: Date,
         required: true,
    },
    status:{
         type: String,
         default: "Pending",
         enum: ['Pending', 'In Progress', 'Completed'],
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
      }
   }
);

module.exports = mongoose.model("User", taskSchema);