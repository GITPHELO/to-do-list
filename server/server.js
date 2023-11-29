const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("./db");

//Connecting the Database
connectDB();

app.use(express.json())
app.use("/api/auth", require("./Auth/route"))









app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

