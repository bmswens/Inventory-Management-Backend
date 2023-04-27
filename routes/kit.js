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
    res.status(200).send()
})

router.get('/', async function(req, res, next) {
    let [kits] = await sequelize.query("SELECT DISTINCT kit from kititems", {raw: true})
    let output = []
    for (let kit of kits) {
        output.push({name: kit.kit})
    }
    res.send(JSON.stringify(output))
})

router.get('/:kit', async function(req, res, next) {
    let items = await KitItem.findAll({
        where: {
            kit: req.params.kit
        }
    })
    res.send(JSON.stringify(items))
})

router.post('/:kit/:nsn/issue', async function(req, res, next) {
    let item = await KitItem.findOne({
        where: {
            kit: req.params.kit,
            nsn: req.params.nsn
        }
    })
    let currentQuantity = item.quantity 
    await KitItem.update({quantity: currentQuantity - req.body.quantity}, {
        where: {
            kit: req.params.kit,
            nsn: req.params.nsn
        }
    })
    res.status(200).send()
})

router.post('/:kit/:nsn/restock', async function(req, res, next) {
    let item = await KitItem.findOne({
        where: {
            kit: req.params.kit,
            nsn: req.params.nsn
        }
    })
    let currentQuantity = item.quantity 
    await KitItem.update({quantity: currentQuantity + req.body.quantity}, {
        where: {
            kit: req.params.kit,
            nsn: req.params.nsn
        }
    })
    res.status(200).send()
})

module.exports = router