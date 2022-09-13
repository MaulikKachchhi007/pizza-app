const Pizza = require('./../models/PizzaModel');

exports.getAllPizza = async (req, res) => {
    try {
        const getPizza = await Pizza.find();

        res.status(200).json({
            status: true,
            data: getPizza,
            message: "Pizza Retrived Successfully.",
        });

        // res.status(200).json(getPizza);
        // res.send(getPizza);
    } catch (error) {
        res.status(422).json({
            status: false,
            message: error.message,
        });
    }
}