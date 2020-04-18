const express = require('express')
const path = require('path')
const rootDir = require('../helpers/path')

const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res, next) => {
  res.status(200).render('shop', { products: adminData.products})
})

module.exports = router
