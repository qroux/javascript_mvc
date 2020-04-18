const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('./errors/404', { pageTitle: 'Page not found :^)' })
})

app.listen(3000)



// EXPRESS BASIC REQUEST HANDLING AND MIDDLEWARE

// // express will handle the middleware functions (req, res, next) {...}
// const app = express()

// // pass a middleware function with app.use()
// app.use((req, res, next) => {
//   console.log('first random action')
//   // call next() to pass to the next middleware function
//   next()
// })
// app.use((req, res, next) => {
//   console.log('second random action')
//   // res.send will handle the type automatically but can be override
//   res.send('<h1>Hello worlds</h1>')
// })

// const server = http.createServer(app)

// server.listen(3000)
