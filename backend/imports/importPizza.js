const fs = require('fs');
const mongoose = require('mongoose');
const env = require('dotenv');
const Pizza = require('./../models/PizzaModel');

env.config()
const db = process.env.DATABASE_URL;

mongoose.connect(db, {
    // live database
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
}).then(con => {
    console.log("Database connection established successfully");
});

const pizzaFile = JSON.parse(fs.readFileSync(`./pizzasdata.json`, 'utf-8'));

const importData = async () => {
    try {
        const log = await Pizza.create(pizzaFile)
        console.log(log)
    } catch (error) {
        console.log(error.message);
    }
}

importData();