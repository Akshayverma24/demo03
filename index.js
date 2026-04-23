// bson is used by mongodb
// bson stores data in binary format. bson forat has more datatypes
// url for connecting to mongodb.

const express = require("express");
const mongoose = require("mongoose")
const Student = require("./models/Student");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

// pass mongodb url. to connect mongoserver
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("mongodb connected");
})
.catch(err => console.log(err));
//Route for creating one student record
app.post("/students",async(req,res)=>{
    try{
    const student=await Student.create(req.body);
    res.status(201).json(student);
    } catch(err){
        res.status(400).json({message:err.message});

    }
})
app.get("/students/:id",async(req,res)=>{
    try{
       const student= await Student.findById(req.params.id);
        res.json(student);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
})
app.delete("/students/:id",async(req,res)=>{
    try{
       const student= await Student.findByIdAndDelete(req.params.id);
        res.json(student);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
})
// put to update the data by findbyid.
app.put("/students/:id",async(req,res)=>{
    try{
       const student= await Student.findByIdAndUpdate(req.params.id,
        req.body,{
            new:true,
            runValidators:true
        }
       );
        res.json(student);
    }
    catch(err){
        res.status(404).json({message:err.message});
    }
})


app.listen(PORT,()=>[
    console.log("server running on port",PORT)
]);




