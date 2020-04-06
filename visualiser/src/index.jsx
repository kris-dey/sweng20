import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Export from './ExportScreenshot'
import intensityData from "./data/intensity_results.json"
import predictionData from "./data/prediction_results.json"
import ROILocationData from "./data/with_roi_locations.json"

ReactDOM.render(<App intensityData={intensityData} predictionData={predictionData} ROILocationData={ROILocationData} />, document.getElementById('root'))
// ReactDOM.render(<Export />, document.getElementById('root'))
