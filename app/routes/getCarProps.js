const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/carProps', (req = null, res) => {

    const enginesFile = fs.readFileSync('./app/data/akkmirAkkumSelectionCarProps.json', 'utf-8')
    res.send(enginesFile)

  })

}