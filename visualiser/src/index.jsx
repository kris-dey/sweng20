import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Export from './ExportScreenshot'
import dataJSON from "./data/intensity_results.json"
// const jsonifiedJSON = JSON.parse(dataJSON)
const jsonifiedJSON = dataJSON

console.log(jsonifiedJSON);
ReactDOM.render(<App />, document.getElementById('root'))
// ReactDOM.render(<Export />, document.getElementById('root'))
