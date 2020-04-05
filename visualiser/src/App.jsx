import React, { Component } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
import Box from './Box'
import BarChart from './components/barChart'
import LineGraph from './components/lineGraph'
import IntensityGraph from './intensityGraph'
import Chart from './Chart'
import VideoPlayer from "./components/VideoPlayer"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Percentages from './components/percentages'
import Comments from './components/Comments'


const style = {
    color: 'rgb(29, 31, 33)',
    backgroundColor: '#F8F8F8',
    marginTop: "S",
    marginRight: "S"
}

const outStyle = {
    marginTop: "S",
    marginRight: "S"
}

const Cont = ({ children }) => (
    <Grid padding="XL L" justify="center">
        {children}
    </Grid>
)

const btnStyle = {
    marginTop: '5px',
    marginLeft: '30px',
    padding: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: '1px solid #000000',
    borderRadius: '3px',
    backgroundColor: '#FFFFFF'
}

const lineOptions = {
    scales: {
        xAxes: [{
            ticks: {
                display: true
            }
        }]
    },
    responsive: false
}

const barOptions = {
    title: {
        display: true,
    },
    tooltips: {
        mode: 'index',
        intersect: false
    },
    responsive: true,
    scales: {
        xAxes: [{
            stacked: true,
        }],
        yAxes: [{
            stacked: true
        }]
    }
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphOneStatus: false,
            graphTwoStatus: true,
            graphThreeStatus: true,
            intensityData: this.props.intensityData,
            predictionData: this.props.predictionData,
            activeROIs: new Array(this.props.intensityData.length).fill(true)
        }
        // console.log(this.props.intensityData);
        // console.log(this.props.predictionData);
    }

    filterFunction = () => {
        this.setState({
            graphTwoStatus: !this.state.graphTwoStatus
        })
    }

    buildLinegraphValues = () => {
        let tmp = []
        for (let i = 0; i < this.state.intensityData[0].length; i++)
            tmp.push(new Object())

        this.state.intensityData.forEach((e, i) => {
            if (this.state.activeROIs[i]) {
                e.forEach((f, j) => {
                    // console.log({ j: j, f: f })
                    tmp[j][`intensity${i}`] = f
                })
            }
        })
        console.log({ tmp: tmp, intense: this.props.intensityData })
        return tmp
    }

    renderBoxes = [
        {
            rightArr: [199, 195, 196, 195, 193, 196, 198, 197, 199, 195, 192, 191, 193, 191, 198, 193, 195, 191, 196, 195, 197, 198, 195, 196, 195, 197, 197, 195, 192, 192, 197, 193, 190, 197, 191, 192, 198, 191, 196, 195, 192, 190, 199, 197, 198, 198, 191, 198, 190, 191, 194, 196, 196, 191, 192, 190, 192, 192, 191, 197, 190, 195, 193, 197, 194, 195, 198, 193, 195, 193, 198, 199, 192, 199, 191, 195, 197, 193, 190, 197, 190, 196, 196, 194, 199, 193, 191, 198, 191, 198, 194, 199, 198, 190, 196, 190, 190, 191, 194, 197, 194, 194, 198, 193, 191, 190, 191, 197, 194, 199, 194, 192, 199, 194, 190, 199, 191, 195, 196, 194, 192, 194, 193, 192, 195, 191, 190, 192, 197, 190, 198, 195, 191, 198, 196, 192, 190, 198, 194, 194, 199, 194, 197, 193, 190, 193, 194, 191, 192, 193, 192
            ],
            bottomArr: [492, 491, 499, 499, 495, 494, 491, 492, 494, 494, 495, 490, 492, 490, 494, 497, 492, 494, 499, 495, 492, 491, 491, 498, 497, 498, 495, 490, 498, 492, 490, 496, 495, 497, 492, 494, 494, 493, 491, 494, 494, 498, 496, 494, 493, 497, 497, 499, 498, 499, 495, 491, 497, 492, 490, 493, 495, 499, 492, 499, 490, 499, 496, 497, 492, 493, 499, 490, 496, 492, 496, 493, 494, 491, 499, 499, 495, 495, 493, 493, 490, 495, 493, 497, 498, 496, 490, 493, 497, 494, 497, 493, 494, 492, 490, 490, 495, 498, 495, 498, 495, 496, 499, 498, 499, 491, 493, 496, 495, 494, 497, 495, 497, 494, 492, 498, 492, 490, 490, 493, 495, 490, 496, 499, 498, 494, 497, 495, 490, 497, 495, 496, 490, 493, 491, 491, 498, 493, 490, 493, 490, 490, 497, 493, 492, 491, 499, 492, 493, 495, 499
            ],
            widthArr: [94, 91, 91, 95, 95, 97, 92, 99, 97, 99, 97, 91, 90, 93, 93, 94, 97, 94, 99, 95, 90, 93, 97, 92, 91, 96, 98, 90, 99, 90, 91, 99, 92, 94, 90, 92, 92, 91, 90, 96, 96, 94, 96, 90, 96, 96, 91, 96, 91, 94, 91, 91, 92, 94, 92, 95, 95, 99, 99, 93, 91, 95, 96, 96, 97, 96, 91, 94, 95, 98, 99, 95, 93, 97, 99, 95, 92, 96, 91, 96, 98, 92, 95, 95, 99, 95, 96, 93, 91, 93, 95, 93, 99, 91, 91, 91, 97, 90, 94, 91, 93, 91, 97, 91, 97, 92, 97, 98, 90, 97, 98, 91, 99, 96, 96, 95, 91, 91, 94, 94, 93, 99, 94, 95, 94, 97, 93, 92, 96, 96, 96, 94, 95, 90, 95, 90, 98, 94, 91, 98, 99, 91, 93, 95, 93, 97, 99, 95, 90, 91, 96
            ],
            heightArr: [94, 90, 90, 93, 94, 99, 94, 98, 96, 91, 96, 95, 98, 95, 96, 92, 97, 90, 93, 92, 91, 91, 97, 91, 97, 91, 95, 90, 95, 95, 99, 91, 97, 90, 95, 96, 91, 96, 92, 92, 98, 98, 99, 94, 97, 91, 97, 98, 90, 95, 92, 92, 97, 97, 94, 90, 92, 97, 90, 99, 95, 92, 91, 90, 93, 94, 90, 95, 98, 92, 99, 95, 93, 90, 94, 97, 96, 96, 93, 96, 93, 99, 93, 90, 99, 90, 91, 90, 97, 98, 96, 90, 93, 94, 91, 99, 90, 99, 96, 90, 90, 91, 96, 91, 97, 96, 96, 94, 94, 91, 97, 96, 93, 93, 90, 95, 92, 90, 93, 93, 92, 93, 94, 98, 98, 94, 95, 94, 92, 92, 97, 92, 95, 96, 99, 90, 98, 92, 99, 99, 98, 94, 93, 90, 91, 96, 92, 99, 92, 90, 99
            ],
            onClick: this.filterFunction.bind(this)
        },
        {
            rightArr: [290, 291, 296, 290, 290, 290, 297, 290, 291, 290, 296, 295, 293, 293, 295, 296, 299, 292, 299, 296, 299, 291, 292, 293, 293, 299, 299, 290, 296, 297, 299, 296, 298, 292, 293, 298, 297, 296, 299, 299, 290, 296, 298, 293, 291, 296, 291, 290, 297, 297, 292, 297, 297, 295, 297, 290, 294, 294, 291, 299, 291, 295, 292, 293, 299, 290, 298, 293, 293, 296, 296, 295, 294, 297, 290, 295, 297, 294, 293, 295, 298, 292, 293, 294, 290, 292, 297, 299, 297, 298, 291, 291, 294, 299, 290, 295, 298, 291, 291, 299, 298, 290, 295, 297, 292, 297, 291, 296, 296, 290, 291, 291, 290, 296, 294, 290, 296, 297, 295, 292, 295, 290, 293, 298, 292, 299, 296, 292, 298, 298, 299, 290, 294, 294, 293, 297, 298, 298, 294, 297, 296, 297, 296, 292, 294, 291, 294, 295, 293, 290, 292
            ],
            bottomArr: [448, 443, 442, 442, 446, 446, 442, 440, 446, 449, 447, 444, 448, 444, 442, 449, 445, 441, 442, 445, 443, 444, 441, 441, 442, 440, 447, 442, 445, 441, 440, 442, 444, 449, 442, 447, 441, 444, 449, 449, 440, 445, 445, 443, 444, 443, 442, 449, 444, 449, 447, 440, 447, 444, 449, 441, 446, 441, 447, 446, 445, 446, 440, 442, 444, 444, 447, 442, 447, 446, 440, 443, 446, 444, 442, 448, 442, 445, 445, 440, 440, 445, 441, 447, 447, 441, 445, 442, 443, 442, 445, 440, 447, 444, 445, 446, 447, 449, 443, 449, 446, 443, 442, 449, 449, 442, 443, 448, 444, 442, 441, 446, 447, 449, 442, 445, 441, 446, 448, 448, 447, 445, 441, 442, 442, 447, 445, 445, 443, 447, 441, 442, 446, 442, 443, 446, 443, 448, 448, 444, 444, 440, 445, 444, 443, 449, 440, 449, 445, 444, 443
            ],
            widthArr: [50, 59, 54, 55, 59, 50, 51, 56, 55, 55, 59, 57, 51, 50, 52, 52, 55, 53, 58, 54, 59, 50, 51, 54, 50, 55, 51, 56, 55, 53, 56, 54, 51, 58, 52, 51, 51, 50, 55, 53, 56, 50, 56, 57, 58, 51, 56, 53, 53, 59, 56, 58, 52, 53, 57, 52, 50, 53, 54, 51, 59, 56, 59, 52, 55, 54, 59, 52, 53, 51, 50, 59, 55, 53, 50, 58, 56, 52, 51, 59, 54, 58, 55, 54, 54, 50, 59, 52, 57, 50, 50, 53, 55, 53, 50, 59, 59, 55, 51, 51, 59, 59, 56, 51, 59, 51, 59, 55, 57, 52, 57, 57, 57, 59, 54, 57, 58, 50, 56, 51, 50, 58, 50, 55, 51, 55, 50, 58, 55, 51, 56, 57, 52, 50, 52, 57, 53, 55, 51, 56, 56, 56, 57, 57, 57, 55, 55, 52, 52, 55, 52
            ],
            heightArr: [36, 35, 35, 30, 33, 33, 30, 30, 36, 38, 31, 33, 32, 38, 36, 31, 36, 32, 31, 32, 32, 31, 36, 33, 39, 30, 38, 32, 36, 30, 38, 38, 37, 33, 37, 33, 35, 31, 35, 32, 33, 34, 34, 38, 31, 32, 33, 35, 33, 32, 32, 30, 37, 33, 33, 30, 34, 33, 31, 33, 32, 30, 36, 33, 30, 39, 39, 38, 30, 38, 30, 31, 34, 36, 31, 36, 34, 34, 32, 30, 33, 31, 36, 39, 36, 32, 30, 32, 31, 37, 34, 37, 36, 39, 36, 33, 38, 36, 39, 31, 37, 35, 33, 34, 36, 30, 39, 39, 38, 37, 31, 33, 39, 33, 35, 38, 37, 36, 37, 32, 35, 33, 36, 37, 34, 36, 31, 37, 34, 39, 37, 34, 37, 35, 32, 32, 30, 34, 33, 38, 30, 33, 39, 39, 31, 38, 32, 34, 31, 36, 32
            ],
            onClick: this.filterFunction.bind(this)
        }
    ]

    handleHomeClick(e) {
        e.preventDefault();
        alert("Home")
        this.setState({
            graphOneStatus: !this.state.graphOneStatus,
            graphTwoStatus: !this.state.graphTwoStatus,
            graphThreeStatus: true
        })
    }

    handleScreenShotClick(e) {
        e.preventDefault();
        alert("Screenshot")

    }

    printDocument() {

        let canvas = document.createElement('canvas')
        // canvas.setAttribute('id', 'canvas')
        // let canvas = document.getElementById('canvas') // declare a canvas element in your html
        let ctx = canvas.getContext('2d');
        let videos = document.querySelectorAll('video')
        let w, h
        for (let i = 0, len = videos.length; i < len; i++) {
            const v = videos[i]
            if (!v.src) continue // no video here
            try {
                w = v.videoWidth
                h = v.videoHeight
                canvas.width = w
                canvas.height = h
                ctx.fillRect(0, 0, w, h)
                ctx.drawImage(v, 0, 0, w, h)
                v.style.backgroundImage = `url(${canvas.toDataURL()})` // here is the magic
                v.style.backgroundSize = 'cover'
                ctx.clearRect(0, 0, w, h); // clean the canvas
            } catch (e) {
                continue
            }
        }


        const input = document.getElementById('divToPrint');
        html2canvas(input, { allowTaint: true })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF({ orientation: 'l' });

                pdf.addImage(imgData, 'JPEG', 5, 5, 144 * 2, 83 * 2, "Screenshot");
                // pdf.addHTML(canvas.childNodes)
                pdf.output('dataurlnewwindow');
                // pdf.save("download.pdf");
            })
            ;
    }


    render() {
        return (
            <div id="divToPrint">
                <GymnastProvider className="mt4" columns={48} >
                    <Grid style={outStyle}>
                        <Col size="16" style={style}>
                            {/* <button style={btnStyle} onClick={this.handleHomeClick}>Home</button> */}
                            <button style={btnStyle} onClick={() => {
                                // this.setState({
                                //     graphOneStatus: !this.state.graphOneStatus,
                                //     graphTwoStatus: !this.state.graphTwoStatus,
                                //     graphThreeStatus: true
                                // })
                            }}>Home</button>
                            <button style={btnStyle} onClick={this.printDocument}> ScreenShot</button>
                            {/* {this.state.graphOneStatus ? <LineGraph
                                intensityData={this.props.intensityData}
                                options={lineOptions}
                            /> : ""} */}
                            {this.state.graphTwoStatus ? <BarChart
                                predictionData={this.state.predictionData}
                                options={barOptions} /> : ""}

                            {/* {this.state.graphThreeStatus ? <IntensityGraph
                                intensityData={this.props.intensityData} /> : ""} */}
                            <Percentages
                                CArray={[93, 4, 37]}
                                BArray={[0, 13, 44]}
                                HArray={[7, 83, 19]}
                            />
                            <Comments
                                annotations=" *Enter comments here* "
                            />
                        </Col>
                        <Col size="1"></Col>
                        <Col size="31" style={style}>
                            <VideoPlayer renderBoxes={this.renderBoxes} />
                            <LineGraph
                                intensityData={this.buildLinegraphValues()}
                                options={lineOptions}
                            />
                        </Col>
                    </Grid>
                </GymnastProvider>
            </div>
        )
    }
}

export default App
