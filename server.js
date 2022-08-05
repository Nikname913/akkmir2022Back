const express       = require('express')
const bodyParser    = require('body-parser')
const xmlparser     = require('express-xml-bodyparser')
const app           = express()
const port          = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded())
app.use(xmlparser())

require('./app/routes')(app, {})

app.listen(port, () => console.log('listening on port ' + port))