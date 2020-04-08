import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import Export from './ExportScreenshot'
import rawData from "./data/Output.json"
// import intensityDataJSON from "./data/intensity_results.json"
import predictionDataJSON from "./data/prediction_results.json"
import commentJSON from './data/json_from_group_annotation.json'

// const jsonifiedJSON = JSON.parse(dataJSON)
const intensityData = rawData.map((e) => e.norm_times_series.map(a => a[0]))
const videoComment = commentJSON.comment

// console.log(intensityData)

// const intensityData = intensityDataJSON
const predictionData = predictionDataJSON

ReactDOM.render(<App rawData={rawData} intensityData={intensityData} predictionData={predictionData} videoComment={videoComment} />, document.getElementById('root'))
// ReactDOM.render(<Export />, document.getElementById('root'))
