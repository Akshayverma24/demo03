const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3  
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0         
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
        required: true
    },
    inStock: {
        type: Boolean,
        default: true   
    }
}, {
    timestamps: true   
});

module.exports = mongoose.model("Book", bookSchema);