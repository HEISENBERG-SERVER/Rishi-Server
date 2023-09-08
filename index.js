const express = require("express")
const cors = require("cors")
const app = express()
const Register = require("./Register.js")
const plans = require("./routes.js")

app.use(cors({origin: "https://followers.heisenberg.in.net"})) 
// {origin: "https://followers.heisenberg.in.net"}
app.use("/plans", plans)
app.use("/user",Register)
app.get("/",(req,res)=>{res.json({message:"Server Is Workingcheck2"})})
app.listen(4000)