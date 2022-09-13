const express = require('express');
const pizzaRoute = require('./routes/PizzaRoute');
const userRoute = require('./routes/UserRoute');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json())


app.use('/api/v1/pizzas', pizzaRoute)

// auth Controoler
app.use('/api/v1/users', userRoute)
module.exports = app;
