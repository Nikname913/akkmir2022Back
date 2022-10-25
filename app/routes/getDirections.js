const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/directions', (req = null, res) => {

    const dirsFile = fs.readFileSync('./app/data/akkmirCatalogLocalDirections.json', 'utf-8')
    res.send(dirsFile)

  })

}