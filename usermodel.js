const { Schema } = require("mongoose");
const mongoose = require("mongoose")
const user1 = new Schema(
    {
        Rishi: {
            
            type:String
        }
      
    });

const UserName = new mongoose.model("Rishi-registerusers",user1)

module.exports = UserName;