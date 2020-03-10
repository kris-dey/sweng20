import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "April", "May", "Jun"],
        datasets: [
          {
            label: "Healthy",
            data: [
              { x: 0, y: 80 },
              { x: 10, y: 71 },
              { x: 20, y: 42 },
              { x: 30, y: 40 },
              { x: 40, y: 29 },
              { x: 50, y: 0 }
            ],
            backgroundColor: ["rgba(0,255,0,0.6)"]
          },
          {
            label: "Benign",
            data: [
              { x: 0, y: 85 },
              { x: 10, y: 83 },
              { x: 20, y: 70 },
              { x: 30, y: 55 },
              { x: 40, y: 42 },
              { x: 50, y: 35 }
            ],

            backgroundColor: ["rgba(0,0,255,0.6)"]
          },
          {
            label: "Cancer",
            data: [
              { x: 0, y: 100 },
              { x: 10, y: 100 },
              { x: 20, y: 100 },
              { x: 30, y: 100 },
              { x: 40, y: 100 },
              { x: 50, y: 100 }
            ],
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
          width={470}
          height={400}
          options={{
            title: {
              display: true,
              text: "Cancer Growth",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
