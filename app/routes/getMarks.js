const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/marks', (req = null, res) => {

    const marksFile = fs.readFileSync('./app/data/akkmirAkkumSelectionMarks.json', 'utf-8')
    res.send(marksFile)

  })

}