module.exports = (err, req, res, next) => {

    if (err.name === 'SequelizeValidationError') {
        const errObj = {};
        err.errors.map(er => {
            errObj[er.path] = er.message;
        })
        console.log(errObj);
        res.status(400).send(errObj)
    } else {
        console.log(err.message)
        res.status(500).send(err.message)
    }
}