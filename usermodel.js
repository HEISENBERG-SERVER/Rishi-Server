const { Schema } = require("mongoose");
const mongoose = require("mongoose")
const users = new Schema(
    {
        Rishi: {
            
            type:String
        },
        conRishi:{
            type:String
        }
      
    });

const xyz = new mongoose.model("Rishi-registerusers",users)

module.exports = xyz;