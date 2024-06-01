const express = require('express')

const router = express.Router()

const Men = require('../models/Men')

const {getMen,createMen,deleteMen} = require('../controllers/Men')

router.get('/getmen',getMen)

router.post('/createmen',createMen)

router.delete('/deletemen/:id',deleteMen)

module.exports = router