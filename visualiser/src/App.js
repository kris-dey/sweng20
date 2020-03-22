import React, { Component } from 'react';
//import {Chart, Line, Bar} from 'react-chartjs-2';

import BarChart from './barChart'
import LineGraph from './lineGraph'



//import logo from './logo.svg';
import './App.css';


const barData = {
  labels: ['ROI 1', 'ROI 2', 'ROI 3'],
  datasets: [{
    label: 'Healthy',
    backgroundColor: "rgba(0, 255, 0, 0.75)",
    data: [50, 40, 50],
  }, {
    label: 'Benign',
    backgroundColor: "rgba(0, 0, 255, 0.75)",
    data: [20, 20, 30],
  }, {
    label: 'Cancerous',
    backgroundColor: "rgba(255, 0, 0, 0.75)",
    data: [30, 40, 20],
  }]
}

const barOptions = {
  title: {
    display: true,

  },
  tooltips: {
    mode: 'index',
    intersect: false
  },
  responsive: true,
  scales: {
    xAxes: [{
      stacked: true,
    }],
    yAxes: [{
      stacked: true
    }]
  }
}


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      barHealthy: [50, 40, 50],
      barBenign: [20, 20, 30],
      barCancerous: [30, 40, 20]
      // tried to pass these to barChart but that throws an 'undefined error'.

    }


  }
  render() {
    var k = []; var y = []; var z = [];
    var x = 1;
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    while (x < 21) {
      k.push("Frame " + x); x++;
      y.push(getRandomArbitrary(0.4, 1))
      z.push(getRandomArbitrary(0, 0.6))
    }


    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>

        <LineGraph
        //this now draws but has no labels nor data despite it being hard coded in line graph


        />

        <h3>Bar Chart</h3>

        <BarChart

          barData={barData}
          options={barOptions}


        // 
        // data={this.state.barData}

        />
      </div>

    )
  }
}
