// Database
const config = require('../config/config.json')
const { KitItem, sequelize } = require('../models')

// Express
const express = require('express');
const router = express.Router();

// bulk upload
router.post('/bulk', async function (req, res, next) {
    for (let row of req.body) {
        await KitItem.create(row)
    }
})

router.get('/', async function(req, res, next) {
    let kits = await sequelize.query("SELECT DISTINCT kit from kititems", {raw: true})
    res.send(JSON.stringify(kits))
})

router.get('/:kit', async function(req, res, next) {
    let items = await KitItem.findAll({
        where: {
            kit: req.params.kit
        }
    })
    res.send(JSON.stringify(items))
})
