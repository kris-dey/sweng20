import React, { Component } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
import BarChart from './components/barChart'
import LineGraph from './components/lineGraph'
import VideoPlayer from "./components/VideoPlayer"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Percentages from './components/percentages'
import Comments from './components/Comments'
import { Container, Row } from 'reactstrap';

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
            rawData: this.props.rawData,
            activeROIs: new Array(this.props.intensityData.length).fill(true),
            graphRefresh: false,
            renderBoxes: [],
        }


        //TODO: Add proper offsets!!
        let rightOffset = 0;
        let bottomOffset = 0;

        this.state.rawData.forEach((data, index) => {

            var box = {
                leftArr: [],
                topArr: [],
                widthArr: [],
                heightArr: [],
                onClick: this.filterFunction.bind(this, index),
                prediction: this.state.predictionData[index].prediction,
            }

            box.leftArr.push(data.initial_location[0][0] + rightOffset);
            box.topArr.push(data.initial_location[0][1] + bottomOffset);
            box.widthArr.push(data.initial_location[0][2]);
            box.heightArr.push(data.initial_location[0][3]);

            data.roi_location.forEach((location_data) => {
                box.leftArr.push(location_data[0] + rightOffset);
                box.topArr.push(location_data[1] + bottomOffset);
                box.widthArr.push(location_data[2]);
                box.heightArr.push(location_data[3]);
            },
                this.state.renderBoxes.push(box),
            )
        })
    }

    filterFunction = (graphIndex) => {

        let tmp = this.state.activeROIs
        tmp[graphIndex] = !tmp[graphIndex]
        this.setState({
            activeROIs: tmp,
            rnd: this.state.rnd + 1
        })
    }

    buildLinegraphValues = () => {
        return this.state.intensityData.filter((e, i) => this.state.activeROIs[i])
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

    resetSelection = () => {
        this.setState({
            activeROIs: new Array(this.state.intensityData.length).fill(true)
        })
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

    //returns array of arrays
    //ret['Cancer'] = array of cancer percentages
    //ret['Benign'] = array of benign percentages
    //ret['Healthy'] = array of healthy percentages
    buildPercentVals = () => {
        let tmp = this.state.predictionData
        let ret = { 'Healthy': [], 'Cancer': [], 'Benign': [] }
        tmp.forEach((e, i) => {
            if (this.state.activeROIs[i]) {
                ret['Cancer'].push(Math.round(e['class_probabilities']['Cancer'] * 100))
                ret['Benign'].push(Math.round(e['class_probabilities']['Benign'] * 100))
                ret['Healthy'].push(Math.round(e['class_probabilities']['Healthy'] * 100))
            }
        })
        return ret
    }

    //returns an array of numbers representing the current ROIs
    buildActiveList = () => {
        return this.state.activeROIs.map((e, i) => { return e ? i : -1 }).filter((e) => { return e >= 0 })
    }

    render() {
        return (
            <div id="divToPrint">
                <GymnastProvider className="mt4" columns={48} >
                    <Grid style={outStyle}>
                        <Col size="16" style={style}>
                            <Container>
                                <Col fluid="sm">
                                    <Row>
                                        <div style={{ maxHeight: "0px" }}>
                                            <button style={btnStyle} onClick={this.printDocument}><b>Screenshot</b></button>
                                            <button style={btnStyle} onClick={this.resetSelection.bind(this)}><b>Clear Selections</b></button>
                                        </div>
                                    </Row>

                                    {/* Spacing between the buttons and the bar graph.*/}
                                    <Row><div style={{ height: 20 }}></div></Row>

                                    <Row>
                                        <BarChart
                                            CArray={this.buildPercentVals().Cancer}
                                            BArray={this.buildPercentVals().Benign}
                                            HArray={this.buildPercentVals().Healthy}
                                            Labels={this.buildActiveList()}
                                            options={barOptions} />
                                    </Row>

                                    {/* Spacing between the bar graph and the percentage table.*/}
                                    <Row><div style={{ height: 320 }}></div></Row>
                                    <Row>
                                        <Percentages
                                            CArray={this.buildPercentVals().Cancer}
                                            BArray={this.buildPercentVals().Benign}
                                            HArray={this.buildPercentVals().Healthy}
                                            Labels={this.buildActiveList()}
                                        />
                                    </Row>
                                    <Row>
                                        <GymnastProvider className="mt4" columns={20} >
                                            <Grid style={outStyle}>
                                                <Col size="1"></Col>
                                                <Col size="19" style={style}>
                                                    <Comments annotations={this.props.videoComment} />
                                                </Col>
                                            </Grid>
                                        </GymnastProvider>
                                    </Row>
                                </Col>
                            </Container>
                        </Col>
                        <Col size="1"></Col>
                        <Col size="31" style={style}>
                            <VideoPlayer renderBoxes={this.state.renderBoxes} />

                            <div className="Container">
                                <b> <br />
                                    <font color="3b6ffd">Cancerous</font> <font color="CCCC00">&emsp;Benign</font> <font color="black">&emsp;Healthy</font>
                                </b>
                            </div>

                            {this.state.graphRefresh ? "" : < LineGraph
                                intensityData={this.buildLinegraphValues()}
                                Labels={this.buildActiveList()}
                                options={lineOptions}
                            />}
                        </Col>
                    </Grid>
                </GymnastProvider>
            </div>
        )
    }
}

export default App
