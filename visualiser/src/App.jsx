import React, { Component, PropTypes } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
// import Box from './Box'
// import Vid from './Vid'
import IntensityGraph from './intensityGraph'
import VideoPlayer from './VideoPlayer'
import Chart from './Chart'
// import Export from './ExportScreenshot'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const style = {
    color: 'rgb(29, 31, 33)',
    backgroundColor: '#d9d9d9',
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
    marginLeft: '10px',
    padding: "10px",
    paddingLeft: "40px",
    paddingRight: "40px"
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.printDocument = () => {
            // const input = document.getElementById('divToPrint');
            const input = this.myRef.current
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'JPEG', 0, 0);
                    // pdf.output('dataurlnewwindow');
                    pdf.save("download.pdf");
                })
        }
    }


    handleHomeClick(e) {
        e.preventDefault();
        alert("Home")
    }

    handleScreenShotClick(e) {
        e.preventDefault();
        alert("Screenshot")
        const input = this.myRef.current
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
            })
        // this.printDocument()
    }

    render() {
        return (
            <GymnastProvider id="divToPrint" className="mt4" columns={48} ref={this.myRef}>
                <Grid style={outStyle}>
                    <Col size="16" style={style}>
                        <button style={btnStyle} onClick={this.handleHomeClick}>Home</button>
                        <button style={btnStyle} onClick={this.handleScreenShotClick}> ScreenShot</button>
                        <Chart />
                        <IntensityGraph />
                    </Col>
                    <Col size="1"></Col>
                    <Col size="31" style={style}>
                        <VideoPlayer />
                    </Col>
                </Grid>
            </GymnastProvider>
        )
    }
}
