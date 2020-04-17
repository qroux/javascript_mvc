const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './', 'views', 'errors','404.html'))
})

const server = http.createServer(app)
server.listen(3000)



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
