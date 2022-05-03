const express = require('express')
const router = express.Router()

const products = require('../controllers/products')

router.post('/', products.AddProduct)

router.get('/', products.GetProduct)

router.get('/:id', products.GetProductByID)

router.put('/:id', products.UpdateProduct)

router.delete('/:id', products.DeleteProduct)

module.exports = router