const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/generations', (req = null, res) => {

    const generationsFile = fs.readFileSync('./app/data/akkmirAkkumSelectionGenerations.json', 'utf-8')
    res.send(generationsFile)

  })

}