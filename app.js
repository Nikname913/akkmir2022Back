var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require("cors")
var fs = require("fs")

var indexRouter = require('./routes/index')
var catalogRouter = require('./routes/catalog')
var usersRouter = require('./routes/users')

var app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(
  path.join(__dirname, 'public'), 
  { extensions: ['html', 'xml'] }
))

const catalogFilePath = './public/akkmirSimple.xml'

app.use('/', indexRouter)
app.use('/catalog', catalogRouter)
app.use('/users', usersRouter)

// --------------------------
// позднее вынести в отдельные файлы
// --------------------------

app.use('/getxml', function (request, result) {
  
  result.sendFile(path.join(__dirname, './public/akkmirSimple.xml'));

})

app.use('/xmlRegions', function (request, result) {
  
  const catalog = fs.readFileSync(catalogFilePath, 'utf-8')
  result.send(catalog)

})

// --------------------------
// позднее вынести в отдельные файлы - конец
// --------------------------

app.use(function(request, result, next) {
  
  next(createError(404))

})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
