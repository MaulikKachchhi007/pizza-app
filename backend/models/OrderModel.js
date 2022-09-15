const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be a required"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email must be a required"],
        unique: true,
    },
    userId: {
        type: String,
        required: true,
    },
    orderItems: {
        type: Array,
    },
    shippingAddress: {
        type: Object,
    },
    orderAmount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    isDelivered: {
        type: Boolean,
        default: false,
        required: true,
    },
    transctionId: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;