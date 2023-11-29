const express = require("express")
const router = express.Router()


const { register, login, update, deleteUser } = require("./auth");


router.route("/register").post(register)




module.exports = router;