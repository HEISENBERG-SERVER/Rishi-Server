const express = require("express")
   
const app1 = express()
const Plan = require("./model")
const mongoose = require("mongoose")
const UserName = require("./usermodel")
const cors = require("cors")

app1.use(cors({origin: "https://followers.heisenberg.in.net"}))
app1.use(express.json())
// app1.use(function(req, res, next) {
//     res.set("Access-Control-Allow-Origin", 'https://followers.heisenberg.in.net');
//     res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.set('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
  
    // next();})
app1.get("/showplans", async(req, res) => {
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    try {
        const allplans = await Plan.find({})
        res.json({ allplans })
    } catch (error) { console.log(error) }
})
app1.post('/addplans', async(req, res) => {
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
   await Plan.create(req.body).then(()=>{res.json({message:"Success"})})
       
   
})
app1.delete('/removeplans', async(req, res) => {
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    const { drop } = req.query
await Plan.deleteMany({ planname: drop })
// .then((async (response)=>{
    // response=""
    //  if (response) 
    //     { 
    //         await Plan.deleteMany({ planname: drop })
    //         return res.json({message:"Success"}) 
    //      }
    //      return  res.json({error:"No Plan Found"})  
        
    // 
//  })
    res.send({message:'Success'})
   
  
})
app1.post("/registering", async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
  
    
await UserName.create(req.body.Rishi).then(()=>{res.json({message:"Successfully Registered"})})


})







module.exports = app1