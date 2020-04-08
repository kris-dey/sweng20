import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './App.css';
export default class IntensityGraph extends Component {
    constructor(props) {
        super(props)

        //console.log(this.props.intensityData);

        let labels = [];

    let dataArr = [];

    this.props.intensityData.filter( (data, index) =>
        {
            if(index % 20 == 0){
                dataArr.push(data.intensity0);
                labels.push(index/20)
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
                labels: labels,
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
            <div style={{ position: 'relative', width: 600, height: 300 }}>
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