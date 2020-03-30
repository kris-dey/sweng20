import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';
export default class IntensityGraph extends Component {
    constructor(props) {
        super(props)

        //console.log(this.props.intensityData);

        let dataArr = [];

        this.props.intensityData.filter( (data, index) =>
            {
                if(index % 20 == 0){
                    dataArr.push(data.intensity0);
                }
            }
        )

        let dataArr2 = [];

        this.props.intensityData.filter( (data, index) =>
            {
                if(index % 20 == 0){
                    dataArr2.push(data.intensity1);
                }
            }
        )

        this.state = {
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                datasets: [
                    {
                        label: "Intensity of region 1",
                        backgroundColor: "rgba(0, 255, 0, 0.2)",
                        data: dataArr
                    }, 
                    {
                        label: "Intensity of region 2",
                        backgroundColor: "rgba(255, 255, 0, 0.2)",
                        data: dataArr2
                    }
                ]
            },
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