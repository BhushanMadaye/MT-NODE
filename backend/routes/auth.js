const express = require('express');
const router = express.Router();
const { AuthenticateUser } = require('../controllers/auth')

router.post('/login', AuthenticateUser);

module.exports = router;