import React, { Component } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
import BarChart from './components/barChart'
import LineGraph from './components/lineGraph'
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

const btnStyle = {
    marginTop: '5px',
    marginLeft: '30px',
    padding: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    border: '1px solid #000000',
    borderRadius: '3px',
    backgroundColor: 'rgb(147, 219, 255)',
    maxHeight: '40px',
    height: '40px'
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
            graphRefresh: false
        }
        // console.log(this.props.intensityData);
        // console.log(this.props.predictionData);
        this.renderBoxes.forEach((box, index) => {

            // roi_location_right.push(data.initial_location[0]);
            // roi_location_bottom.push(data.initial_location[1]);
            // roi_location_width.push(data.initial_location[2]);
            // roi_location_height.push(data.initial_location[3]);

            this.state.rawData[index].roi_location.forEach((location_data) => {

                //Add proper offsets!!
                box.rightArr.push(location_data[0] + 130);
                box.bottomArr.push(location_data[1] + 400);
                box.widthArr.push(location_data[2]);
                box.heightArr.push(location_data[3]);

            }
            )
        })
    }

    filterFunction = (graphIndex) => {

        let tmp = this.state.activeROIs
        tmp[graphIndex] = !tmp[graphIndex]
        this.setState({
            activeROIs: tmp
        })
        this.forceUpdate()
    }

    buildLinegraphValues = () => {
        return this.state.intensityData.filter((e, i) => this.state.activeROIs[i])
    }

    renderBoxes = [
        {
            rightArr: [],
            bottomArr: [],
            widthArr: [],
            heightArr: [],
            onClick: this.filterFunction.bind(this, 0)
        },
        {
            rightArr: [],
            bottomArr: [],
            widthArr: [],
            heightArr: [],
            onClick: this.filterFunction.bind(this, 1)
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
                            <div style={{ maxHeight: "0px" }}>
                                <button style={btnStyle} onClick={this.resetSelection.bind(this)}><b>Home</b></button>
                                <button style={btnStyle} onClick={this.printDocument}><b>ScreenShot</b></button>
                            </div>
                            <BarChart
                                CArray={this.buildPercentVals().Cancer}
                                BArray={this.buildPercentVals().Benign}
                                HArray={this.buildPercentVals().Healthy}
                                Labels={this.buildActiveList()}
                                options={barOptions} />

                            <Percentages
                                CArray={this.buildPercentVals().Cancer}
                                BArray={this.buildPercentVals().Benign}
                                HArray={this.buildPercentVals().Healthy}
                                Labels={this.buildActiveList()}
                            />
                            <Comments
                                annotations=" *Enter comments here* "
                            />
                        </Col>
                        <Col size="1"></Col>
                        <Col size="31" style={style}>
                            <VideoPlayer renderBoxes={this.renderBoxes} />
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
