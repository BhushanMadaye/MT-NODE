const express = require('express')
const router = express.Router()

const categories = require('../controllers/categories')

router.post('/', categories.AddCategory)

router.get('/', categories.GetAllCategory)

router.get('/:id', categories.GetCategoryByID)

router.put('/:id', categories.UpdateCategory)

router.delete('/:id', categories.DeleteCategory)

module.exports = router