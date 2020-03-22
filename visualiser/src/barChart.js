import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import App from './App';

class BarChart extends Component {
  constructor(props) {
    super(props)
    //  function changeBarData(Healthy,Benign,Cancerous){
    //   this.state.barData.datasets[0].data = Healthy;
    //   this.state.barData.datasets[1].data = Benign;
    //   this.state.barData.datasets[2].data = Cancerous;
    // }
    this.state = {
      barData: this.props.barData,
      options: this.props.options


      //   barData:{
      //     labels: ['ROI 1', 'ROI 2', 'ROI 3'],
      // 	datasets: [{
      // 		label: 'Healthy',
      // 		backgroundColor: "rgba(0, 255, 0, 0.75)",
      // 		data: App.props.barHealthy,
      // 	}, {
      // 		label: 'Benign',
      // 		backgroundColor: "rgba(0, 0, 255, 0.75)",
      // 		data: App.state.barBenign,
      // 	}, {
      // 		label: 'Cancerous',
      // 		backgroundColor: "rgba(255, 0, 0, 0.75)",
      // 		data: App.state.barCancerous,
      // 	}]
      // },
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
    }
  }

  render() {

    return (
      <div style={{ position: 'relative', width: 600, height: 550 }}>
        <Bar
          options={this.state.options}
          data={this.state.barData}


        /> </div>


    )
  }

}
export default BarChart
