import React, { Component } from 'react';
//import {Chart, Line, Bar} from 'react-chartjs-2';

import BarChart from './barChart'
import LineGraph from './lineGraph'



//import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      barHealthy: [50,40,50],
      barBenign: [20,20,30,],
      barCancerous: [30,40,20]

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
        // options={{

        //   scales: {
        //     xAxes: [{
        //         ticks: {
        //             display: false
        //         }
        //     }]
        // },

        // }}
        // data={this.state.lineData}

        />

        <h3>Bar Chart</h3>
        
         <BarChart
         datasets ={{
           data:[50,40,50]
        
      }}
           
         
         
        // 
        // data={this.state.barData}

        />
      </div>

    )
  }
}
