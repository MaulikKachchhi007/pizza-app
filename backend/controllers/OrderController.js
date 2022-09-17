const { v4: uuidv4} = require("uuid");
const Order = require('./../models/OrderModel');
const stripe = require('stripe')("sk_test_51JktLsSCqayQsMfteoPsCsz5hmXP0l0QEPYYKvzI6KLPQQpQOvkZ6Pi7mUPS1t7gOcOk4RhO8Wfn1LJlj7uXNdaD009V6y6fdF");

exports.placeOrders = async (req, res) => {
    try {
        const {  token, subTotals, currentUser, cartItems } =  req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        })
        const payment = await stripe.charges.create({
            amount: subTotals*100,
            currency: 'INR',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4(), 
        }) 
        

        if (payment) {
            const newOrder = new Order({
                "name": currentUser.name,
                "email": currentUser.email,
                "userId": currentUser._id,
                "orderItems": cartItems,
                "orderAmount": subTotals,
                "isDelivered": false,
                "shippingAddress": {
                    "street": token.card.address_line1,
                    "city": token.card.address_city,
                    "country": token.card.address_country,
                    "pincode": token.card.address_zip, 
                },
                "transctionId": payment.source.id,
            });
            console.log(newOrder);
            newOrder.save();

            res.send('Order Placed Successfully.');
        } else {
            res.send('Payment Failed');
        }

        // res.status(200).json(getPizza);
        // res.send(getPizza);
    } catch (error) {
        res.status(422).json({
            status: false,
            message: error.message,
        });
    }
}

exports.getUserOrders = async (req, res) => {
    try {
        console.log(req.body);
        const {  userId } =  req.body;
        const orders = await Order.find({ userId: userId }).sort({_id: -1});
        

        res.status(200).json({
            status: true,
            message: 'User Orders Successfully.',
            data: orders,
        });
        // res.send(getPizza);
    } catch (error) {
        res.status(422).json({
            status: false,
            message: error.message,
        });
    }
}