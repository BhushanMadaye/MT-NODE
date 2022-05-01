const express = require('express')
const router = express.Router()

const categories = require('../controllers/categories')

router.post('/', categories.AddCategory)

router.get('/', categories.GetCategory)

router.put('/', categories.UpdateCategory)

router.delete('/', categories.DeleteCategory)

module.exports = router