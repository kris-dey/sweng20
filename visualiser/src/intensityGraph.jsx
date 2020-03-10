import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';
export default class IntensityGraph extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        label: "Intensity",
                        backgroundColor: "rgba(0, 255, 0, 0.75)",
                        data: [0.8, 0.5, 0.9, 1, 0.7, 0.2, 0.6, 0.3, 0, 0.4]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style={{ position: 'relative', width: 600 }}>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>

        )
    }
}
