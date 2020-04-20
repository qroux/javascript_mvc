const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.status(200).render('add-product')
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/')
}

exports.getProductIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      products
    })
  })
}
