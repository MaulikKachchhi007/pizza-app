const express = require('express');
const authController = require('./../controllers/AuthController');
const router = express.Router();


router.route('/register').post(authController.register)
router.route('/login').post(authController.login)

module.exports = router;    
