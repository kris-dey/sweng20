import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
let dates = ["Jan", "Feb", "Mar", "April", "May", "Jun"];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.label,
        datasets: [
          {
            label: "Healthy",
            data: this.props.hData,
            backgroundColor: ["rgba(0,255,0,0.6)"]
          },
          {
            label: "Benign",
            data: this.props.bData,

            backgroundColor: ["rgba(0,0,255,0.6)"]
          },
          {
            label: "Cancer",
            data: this.props.cData,
            backgroundColor: ["rgba(255,0,0,0.6)"]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          width={700}
          height={500}
          options={{
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            },
            tooltips: {
              mode: "nearest"
            },

            title: {
              display: true,
              text: "Cancer Growth",
              fontSize: 25,
              onClick: getCoords
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
    function getCoords() {
      alert("hi");
    }
  }
}

export default Chart;
