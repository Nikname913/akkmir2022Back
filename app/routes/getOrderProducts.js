const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/order-products', (req = null, res) => {

    let result = ''
    const products = req.query.items.split('**')
    const productsFile = fs.readFileSync('./app/data/akkmirCatalogLocalProducts.json', 'utf-8')

    let productsObject = JSON.parse(productsFile)

    products.forEach(product => {

      productsObject[0].product.forEach(productItem => {

        if ( productItem.id[0] === product.split('::')[0] ) {
  
          result = result + 
            productItem.id[0] + '::' + 
            productItem.name + '::' + 
            product.split('::')[1] + '::' +
            productItem.pre_order_prices[0].region[0].price[0] + '**'
  
        }
  
      })

    })

    res.send(result)

  })

}