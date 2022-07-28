const routes = require('./noteRoutes')
module.exports = function(app, db) {

  routes(app, db)

}