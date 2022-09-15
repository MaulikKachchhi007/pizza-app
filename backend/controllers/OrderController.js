const { v4: uuidv4} = require("uuid");
const Pizza = require('./../models/PizzaModel');
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
            res.send('Payment done');
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