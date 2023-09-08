const express = require("express")
    // const bodyParser = require("body-parser")
const app1 = express()
const Plan = require("./model")
const mongoose = require("mongoose")

    // app.use(bodyParser.urlencoded({extended:false}))
app1.use(express.json())
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
app1.post("/register", async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
    
    
await UserName.create(req.body.Rishi).then(()=>{res.json({message:"Successfully Registered"})})


})







module.exports = app1