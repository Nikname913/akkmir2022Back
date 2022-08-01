const getFrom1c = require('./getFrom1c')
const getProducts = require('./getProducts')

module.exports = (app, db) => {

  getFrom1c(app, db)
  getProducts(app, db)

}