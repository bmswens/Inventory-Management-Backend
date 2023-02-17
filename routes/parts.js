// Database
const config = require('../config/config.json')
const { Part } = require('../models')

// Express
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
    let parts = await Part.findAll()
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(parts))
})

router.get('/:bin', async function (req, res, next) {
    // should only ever be one, but return a list to keep standard
    // and allow for easy operations on length
    let parts = await Part.findAll({
        where: {
            bin: req.params.bin
        }
    })
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(parts))
})

router.post('/:bin', async function (req, res, next) {
    let parts = await Part.findAll({
        where: {
            bin: req.params.bin
        }
    })
    if (!parts.length) {
        res.sendStatus(404)
    }
    if (req.body.bin) {
        delete req.body.bin
    }
    Part.update(req.body, {
        where: {
            bin: req.params.bin
        }
    })
    res.setHeader('Content-Type', 'application/json')
    res.sendStatus(200)
})

module.exports = router