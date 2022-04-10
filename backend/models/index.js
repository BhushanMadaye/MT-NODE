const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name required'],
        minLength: [3, 'Minimum 3 characters required'],
    }
})

const Product = new mongoose.Schema({
    name: {
        required: [true, 'Product name required'],
        minLength: [3, 'Minimum 3 characters required'],
        type: String
    },
    categoryId: {
        required: [true, 'Category required'],
        type: String
    },
    category: Category
})



module.exports = { Product: mongoose.model('products', Product), Category: mongoose.model('categories', Category) }