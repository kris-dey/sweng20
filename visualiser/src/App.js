import React, { Component } from 'react';
//import {Chart, Line, Bar} from 'react-chartjs-2';
import BarChart from './barChart'
import LineGraph from './lineGraph'



//import logo from './logo.svg';
import './App.css';
export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  //   var originalLineDraw = Chart.controllers.line.prototype.draw;
  //   Chart.helpers.extend(Chart.controllers.line.prototype, {
  //     draw: function() {
  //       originalLineDraw.apply(this, arguments);
    
  //       var chart = this.chart;
  //       var ctx = chart.chart.ctx;
    
  //       var index = chart.config.data.lineAtIndex;
  //       if (index) {
  //         var xaxis = chart.scales['x-axis-0'];
  //         var yaxis = chart.scales['y-axis-0'];
    
  //         ctx.save();
  //         ctx.beginPath();
  //         ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
  //         ctx.strokeStyle = '#ff0000';
  //         ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
  //         ctx.stroke();
  //         ctx.restore();
  //       }
  //     }
  //   });
  
 
  //   this.state = {
  //     lineData:{
                
  //       labels:k,
  //       datasets:[
  //        {
  //          label: "Intensity Region 1",
  //          backgroundColor:"rgba(0, 255, 0, 0.75)",
  //          borderColor:"rgba(0, 255, 0, 0.75)",
  //          fill:false,
  //          data:y,
  //        },
  //        {
  //         label: "Intensity Region 2",
  //         backgroundColor:"rgba(255, 0, 0, 0.75)",
  //         borderColor:"rgba(255, 0, 0, 0.75)",
  //         fill:false,
  //         data:z
  //       }
  //       ],
  //       lineAtIndex: (getRandomArbitrary(0,10)),
  //     },
  //     barData:{
  //       labels: ['ROI 1', 'ROI 2', 'ROI 3'],
  //       	datasets: [{
  //       		label: 'Healthy',
  //       		backgroundColor: "rgba(0, 255, 0, 0.75)",
  //       		data: [25, 30, 20	]
  //       	}, {
  //       		label: 'Benign',
  //       		backgroundColor: "rgba(0, 0, 255, 0.75)",
  //       		data: [45,40,60]
  //       	}, {
  //       		label: 'Cancerous',
  //       		backgroundColor: "rgba(255, 0, 0, 0.75)",
  //       		data: [30,30,20]
  //       	}]
  //     }
  //   }

    
  }
  render() {
    var k =[]; var y = []; var z = [];
    var x = 1;
    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    while(x<21){
      k.push("Frame " + x);x++;
      y.push(getRandomArbitrary(0.4,1))
      z.push(getRandomArbitrary(0,0.6))
    }  
    
    return(
      <div style= {{position: 'relative', width: 600, height:550}}>
        <h3>Line Graph</h3>
        return <LineGraph params ={{labels: k, data: y,data: z}}
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
        return <BarChart params = {{data:[33,34,33], data:[25,50,25], data: [40,50,10]}}
          // options={{
          //   title: {
          //     display: true,
              
          //   },
          //   tooltips: {
          //     mode: 'index',
          //     intersect: false
          //   },
          //   responsive: true,
          //   scales: {
          //     xAxes: [{
          //       stacked: true,
          //     }],
          //     yAxes: [{
          //       stacked: true
          //     }]
          //   }
          // }}
          // data={this.state.barData}

        />
      </div>
      
    )
  }
}