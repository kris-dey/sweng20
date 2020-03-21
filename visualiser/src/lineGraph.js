import React, { Component } from 'react';
import {Chart, Line, Bar} from 'react-chartjs-2';

class lineGraph extends Component{
    constructor(props){
      super(props)
      var originalLineDraw = Chart.controllers.line.prototype.draw;
      Chart.helpers.extend(Chart.controllers.line.prototype, {
        draw: function() {
          originalLineDraw.apply(this, arguments);
      
          var chart = this.chart;
          var ctx = chart.chart.ctx;
      
          var index = chart.config.data.lineAtIndex;
          if (index) {
            var xaxis = chart.scales['x-axis-0'];
            var yaxis = chart.scales['y-axis-0'];
      
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
            ctx.strokeStyle = '#ff0000';
            ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
            ctx.stroke();
            ctx.restore();
          }
        }
      });

      this.state = {          
          labels: this.props.params.labels,
          datasets:[
           {
             label: "Intensity Region 1",
             backgroundColor:"rgba(0, 255, 0, 0.75)",
             borderColor:"rgba(0, 255, 0, 0.75)",
             fill:false,
             data:this.props.params.data,
           },
           {
            label: "Intensity Region 2",
            backgroundColor:"rgba(255, 0, 0, 0.75)",
            borderColor:"rgba(255, 0, 0, 0.75)",
            fill:false,
            data:this.props.params.data,
          }
          ],
        //   lineAtIndex: (getRandomArbitrary(0,10)),
        }
    }
}