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

    this.state = {
      lineData: this.props.lineData,
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
