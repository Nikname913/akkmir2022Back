const getFrom1c = require('./getFrom1c')
const getProducts = require('./getProducts')
const getOrderProducts = require('./getOrderProducts')
const getStartPage = require('./getStartPage')

module.exports = (app, db) => {

  getFrom1c(app, db)
  getProducts(app, db)
  getOrderProducts(app, db)
  getStartPage(app, db)

}