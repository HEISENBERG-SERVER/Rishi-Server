const mongoose = require("mongoose")

const  connect = async  () => {
await mongoose.connect("mongodb+srv://heisenbergdatabase1:uDVtMXlxymOMO8eX@cluster0.vwlkprw.mongodb.net/")
}


module.exports=connect
