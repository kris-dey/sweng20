import React, { Component } from 'react';
import {Chart, Line} from 'react-chartjs-2';

 class LineGraph extends Component{
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
        lineData: this.props.lineData,
        options: this.props.options        
      
      }
    }
    
        render() {
            return(
              <div style= {{position: 'relative', width: 600, height:550}}>
                <h3>Line Graph</h3>
                <Line
                options={this.state.options}               
                data={this.state.lineData}

                
                />
                </div>
                //SAMPLE PROPS:
                  //   labels: [1,2,3,4,5],
        //   datasets:[
        //    {
        //      label: "Intensity Region 1",
        //      backgroundColor:"rgba(0, 255, 0, 0.75)",
        //      borderColor:"rgba(0, 255, 0, 0.75)",
        //      fill:false,
        //      data:[.2,.4,.3,.5,.1],
        //    },
        //    {
        //     label: "Intensity Region 2",
        //     backgroundColor:"rgba(255, 0, 0, 0.75)",
        //     borderColor:"rgba(255, 0, 0, 0.75)",
        //     fill:false,
        //     data:[0.1,.2,.3,.4,.8],
        //   }
        //   ],
        // //   lineAtIndex: (getRandomArbitrary(0,10)),
        // },
        // options:{
          
                  
        //     scales: {
        //       xAxes: [{
        //           ticks: {
        //               display: false
        //           }
        //       }]
        //   },
            
        //   }
        // }
            )}
    
}
export default LineGraph
