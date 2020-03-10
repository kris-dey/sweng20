import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';


//import logo from './logo.svg';
import './App.css';
export default class App extends Component{
  constructor(props){
    super(props)
  var j =[1,2,3,4,5,6,7,8,9,10]    

    this.state = {
      lineData:{
        
        labels:j,
        datasets:[
         {
           label: "Region 1",
           backgroundColor:"rgba(0, 255, 0, 0.75)",
           borderColor:"rgba(0, 255, 0, 0.75)",
           fill:false,
           data:[0.8,0.5,0.9,1,0.7,0.2,0.6,0.3, 0, 0.4]
         },
         {
          label: "Region 2",
          backgroundColor:"rgba(255, 0, 0, 0.75)",
          borderColor:"rgba(255, 0, 0, 0.75)",
          fill:false,
          data:[0.8,0.2,1,0.5,0.1,0.7,0.6,0.5, 0.6, 0.2]
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
      <div style= {{position: 'relative', width: 600, height:550}}>
        <h3>Line Graph</h3>
        <Line
        options={{
          responsive: true
          
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