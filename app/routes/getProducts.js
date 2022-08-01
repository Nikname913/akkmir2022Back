const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.post('/products', (req = null, res) => {

    const productsFile = fs.readFileSync('./app/data/akkmirCatalogLocalProducts.json', 'utf-8')
    res.send(productsFile)

  })

}