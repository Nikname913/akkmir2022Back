const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.post('/newUser', (req, res) => {

    const { userNumber, userAuthKey, userName, userEmail, userAddresses = []} = req.body

  })

}