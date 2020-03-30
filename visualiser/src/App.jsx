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

/*var ab = true;
var cd = false;*/

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




const barData = {
    labels: ['ROI 1', 'ROI 2'],
    datasets: [{
        label: 'Healthy',
        backgroundColor: "rgba(0, 255, 0, 0.75)",
        data: [50, 40],
    }, {
        label: 'Benign',
        backgroundColor: "rgba(0, 0, 255, 0.75)",
        data: [20, 20],
    }, {
        label: 'Cancerous',
        backgroundColor: "rgba(255, 0, 0, 0.75)",
        data: [30, 40],
    }]
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
            graphOneStatus: true,
            graphTwoStatus: false,
            graphThreeStatus: true,
            ab: true,
            cd: true,
            changes: false
        }
        console.log(this.props.intensityData);
        console.log(this.props.predictionData);
    }




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
        var k = []; var y = []; var z = [];
        var x = 1;
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }

        while (x < 21) {
            k.push("Frame " + x); x++;
            if (this.state.ab) {
                y.push(getRandomArbitrary(0.4, 1))

            }
            else if (!this.state.ab) {
                y.push(null)
            }
            if (this.state.cd) {
                z.push(getRandomArbitrary(0, 0.6))
            }
            else if (!this.state.cd) {
                z.push(null)
            }
        }

        let lineData = {

            labels: k,
            datasets: [
                {
                    label: "Intensity Region 1",
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    borderColor: "rgba(0, 255, 0, 0.75)",
                    fill: false,
                    data: y,
                },

                {

                    label: "Intensity Region 2",
                    backgroundColor: "rgba(255, 0, 0, 0.75)",
                    borderColor: "rgba(255, 0, 0, 0.75)",
                    fill: false,
                    data: z,
                }



            ],
        };
        //   lineAtIndex: (getRandomArbitrary(0,10)),

        let lineOptions = {
            scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },

        };

        return (
            <div id="divToPrint" >
                <GymnastProvider className="mt4" columns={48} >
                    <Grid style={outStyle}>
                        <Col size="16" style={style}>
                            {/* <button style={btnStyle} onClick={this.handleHomeClick}>Home</button> */}
                            <button style={btnStyle} onClick={() => {
                                this.setState({
                                    graphOneStatus: !this.state.graphOneStatus,
                                    graphTwoStatus: !this.state.graphTwoStatus,
                                    graphThreeStatus: true,

                                })
                            }}>Home</button>
                            <button style={btnStyle} onClick={this.printDocument}> ScreenShot</button>
                            {this.state.graphOneStatus ? <LineGraph
                                lineData={lineData}
                                options={lineOptions}
                            /> : ""}

                            {this.state.graphTwoStatus ? <BarChart
                                barData={barData}
                                options={barOptions} /> : ""}
                            {this.state.graphThreeStatus ? <IntensityGraph intensityData={this.props.intensityData} /> : ""}
                            <button style={btnStyle} onClick={() => {
                                this.setState({
                                    ab: !this.state.ab,
                                    changes: true,

                                });

                            }}>ROI 1</button>
                            <button style={btnStyle} onClick={() => {
                                this.setState({
                                    cd: !this.state.cd,
                                    changes: true,


                                });

                            }}>ROI 2</button>

                        </Col>
                        <Col size="1"></Col>
                        <Col size="31" style={style}>
                            <VideoPlayer />
                        </Col>
                    </Grid>
                </GymnastProvider>
            </div>
        )
    }
}

export default App
