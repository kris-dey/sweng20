import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {
  constructor(props) {
    super(props)

    // let labels = this.props.HArray.map((e, i) => e = `ROI:${i}`)
    let labels = this.props.Labels.map(e => `ROI:${e}`)
    let health_data = this.props.HArray;
    let benign_data = this.props.BArray;
    let cancer_data = this.props.CArray;

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

  componentWillReceiveProps(nextProps) {
    let labels = nextProps.Labels.map(e => `ROI:${e}`)

    let health_data = nextProps.HArray;
    let benign_data = nextProps.BArray;
    let cancer_data = nextProps.CArray;

    this.setState({
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
      options: nextProps.options
    })
  }

  render() {

    return (
      <Bar
        options={this.state.options}
        data={this.state.barData}
        width={470}
        height={300}
      />

    )
  }

}
export default BarChart
