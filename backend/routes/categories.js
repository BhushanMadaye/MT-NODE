const express = require('express')
const router = express.Router()

const { AddCategory, GetAllCategory, GetCategoryByID, UpdateCategory, DeleteCategory } = require('../controllers/categories')
const auth = require('../middlewares/auth')

router.post('/', auth, AddCategory)

router.get('/', GetAllCategory)

router.get('/:id', GetCategoryByID)

router.put('/:id', UpdateCategory)

router.delete('/:id', DeleteCategory)

module.exports = router