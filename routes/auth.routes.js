const {Router} = require('express')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const router = Router()

module.exports = router

// Registration path: api/auth/registration
router.post(
    '/registration',
    [
        check('userEmail', 'Incorrect email').isEmail(),
        check('userPass', 'Min value - 6 symbols').isLength({min: 6})
    ],
    async (req, res) => {
        try {
            console.log('Express body: ', req.body)

            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data'
                })
            }
            const {userEmail, userPass} = req.body

            console.log('User mail: ', userEmail)
            console.log('User pass: ', userPass)


            const guest = await User.findOne({userEmail})

            guest && res.status(400).json({message: 'User is exist'})

            const passHash = await bcrypt.hash(userPass, 12)
            const user = new User({userEmail, userPass: passHash})

            await user.save()

            res.status(201).json({message: 'User created'})
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something went wrong'})
        }
    })

// Login
router.post(
    '/login',
    [
        check('userEmail', 'Enter correct email').normalizeEmail().isEmail(),
        check('userPass', 'Enter password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Incorrect registration data'
                })
            }

            const {userEmail, userPass} = req.body

            const user = await User.findOne({ userEmail })

            if (!user) {
                return res.status(400).json({message: 'User not found'})
            }

            const isMatch = await bcrypt.compare(userPass, user.userPass)

            if (!isMatch) {
                return res.status(400).json({message: 'Incorrect password, try again'})
            }

            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SALT,
                {expiresIn: '1h'}
            )

            res.json({ token, userId: user.id })
        } catch (e) {
            console.log(e)
            res.status(500).json({message: 'Something went wrong'})
        }
    })