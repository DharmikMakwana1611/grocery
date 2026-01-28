const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Deal", dealSchema);