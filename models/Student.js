const mongoose=require("mongoose");
// two argumnets.
const studentschema=new mongoose.Schema({
    name:{
        type:String,
        // mandatory to enter name 
        required:true,

    },
    regNo:{
        type:Number,
        // 
        required:true,
        // enter value greater than this
        min:100000000
    },
    program:{
        type:String,
        required:true,
    }
} , {
    timestamps:true
})

// creating model and attaching to moongoose

module.exports = mongoose.model("Student", studentschema);