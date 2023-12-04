const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    name:{
        type: String,
        // required: true,
    },

    number:{
        type: String,
        // required: true,
    },
});


const Task = mongoose.model("task", taskSchema)
module.exports = Task


