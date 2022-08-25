const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/categories', (req = null, res) => {

    const categoriesFile = fs.readFileSync('./app/data/akkmirCatalogLocalCategories.json', 'utf-8')
    res.send(categoriesFile)

  })

}