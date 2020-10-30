const {Router} = require('express')
const config = require('config')
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
            const {email, password} = req.body

            const guest = await User.findOne({email})

            guest && res.status(400).json({message: 'User is exist'})

            const passHash = await bcrypt.hash(password, 12)
            const user = new User({email, password: passHash})

            await user.save()
        } catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }
    })

// Login
router.post(
    '/login',
    [
        check('email', 'Enter correct email').normalizeEmail().isEmail(),
        check('password', 'Enter password').exists()
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

            const {email, password} = req.body

            const user = await USer.findOne({ email })

            if (!user) {
                return res.status(400).json({message: 'User not found'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Incorrect password, try again'})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSalt'),
                {expiresIn: '1h'}
            )

            res.json({ token, userId: user.id })
        } catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }
    })