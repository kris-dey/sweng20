import React from 'react'
import { Grid, Col, GymnastProvider } from 'gymnast'
// import Box from './Box'
// import Vid from './Vid'
import IntensityGraph from './intensityGraph'
import VideoPlayer from './VideoPlayer'
import Chart from './Chart'

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

function App() {
    return (
        <GymnastProvider columns={48}>
            <Grid style={outStyle}>
                <Col size="16" style={style}>
                    <button style={btnStyle}>Home</button>
                    <button style={btnStyle}> ScreenShot</button>
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

export default App
