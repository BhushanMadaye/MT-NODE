const db = require('../models')
const Product = db.product
const { paginationFromTo } = require('../helper/pagination')

exports.AddProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    res.send(product)
}

exports.GetAllProduct = async (req, res, next) => {
    // const products = await Product.findAll({
    //     // include: [
    //     //     {
    //     //         model: db.category,
    //     //         // as: 'category',
    //     //         // attributes: ['categoryID', 'categoryName']
    //     //     }
    //     // ],
    //     // include: [db.category]
    //     // include: [{
    //     //     model: db.category,
    //     //     as: 'category',
    //     // }]
    //   })
    const { from, to } = req.query
    const params = (!from && !to) ? {} : paginationFromTo({ from, to })
    console.log({ params });
    const products = await Product.findAndCountAll(params)
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