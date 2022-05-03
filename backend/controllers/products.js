const db = require('../models')
const Product = db.product

exports.AddProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    console.log(product)
    res.send(`AddedProduct: ${product}`)
}

exports.GetProduct = async (req, res, next) => {
    const products = await Product.findAll({
        // include: [
        //     {
        //         model: db.category,
        //         // as: 'category',
        //         // attributes: ['categoryID', 'categoryName']
        //     }
        // ],
        // include: [db.category]
        // include: [{
        //     model: db.category,
        //     as: 'category',
        // }]
      })
    res.send(products)
}

exports.GetProductByID = async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    res.send(product)
}

exports.UpdateProduct = async (req, res, next) => {
    const { id } = req.params
    const product = await Product.update(
        { ...req.body },
        { where: { productID: id } }
    )
    res.send(product)
}

exports.DeleteProduct = async (req, res, next) => {
    const { id } = req.params
    await Product.destroy({
        where: { productID: id }
    })
    res.sendStatus(200)
}