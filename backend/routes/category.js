const express = require('express')
const router = express.Router()
const { Category } = require('../models/index')

router.post('/', async (req, res) => {
    const data = req.body
    const category = new Category(data)
    try {
        const saveCategory = await category.save()
        res.send(saveCategory)
    } catch (error) {
        res.send(error.errors.name.message)
    }
})

router.get('/', async (req, res) => {
    const categories = await Category.find()
    res.json(categories)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const category = await Category.findById(id)
    res.json(category)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const data = req.body
    const category = await Category.findByIdAndUpdate(id, data)
    res.json(category)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const category = await Category.findByIdAndDelete(id)
    res.json(category)
})

module.exports = router;