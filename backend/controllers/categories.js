const db = require('../models')
const Category = db.category
const { paginationFromTo } = require('../helper/pagination')

exports.AddCategory = async (req, res, next) => {
    const category = await Category.create(req.body)
    console.log(category)
    res.send(category)
}

exports.GetAllCategory = async (req, res, next) => {
    const { from, to } = req.query
    const params = (!from && !to) ?  {} : paginationFromTo({ from, to })
    const categories = await Category.findAndCountAll(params)
    res.send(categories)
}

exports.GetCategoryByID = async (req, res, next) => {
    const { id } = req.params
    const category = await Category.findByPk(id)
    res.send(category)
}

exports.UpdateCategory = async (req, res, next) => {
    const { id } = req.params
    const category = await Category.update(
        { ...req.body },
        { where: { categoryID: id } }
    )
    res.send(category)
}

exports.DeleteCategory = async (req, res, next) => {
    const { id } = req.params
    await Category.destroy({
        where: { categoryID: id }
    })
    res.sendStatus(200)
}