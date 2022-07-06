var express = require('express')
var router = express.Router()

router.get('/', function(request, result, next) {
  
  let products = [
    { id: '001', name: 'user001' },
    { id: '002', name: 'user002' },
    { id: '003', name: 'user003' },
    { id: '004', name: 'user004' },
    { id: '005', name: 'user005' }
  ]

  let answer = JSON.stringify(products)
  result.send(answer)

})

module.exports = router
