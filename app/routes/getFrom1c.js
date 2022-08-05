const fs = require('fs'); module.exports = (app, db = null) => {

  db === null && null; app.post('/xmlhub', (req, res) => {

    const xmldata = req.body
    let consoleAnswer = ''
  
    const jsonFile = './app/data/akkmirCatalogLocal.json'
    const jsonFileRegions = './app/data/akkmirCatalogLocalRegions.json'
    const jsonFileShops = './app/data/akkmirCatalogLocalShops.json'
    const jsonFileCategories = './app/data/akkmirCatalogLocalCategories.json'
    const jsonFileDirections = './app/data/akkmirCatalogLocalDirections.json'
    const jsonFileProducts = './app/data/akkmirCatalogLocalProducts.json'
  
    const dataFileName = './app/data/dataFileName.json'
  
    const regions = xmldata.gpc.regions
    const shops = xmldata.gpc.warehouses
    const categories = xmldata.gpc.groups
    const directions = xmldata.gpc.directions
    const products = xmldata.gpc.products
    const files = xmldata.gpc.files
  
    fs.writeFile(jsonFile, JSON.stringify(xmldata), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileRegions, JSON.stringify(regions), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileShops, JSON.stringify(shops), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileCategories, JSON.stringify(categories), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileDirections, JSON.stringify(directions), error => {
      if (error) throw error
    })
  
    fs.writeFile(jsonFileProducts, JSON.stringify(products), error => {
      if (error) throw error
    })
  
    // =================================
    // =================================
  
    fs.writeFile(dataFileName, JSON.stringify(files), error => {
      if (error) throw error
    })
    
    for ( key in xmldata.gpc ) { consoleAnswer += `Название поля: ${key}\n` }
  
    false && res.send(`
      success. dataType: ${typeof(xmldata)}
      Список доступных полей:
      ${consoleAnswer}`)

    res.send(xmldata)
  
  })

}