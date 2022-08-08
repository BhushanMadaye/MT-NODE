const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')
const User = models.user

exports.AuthenticateUser = async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email }})
    if (!user) return res.status(400).send(`Invalid email or password`)

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(400).send(`Invalid email or password`)
    
    console.log({ user : user.dataValues })
    const token = jwt.sign(user.dataValues, `jwtPrivateKey`);

    return res.header('x-auth', 'AP majhi item').status(200).json(token)

}