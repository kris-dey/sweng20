import React, { Component } from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
import Box from './Box'
// import Vid from './Vid'
import IntensityGraph from './intensityGraph'
import VideoPlayer from './VideoPlayer'
import Chart from './Chart'
import Export from './ExportScreenshot'

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


    render() {
        return (
            <GymnastProvider id="divToPrint" className="mt4" columns={48} >
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
                        <button style={btnStyle} onClick={this.handleScreenShotClick}> ScreenShot</button>
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

        )
    }
}

export default App
