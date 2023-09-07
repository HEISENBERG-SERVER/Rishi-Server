const { Schema } = require("mongoose");
const mongoose = require("mongoose")
const user = new Schema(
    {
        planname: {
            
            type:String
        },
        plandescription:{
            
            type:String
            
        },
        planprice:{
            type:String
        }
    });

const Plan = new mongoose.model("Rishiplans",user)

module.exports = Plan;