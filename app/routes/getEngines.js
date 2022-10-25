const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/engines', (req = null, res) => {

    const enginesFile = fs.readFileSync('./app/data/akkmirAkkumSelectionEngines.json', 'utf-8')
    res.send(enginesFile)

  })

}