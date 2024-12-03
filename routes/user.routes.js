const express = require('express')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userMOdel = require('../models/user')

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register',
    body('email').trim().isEmail().isLength({ min: 10 }),
    body('username').trim().isLength({ min: 4 }),
    body('password').trim().isLength({ min: 6 })
    , async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            })
        }
        const { username, email, password } = req.body;
        try{
            const user = await userMOdel.create({
                username,
                email,
                password
            })
            res.json(user)
        }catch(err){
            res.status(400).json({
                message: "Error Creating user",
                error: errors.message
            })
        }
    })

module.exports = router