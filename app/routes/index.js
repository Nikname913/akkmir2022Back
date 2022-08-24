const getFrom1c = require('./getFrom1c')
const getProducts = require('./getProducts')
const getOrderProducts = require('./getOrderProducts')
const getStartPage = require('./getStartPage')
const getCategories = require('./getCategories')
const getUsers = require('./getUsers')

module.exports = (app, db) => {

  getFrom1c(app, db)
  getProducts(app, db)
  getOrderProducts(app, db)
  getStartPage(app, db)
  getCategories(app, db)
  getUsers(app, db)

}