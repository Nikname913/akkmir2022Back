const express       = require('express')
const mongoClient   = require('mongodb').MongoClient
const bodyParser    = require('body-parser')
const app           = express()

const port = 8000
require('./app/routes')(app, {})

app.listen(port, () => { 

  console.log('listening on port ' + port)

})