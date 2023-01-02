const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.post('/xmlhubselection', (req, res) => {

    const xmldata = req.body
  
    const jsonFile = './app/data/akkmirAkkumSelection.json'
    const jsonFileMarks = './app/data/akkmirAkkumSelectionMarks.json'
    const jsonFileModels = './app/data/akkmirAkkumSelectionModels.json'
    const jsonFileGenerations = './app/data/akkmirAkkumSelectionGenerations.json'
    const jsonFileEngines = './app/data/akkmirAkkumSelectionEngines.json'
    const jsonFileCarProps = './app/data/akkmirAkkumSelectionCarProps.json'
    const jsonFileCars = './app/data/akkmirAkkumSelectionCars.json'
  
    const marks = xmldata.gpc.marks
    const models = xmldata.gpc.models
    const generations = xmldata.gpc.generations
    const engines = xmldata.gpc.engines
    const carProps = xmldata.gpc.cars_properties
    const cars = xmldata.gpc.cars
  
    fs.writeFile(jsonFile, JSON.stringify(xmldata), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileMarks, JSON.stringify(marks), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileModels, JSON.stringify(models), error => {
      if (error) throw error
    })

    fs.writeFile(jsonFileGenerations, JSON.stringify(generations), error => {
      if (error) throw error
    })

    fs.writeFile(jsonFileEngines, JSON.stringify(engines), error => {
      if (error) throw error
    })

    fs.writeFile(jsonFileCarProps, JSON.stringify(carProps), error => {
      if (error) throw error
    })

    fs.writeFile(jsonFileCars, JSON.stringify(cars), error => {
      if (error) throw error
    })

    res.send(xmldata)
  
  })

}