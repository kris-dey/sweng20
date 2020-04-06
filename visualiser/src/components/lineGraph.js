import React, { Component } from 'react';
import { Chart, Line } from 'react-chartjs-2';

class LineGraph extends Component {
  constructor(props) {
    super(props)
    var originalLineDraw = Chart.controllers.line.prototype.draw;
    Chart.helpers.extend(Chart.controllers.line.prototype, {
      draw: function () {
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


    let labels = [...new Array(this.props.intensityData[0].length).keys()]
    // let dataArr = this.props.intensityData[0];
    // let dataArr2 = this.props.intensityData[1];

    let dSet = this.props.intensityData.map((e, i) => {
      return {
        label: `ROI  ${this.props.Labels[i]}`,
        backgroundColor: `rgba(${(labels[i]) * 40}, ${(labels[i] + 1) * 30}, ${(labels[i] + 1) * 100}, 0.4)`,
        borderColor: `rgba(${(labels[i]) * 40}, ${(labels[i] + 1) * 30}, ${(labels[i] + 1) * 100}, 0.4)`,
        data: e,
        fill: false
      }
    })

    // this.props.intensityData[0].forEach((data, index) => {
    //   if (index % 1 === 0) {
    //     // dataArr.push(data.intensity0);
    //     labels.push(index / 1);
    //     // dataArr2.push(data.intensity1);
    //   }
    // })

    this.state = {
      lineData: {
        labels: labels,
        datasets: dSet
      },
      options: this.props.options
    }
  }

  generateDatasetArr = (raw, labels) => {
    return raw.map((e, i) => {
      return {
        label: `ROI  ${labels[i]}`,
        backgroundColor: `rgba(${(labels[i]) * 40}, ${(labels[i] + 1) * 30}, ${(labels[i] + 1) * 100}, 0.4)`,
        borderColor: `rgba(${(labels[i]) * 40}, ${(labels[i] + 1) * 30}, ${(labels[i] + 1) * 100}, 0.4)`,
        data: e,
        fill: false
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    let labels = this.state.lineData.labels


    this.setState({
      lineData: {
        labels: labels,
        datasets: this.generateDatasetArr(nextProps.intensityData, nextProps.Labels)
      },
      options: this.props.options
    })
  }

  render() {
    return (
      <div style={{ position: 'relative', width: 800, height: 250 }}>
        <Line
          options={this.props.options}
          data={this.state.lineData}
          width='890'
          height='250'
        />
      </div>

    )
  }

}
export default LineGraph
