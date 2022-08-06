const express = require('express')
const router = express.Router()

const categories = require('./categories')
const products = require('./products')
const time = require('./time')
const users = require('./users')
const auth = require('./auth')

router.use('/categories', categories)

router.use('/products', products)

router.use('/current-time', time)

router.use('/users', users)

router.use('/auth', auth)

module.exports = router