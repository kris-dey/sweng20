import React, { Component } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
import Box from './Box'
import IntensityGraph from './intensityGraph'
import Chart from './Chart'
import VideoPlayer from "./components/VideoPlayer"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

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
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            graphOneStatus: true,
            graphTwoStatus: false,
            graphThreeStatus: true
        }
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
        return (
            <div id="divToPrint">
                <GymnastProvider className="mt4" columns={48} >
                    <Grid style={outStyle}>
                        <Col size="16" style={style}>
                            {/* <button style={btnStyle} onClick={this.handleHomeClick}>Home</button> */}
                            <button style={btnStyle} onClick={() => {
                                this.setState({
                                    graphOneStatus: !this.state.graphOneStatus,
                                    graphTwoStatus: !this.state.graphTwoStatus,
                                    graphThreeStatus: true
                                })
                            }}>Home</button>
                            <button style={btnStyle} onClick={this.printDocument}> ScreenShot</button>
                            {this.state.graphOneStatus ? <Chart /> : ""}
                            {this.state.graphTwoStatus ? <Box /> : ""}
                            {this.state.graphThreeStatus ? <IntensityGraph /> : ""}
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
