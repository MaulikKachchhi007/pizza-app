const express = require('express');
const pizzaRoute = require('./routes/PizzaRoute');
const userRoute = require('./routes/UserRoute');
const orderRoute = require('./routes/OrderRoute');

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors());


app.use('/api/v1/pizzas', pizzaRoute)

// auth Controoler
app.use('/api/v1/users', userRoute)

// order routes
app.use('/api/v1/orders/', orderRoute)
module.exports = app;
