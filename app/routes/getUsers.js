const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/getUsers', (req = null, res) => {

    const usersFile = fs.readFileSync('./app/data/dataFileUsers.json', 'utf-8')
    res.send(usersFile)

  })

}