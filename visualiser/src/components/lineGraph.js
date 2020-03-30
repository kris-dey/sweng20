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

    let labels = [];

    let dataArr = [];

    this.props.intensityData.filter((data, index) => {
      if (index % 20 == 0) {
        dataArr.push(data.intensity0);
      }
    }

    )

    let dataArr2 = [];

    this.props.intensityData.filter((data, index) => {
      if (index % 20 == 0) {
        dataArr2.push(data.intensity1);
      }
    }

    )

    this.state = {
      lineData: {
        labels: labels,
        datasets: [
          {
            label: "Intensity of region 1",
            backgroundColor: "rgba(0, 255, 0, 0.2)",
            data: dataArr,
            fill: false
          },
          {
            label: "Intensity of region 2",
            backgroundColor: "rgba(255, 255, 0, 0.2)",
            data: dataArr2,
            fill: false
          }
        ]
      },
      options: this.props.options

    }
  }

  render() {
    return (
      <div style={{ position: 'relative', width: 800, height: 250 }}>
        <Line
          options={this.state.options}
          data={this.state.lineData}
          width='890'
          height='250'
        />
      </div>

    )
  }

}
export default LineGraph
