import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Export from './ExportScreenshot'
import intensityDataJSON from "./data/intensity_results.json"
import predictionDataJSON from "./data/prediction_results.json"

// const jsonifiedJSON = JSON.parse(dataJSON)
const intensityData = intensityDataJSON
const predictionData = predictionDataJSON

ReactDOM.render(<App intensityData={intensityData} predictionData={predictionData} />, document.getElementById('root'))
// ReactDOM.render(<Export />, document.getElementById('root'))
