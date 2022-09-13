const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be a required"],
        unique: true,
    },
    varients: {
        type: Array,
        required: true,
    },
    prices: {
        type: Array,
        required: true,
    },
    category: {
        type: String,
        required: [true, "Category must be a required"],
    },
    image: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        trim: true,
        required: false,
    },
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;