const express = require('express')
const path = require('path')
const rootDir = require('../helpers/path')

const products = []

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  res.status(200).render('add-product')
})

router.post('/product', (req, res, next) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})



exports.routes = router
exports.products = products
