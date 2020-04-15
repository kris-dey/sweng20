const fs = require('fs')
const path = require('path')
let outpath = path.join(__dirname, 'out.json')
let input = require('./src/data/Output.json')

let leftBuffer = 250
let topBuffer = 100

input.forEach((a, i) => {
    input[i].roi_location = input[i].roi_location.map(e => { return [e[0] + leftBuffer, e[1] + topBuffer, e[2], e[3]] })
})


fs.writeFileSync(outpath, JSON.stringify(input))
