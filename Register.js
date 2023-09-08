const express = require("express")
const app2 = express()
const UserName = require("./usermodel")
const mongoose = require("mongoose")
const cors = require("cors")

app2.use(cors())

 app2.use(express.json());

app2.get("/getallusers",async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    try {
        const allusers = await UserName.find({})
        res.json({ allusers })
    } catch (error) { console.log(error) }

})
app2.post("/register", async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    
    res.setHeader('Access-Control-Allow-Origin');

await UserName.create(req.body.Rishi).then(()=>{res.json({message:"Successfully Registered"})})


})


module.exports=app2