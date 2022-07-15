const db = require('../models')
const Product = db.product
const Category = db.category
const { paginationFromTo } = require('../helper/pagination')
const { category } = require('../models')

exports.AddProduct = async (req, res, next) => {
    const product = await Product.create(req.body)
    if (product) {
        res.status(200).json(`Product added successfully`)
    } else {
        res.status(400).json(product)
    }
}

exports.GetAllProduct = async (req, res, next) => {
    const { from, to } = req.query
    const params = (!from && !to) ? {} : paginationFromTo({ from, to })
    const products = await Product.findAndCountAll({
        // include: db.category,
        include: {
            model: db.category,
            /** Attributes for foreign object */
            attributes: { exclude: ['updatedAt', 'createdAt'] } 
        },
        /** Attributes for primary object */
        attributes: { exclude: ['updatedAt', 'createdAt'] },
        ...params, 
        order: [
        ['id', 'ASC']]
    })
    // res.send(products)
    if (products) {
        res.status(200).send(products)
    } else {
        res.status(400).json(category)
    }
}

exports.GetProductByID = async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (product) {
        res.status(200).send(product)
    } else {
        res.status(400).json(product)
    }
}

exports.UpdateProduct = async (req, res, next) => {
    const { id } = req.params
    const { categoryId } = req.body
    const categoryExists = await Category.findByPk(categoryId)

    let product = null
    if (categoryExists) {
        product = await Product.update(
            { ...req.body },
            { where: { id: id } }
        )
    }
    if (product) {
        res.status(200).json(`Product updated successfully`)
    } else {
        res.status(400).json(product)
    }
}

exports.DeleteProduct = async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findByPk(id)
    if (product) {
        await Product.destroy({
            where: { id: id }
        })
        res.status(200).json(`Product deleted successfully`)
    } else {
        res.status(400).json(`Product does not exist`)
    }
}