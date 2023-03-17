// Database
const config = require('../config/config.json')
const { Document } = require('../models')

// Express
const express = require('express');
const router = express.Router();

router.get('/:id', async function (req, res, next) {
    let documents = await Document.findAll({
        where: {
            id: req.params.id
        }
    })
    if (!documents.length) {
        res.sendStatus(404)
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(documents[0]))
})


router.post('/add', async function (req, res, next) {
    let document = Document.build({...req.body})
    await document.save()
    res.setHeader('Content-Type', 'application/json')
    res.sendStatus(200)
})


module.exports = router