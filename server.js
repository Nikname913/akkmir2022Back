const express       = require('express')
const bodyParser    = require('body-parser')
const xmlparser     = require('express-xml-bodyparser')
const app           = express()
const port          = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.urlencoded());
app.use(xmlparser());

app.post('/xmlhub', (req, res) => {

  res.send(req.body)

})

app.listen(port, () => console.log('listening on port ' + port))