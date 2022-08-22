const express       = require('express')
const bodyParser    = require('body-parser')
const xmlparser     = require('express-xml-bodyparser')
const cors          = require('cors')
const app           = express()
const port          = 80

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded())
app.use(xmlparser())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  next()
})

require('./app/routes')(app, {})

app.listen(port, () => console.log('listening on port ' + port))