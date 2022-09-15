const express = require('express');
const router = express.Router();
const orders = require('./../controllers/OrderController');

router.route('/placeorder').post(orders.placeOrders);

module.exports = router;