module.exports = app => {
  app.post('/post-example', (req, res) => {

    console.log('================================')
    console.log('маршрут для примера работы апи')
    console.log('================================')

    res.send(req.body)

  })}

module.exports = app => {
  app.get('/catalog', (req, res) => {

    res.send('<h2>тут короче будет каталог</h2>');

  })
}

module.exports = app => {
  app.post('/xmlhub', (req, res) => {

    res.send(req.body)

  })
}
  