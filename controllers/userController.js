const User = require('../models/User');
const jwt = require('jsonwebtoken');

module.exports = {
    add: async (req, res) => {
        try {
            const existEmail = await User.findOne({email: req.body.email});
            const existPhone = await User.findOne({phone: req.body.phone});

            if(existEmail) {
                return res.status(400).json({success: false, data: "Email already exist"})
            }

            if(existPhone) {
                return res.status(400).json({success: false, data: "Phone already exist"})
            }

            const user = new User(req.body)
            user.save((error, result) => {
                if (error) return res.status(400).json({ success: false, data: error.message })
                return res.status(200).json({ success: true, data: result })
            })
        } catch(error) {
            res.status(400).json({success: false, data: error.message})
        }
    },
    getAll: (req, res) => {
        User.find((error, results) => {
            if (error) return res.status(400).json({ success: false, data: error.message })
            return res.status(200).json({ success: true, data: results })
        })
    },
    getSingle: (req, res) => {
        User.findById(req.params.id, (error, result) => {
            if (error) return res.status(400).json({ success: false, data: error.message })
            return res.status(200).json({ success: true, data: result })
        })
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user && user.password == req.body.password) {
                const token = jwt.sign(JSON.stringify(user), process.env.SECRET);
                return res.status(200).json({ success: true, data: token })
            } else {
                return res.status(400).json({ success: false, data: "Email or password is wrong" })
            }
        } catch (error) {
            return res.status(400).json({ success: false, data: error.message })
        }
    }
}