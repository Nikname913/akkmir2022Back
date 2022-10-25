const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/models', (req = null, res) => {

    const marksFile = fs.readFileSync('./app/data/akkmirAkkumSelectionModels.json', 'utf-8')
    res.send(marksFile)

  })

}