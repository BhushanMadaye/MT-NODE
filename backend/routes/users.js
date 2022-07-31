const express = require('express');
const router = express.Router();
const { AddUser, GetUsers } = require('../controllers/users')

router.post('/', AddUser);

router.get('/', GetUsers);


module.exports = router