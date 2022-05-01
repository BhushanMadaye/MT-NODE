const express = require('express')
const router = express.Router()

const products = require('../controllers/products')

router.post('/', products.AddProduct)

router.get('/', products.GetProduct)

router.put('/', products.UpdateProduct)

router.delete('/', products.DeleteProduct)

module.exports = router