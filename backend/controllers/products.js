const db = require('../models')
const Product = db.product

exports.AddProduct = async (req, res, next) => {
    console.log(req.params);
    const categoryObj = { productName: `test${index}`, categoryID: 5 }
    const category = await Product.create(categoryObj)
    res.send('AddProduct')
}

exports.GetProduct = async (req, res, next) => {
    const products = await Product.findAll()
    res.send(products)
}

exports.UpdateProduct = (req, res, next) => {
    console.log(req.params);
    res.send('UpdateProduct')
}

exports.DeleteProduct = (req, res, next) => {
    console.log(req.params);
    res.send('DeleteProduct')
}