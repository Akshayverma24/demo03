const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const Book = require("./models/book"); 

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));



app.post("/books", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});



app.delete("/books/:id", async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});





app.listen(PORT, () => {
    console.log("server running on port", PORT);
});