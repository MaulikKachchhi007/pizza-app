const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be a required"],
    },
    email: {
        type: String,
        required: [true, "Email must be a required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password must be a required"],
    }, 
    role: {
        type: String,
        required: true,
    }, 
    status: {
        type: Boolean,
        required: false,
    },
}, {
    timestamps: true
} ); 

const User = mongoose.model('User', userSchema);

module.exports = User;