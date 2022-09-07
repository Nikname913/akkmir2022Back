const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.get('/newUserGet', (req, res) => {

    const usersJson = './app/data/dataFileUsers.json'
    const { number, auth, name, email, car } = req.query

    // { "number": "89068085023",
    //   "auth": "sms",
    //   "name": "Николай",
    //   "email": "nik.shipov@gmail.com",
    //   "car": "lada vesta" }

    let users = fs.readFileSync('./app/data/dataFileUsers.json', 'utf-8')
    let userObject = JSON.parse(users)
    const userData = {
      number,
      auth,
      name,
      email,
      car
    }

    userObject.data.push(userData)
    fs.writeFile(usersJson, JSON.stringify(userObject), error => {

      if (error) throw error
    
    })

    res.send(JSON.stringify(userObject))

  })

}