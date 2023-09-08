const express = require("express")
const cors = require("cors")
const app = express()
const Register = require("./Register.js")
const plans = require("./routes.js")
const xyz = require("./usermodel")
const mongoose = require("mongoose")

app.use(cors({origin: "https://followers.heisenberg.in.net"})) 
app.use(express.json())
// {origin: "https://followers.heisenberg.in.net"}
app.use("/plans", plans)

app.get("/",(req,res)=>{res.json({message:"Server Is Workingcheck2"})})
app.post("/registering", async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/").then(()=>{
  
    console.log(req.body)
xyz.create(req.body).then(()=>{res.json({message:"Successfully Registered"})})


})})

app.get("/getallusers",async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/").then(async ()=>{
    
        const allusers = await xyz.find({}).then(()=>{  res.json({allusers : allusers })})
      
  
})
})
app.listen(4000)