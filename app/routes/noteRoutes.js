module.exports = function(app, db) {
  app.post('/example', (req, res, next) => {

    res.send('example plaintext');

  })
}