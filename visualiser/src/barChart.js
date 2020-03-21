import React, { Component } from 'react';
import {Chart, Line, Bar} from 'react-chartjs-2';

class BarChart extends Component{
    constructor(props){
        super(props)
        this.state={
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

    render() {
        return(
            <div style= {{position: 'relative', width: 600, height:550}}>
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
  
          /> </div>
            
        
      )
    }

}
export default BarChart