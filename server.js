const express = require('express')
const {db} = require('./writedb')
const todoroute = require('./routes/todotask')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', express.static(__dirname + '/public'))
app.use('/todo', todoroute)

db.sync()
  .then(() => {
    app.listen(1234)
  })
  .catch((err) => {
    console.error(err)
  })