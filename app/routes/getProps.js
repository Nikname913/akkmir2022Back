const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/props', (req = null, res) => {

    const propsFile = fs.readFileSync('./app/data/akkmirCatalogLocalProps.json', 'utf-8')
    res.send(propsFile)

  })

}