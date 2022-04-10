const express = require('express')
const router = express.Router()

const product = require('./product')
router.use('/products', product)

const category = require('./category')
router.use('/categories', category)

module.exports = router