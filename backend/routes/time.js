const express = require('express')
const router = express.Router()
const time = require('../controllers/time')

router.get('/', time.GetTime);

module.exports = router