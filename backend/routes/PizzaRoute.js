const express = require('express');
const pizzaController = require('./../controllers/PizzaController');
const router = express.Router();


router.get('/', pizzaController.getAllPizza)

module.exports = router;    