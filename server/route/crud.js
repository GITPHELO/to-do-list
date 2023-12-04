const express = require("express");
const router = express.Router(); 
const { create, read, update} = require("../controller/task"); 

// create task
router.post("/add", create).post(create); 

//update item
router.route("/update/:id").put(update)



module.exports = router