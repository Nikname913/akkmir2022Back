const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/cars', (req = null, res) => {

    const enginesFile = fs.readFileSync('./app/data/akkmirAkkumSelectionCars.json', 'utf-8')
    res.send(enginesFile)

  })

}