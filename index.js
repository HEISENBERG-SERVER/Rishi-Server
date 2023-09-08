const express = require("express")
const cors = require("cors")
const app = express()
const Register = require("./Register.js")
const plans = require("./routes.js")

app.use(cors({origin: "https://followers.heisenberg.in.net"})) 
// {origin: "https://followers.heisenberg.in.net"}
app.use("/plans", plans)

app.get("/",(req,res)=>{res.json({message:"Server Is Workingcheck2"})})
app.post("/registering", async (req,res)=>{
    await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
  
    
await UserName.create(req.body.Rishi).then(()=>{res.json({message:"Successfully Registered"})})


})
app.listen(4000)