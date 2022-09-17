const express = require('express');
const router = express.Router();
const orders = require('./../controllers/OrderController');

router.route('/placeorder').post(orders.placeOrders);
router.route('/getUserOrders').post(orders.getUserOrders);

module.exports = router;