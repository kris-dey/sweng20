import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';


//import logo from './logo.svg';
import './App.css';
export default class App extends Component{
  constructor(props){
    super(props)
  var j = [1,2,3,4,5,6,7,8,9,10];
  var k =[]; var y = []; var z = [];
  var x = 1;
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  while(x<1000){
    k.push(x);x++;
    y.push(getRandomArbitrary(0.4,1))
    z.push(getRandomArbitrary(0,0.6))
  }
  
  for(var i =0;i < j.length;i++){
    j[i] = "Frame " + j[i];
  }
  j = k
  

    this.state = {
      lineData:{
        
        labels:j,
        datasets:[
         {
           label: "Intensity Region 1",
           backgroundColor:"rgba(0, 255, 0, 0.75)",
           borderColor:"rgba(0, 255, 0, 0.75)",
           fill:false,
           data:y//[0.8,0.5,0.9,1,0.7,0.2,0.6,0.3, 0, 0.4]
         },
         {
          label: "Intensity Region 2",
          backgroundColor:"rgba(255, 0, 0, 0.75)",
          borderColor:"rgba(255, 0, 0, 0.75)",
          fill:false,
          data:z
        }
        ]
      },
      barData:{
        labels: ['ROI 1', 'ROI 2', 'ROI 3'],
        	datasets: [{
        		label: 'Healthy',
        		backgroundColor: "rgba(0, 255, 0, 0.75)",
        		data: [25, 30, 20	]
        	}, {
        		label: 'Benign',
        		backgroundColor: "rgba(0, 0, 255, 0.75)",
        		data: [45,40,60]
        	}, {
        		label: 'Cancerous',
        		backgroundColor: "rgba(255, 0, 0, 0.75)",
        		data: [30,30,20]
        	}]
      }
    }

    
  }
  render() {
    return(
      <div style= {{position: 'relative', width: 900, height:550}}>
        <h3>Line Graph</h3>
        <Line
        options={{
          
          responsive: true,
          scales: {
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
          
        }}
        data={this.state.lineData}
        />

        <h3>Bar Graph</h3>
        <Bar
          options={{
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
          }}
          data={this.state.barData}

        />
      </div>

    )
  }
}