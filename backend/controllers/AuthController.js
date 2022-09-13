const User = require('../models/UserModel');

exports.register = async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            status: 1,
            role: 'user'
        });


        return res.status(200).json({
            status: true,
            message: "User Registerd Successfully/",
        });
    } catch (error) {
        console.log("Test");
        return res.status(422).json({
            status: false,
            message: error.message,
        });
    }
}


exports.login = async (req, res) => {
    try {
        let { email, password } = req.body;


        const user = await User.find({ email, password });

        if (user.length > 0) {
            return res.status(200).json({
                status: true,
                data: user[0],
                message: "User Login Successfully.",
            });
        } else {
            return res.status(422).json({
                status: false,
                message: "Invalid email or password.",
            });
        }



    } catch (error) {
        return res.status(422).json({
            status: false,
            message: error.message,
        });
    }
}