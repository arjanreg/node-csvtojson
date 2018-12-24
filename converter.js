const fs= require('fs')
const path = require('path')
const csv = require('csvtojson')
var csvFilePath = ('customer-data.csv') 
//console.log(filePath)

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    //console.log(jsonObj)
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj,null,2), function (err, file) {
        if (err) console.log(err)
        console.log('Converted Successfully')
    })
})
