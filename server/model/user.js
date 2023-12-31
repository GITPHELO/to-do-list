// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  firstname: {
    type: String,
    default: "Basic",
    required: true,
  },
  lastname: {
    type: String,
    default: "Basic",
    required: true,
  },
})

const User = Mongoose.model("user", UserSchema)
module.exports = User
