const { request } = require('express')
const express = require('express')
const router = express.Router()
const { Product, Category } = require('../models/index')

/** Create Product */
router.post('/', async (req, res) => {
    const { categoryId, ...rest } = req.body
    // if (!category) return res.status(400).send("Category not found")

    try { 
        if (!categoryId) return res.send("Category Required")
        const category = await Category.findById(categoryId)
        const insertCategory = { ...req.body, category: category }
        const data = new Product(insertCategory)
        const addCategory = await data.save(data)
        return res.send(addCategory)
    } catch (error) {
        return res.send(error)
    }
})

router.get('/', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const products = await Product.findById(id)
    res.json(products)
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    const name = req.body
    const options = { new: false };
    const products = await Product.findByIdAndUpdate(id, name)
    res.json(products)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const products = await Product.findByIdAndDelete(id)
    res.json(products)
})

module.exports = router;
