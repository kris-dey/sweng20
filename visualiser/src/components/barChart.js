import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      barData: this.props.barData,
      options: this.props.options


      ,
      
    }
  }

  render() {

    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>
        <Bar
          options={this.state.options}
          data={this.state.barData}
        // SAMPLE PARAMS: DATA
        //   barData:{
      //     labels: ['ROI 1', 'ROI 2', 'ROI 3'],
      // 	datasets: [{
      // 		label: 'Healthy',
      // 		backgroundColor: "rgba(0, 255, 0, 0.75)",
      // 		data: [x,y,z],
      // 	}, {
      // 		label: 'Benign',
      // 		backgroundColor: "rgba(0, 0, 255, 0.75)",
      // 		data: [x,y,z],
      // 	}, {
      // 		label: 'Cancerous',
      // 		backgroundColor: "rgba(255, 0, 0, 0.75)",
      // 		data: [x,y,z],
      // 	}]
      // }


      // OPTIONS: MUST STAY FIXED:
      // options:{
      //     title: {
      //       display: true,

      //     },
      //     tooltips: {
      //       mode: 'index',
      //       intersect: false
      //     },
      //     responsive: true,
      //     scales: {
      //       xAxes: [{
      //         stacked: true,
      //       }],
      //       yAxes: [{
      //         stacked: true
      //       }]
      //     }
      //   }

        /> </div>


    )
  }

}
export default BarChart
