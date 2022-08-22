const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/', (req = null, res) => {

    res.send('сервер сайта akkmir работает корректно')

  })

}