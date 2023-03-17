// Database
const config = require('../config/config.json')
const { Op } = require("sequelize");
const { Manifest } = require('../models')
const { Document } = require('../models')

// Express
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
    let manifests = await Manifest.findAll()
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(manifests))
})

router.get('/:id', async function (req, res, next) {
    let manifests = await Manifest.findAll({
        where: {
            id: req.params.id
        }
    })
    if (!manifests.length) {
        res.sendStatus(404)
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(manifests[0]))
})

router.post('/:id/addDocument', async function (req, res, next) {
    let manifests = await Manifest.findAll({
        where: {
            id: req.params.id
        }
    })
    if (!manifests.length) {
        res.sendStatus(404)
    }
    let docs = manifests[0].docs
    let documentId = req.body.id
    let newDocs = [...docs, documentId]
    Manifest.update({docs: newDocs}, {
        where: {
            id: req.params.id
        }
    })
    res.setHeader('Content-Type', 'application/json')
    res.sendStatus(200)
})


router.post('/:id', async function (req, res, next) {
    let manifest = Manifest.build({id: req.params.id, docs: [], complete: false})
    await manifest.save()
    res.setHeader('Content-Type', 'application/json')
    res.sendStatus(200)
})

router.post('/:id/completed', async function (req, res, next) {
    await Manifest.update({completed: true}, {
        where: {
            id: req.params.id
        }
    })
    res.setHeader('Content-Type', 'application/json')
    res.sendStatus(200)
})

router.get("/:id/docs", async function (req, res, next) {
    let manifests = await Manifest.findAll({
        where: {
            id: req.params.id
        }
    })
    if (!manifests.length) {
        res.sendStatus(404)
    }
    let docs = manifests[0].docs
    let documents = await Document.findAll({
        where: {
            id: {
                [Op.or]: docs
            }
        }
    })
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(documents))
})

module.exports = router