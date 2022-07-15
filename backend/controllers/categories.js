const db = require('../models')
const Category = db.category
const { paginationFromTo } = require('../helper/pagination')

exports.AddCategory = async (req, res, next) => {
    const category = await Category.create(req.body)
    console.log(category)
    if (category) {
        res.status(200).json(`Category added successfully`)
    } else {
        res.status(400).json(category)
    }
}

exports.GetAllCategory = async (req, res, next) => {
    try {
        const { from, to } = req.query
        const params = (!from && !to) ?  {} : paginationFromTo({ from, to })
        const categories = await Category.findAndCountAll({
            ...params, 
            order: [
            ['id', 'ASC']]
        })
        console.log(categories)
        if (categories) {
            res.status(200).send(categories)
        } else {
            res.status(400).json(category)
        }        
    } catch (error) {
        console.log(error.message)
    }
}

exports.GetCategoryByID = async (req, res, next) => {
    const { id } = req.params
    const category = await Category.findByPk(id)
    // res.send(category)
    if (category) {
        res.status(200).send(category)
    } else {
        res.status(400).json(category)
    }
}

exports.UpdateCategory = async (req, res, next) => {
    const { id } = req.params
    const category = await Category.update(
        { ...req.body },
        { where: { categoryID: id } }
    )
    // res.send(category)
    if (category) {
        res.status(200).json(`Category updated successfully`)
    } else {
        res.status(400).json(category)
    }
}

exports.DeleteCategory = async (req, res, next) => {
    const { id } = req.params
    const category = await Category.findByPk(id)
    if (category) {
        await Category.destroy({
            where: { categoryID: id }
        })
        res.status(200).json(`Category deleted successfully`)
    } else {
        res.status(400).json(`Category does not exist`)
    }
}