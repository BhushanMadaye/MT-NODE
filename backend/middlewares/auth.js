const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send(`No token provided.`)
    try {
        const decodedToken = jwt.verify(token, 'jwtPrivateKey')
        console.log(decodedToken)
        next()
    } catch (error) {
        res.status(400).send(`Invalid Token.`)
    }
}