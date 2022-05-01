const db = require('../models')
const Category = db.category

exports.AddCategory = (req, res, next) => {
    console.log(req.params);
    
    res.send('AddCategory')
}

exports.GetCategory = async (req, res, next) => {
    for (let index = 0; index < 10; index++) {
        const categoryObj = { categoryName: `test${index}` }
        const category = await Category.create(categoryObj)
    }
    res.send('All done')
}

exports.UpdateCategory = (req, res, next) => {
    console.log(req.params);
    res.send('UpdateCategory')
}

exports.DeleteCategory = (req, res, next) => {
    console.log(req.params);
    res.send('DeleteCategory')
}