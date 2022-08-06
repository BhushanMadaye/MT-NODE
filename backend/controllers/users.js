const bcrypt = require('bcrypt');
const db = require('../models')
const User = db.user

exports.AddUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ where: { email } })
        if (userExists) return res.status(400).json(`User already registered`)

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashed });
        if (user) {
            return res.status(200).json(`User registered`)
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

exports.GetUsers = async (req, res, next) => {
    const { name } = req.body;
    // const user = await User.find({ where: { name }});
    const user = await User.findAll();
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400).json(`User not registered`)
    }
}

exports.LoginUser = async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = this.GetUser(name);
    if (user) {


    } else {
        res.status(404).json(`User not registered`)
    }
}