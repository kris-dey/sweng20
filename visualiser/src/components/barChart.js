import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {
  constructor(props) {
    super(props)

    let labels = []

    let health_data = [];
    let benign_data = [];
    let cancer_data = [];

    this.props.predictionData.filter( (data, index) =>
      {

        let total = (data.class_probabilities.Healthy + data.class_probabilities.Benign + data.class_probabilities.Cancer)/100

        health_data.push(data.class_probabilities.Healthy/total);
        benign_data.push(data.class_probabilities.Benign/total);
        cancer_data.push(data.class_probabilities.Cancer/total);

        var label = "ROI " + index.toString() + ": " + data.prediction;
        labels.push(label);
      }
    )

    console.log(health_data);
    console.log(benign_data);
    console.log(cancer_data);


    this.state = {
      barData: {
        labels: labels,
        datasets: [{
            label: 'Healthy',
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: health_data,
        }, {
            label: 'Benign',
            backgroundColor: "rgba(0, 0, 255, 0.75)",
            data: benign_data,
        }, {
            label: 'Cancerous',
            backgroundColor: "rgba(255, 0, 0, 0.75)",
            data: cancer_data,
        }]
    },
      options: this.props.options
    }
  }

  render() {

    return (
      <div style={{ position: 'relative', width: 470}}>
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
