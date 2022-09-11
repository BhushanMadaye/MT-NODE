const express = require('express');
const router = express.Router();
const { AddUser, GetUsers, GetUser } = require('../controllers/users')
const Authorize = require('../middlewares/auth')

router.post('/', AddUser);

router.get('/', GetUsers);

router.get('/', Authorize, GetUser);


module.exports = router