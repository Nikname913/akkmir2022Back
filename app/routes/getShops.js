const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/shops', (req = null, res) => {

    const shopsFile = fs.readFileSync('./app/data/akkmirCatalogLocalShops.json', 'utf-8')
    res.send(shopsFile)

  })

}