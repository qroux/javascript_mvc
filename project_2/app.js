const http = require('http')
const express = require('express')

// express will handle the middleware functions (req, res, next) {...}
const app = express()

// pass a middleware function with app.use()
app.use((req, res, next) => {
  console.log('first random action')
  // call next() to pass to the next middleware function
  next()
})
app.use((req, res, next) => {
  console.log('second random action')
  // res.send will handle the type automatically but can be override
  res.send('<h1>Hello worlds</h1>')
})

const server = http.createServer(app)

server.listen(3000)
