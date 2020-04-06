import React, { Component } from "react";
import classes from "./VideoPlayer.module.css";
import { Animate } from "react-move";
import _ from "lodash";
// import classes from "./VideoPlayer.module.css";
// import { Container, Button, Link } from 'react-floating-action-button'

// const btnFloatStyle = {
//   margin: 0,
//   top: 'auto',
//   right: 20,
//   bottom: 20,
//   left: 'auto',
//   position: 'fixed',
//   padding: "10px"
// }

// const tstFloat = {
//   position: 'fixed',
//   top: '1000px',
//   right: '800px'
// }

class ButtonBoi extends Component {
  state = {}
  constructor(props) {
    super(props);

    console.log(this.props.params)

    this.state = {
      
      rightArr: this.props.params.right,
      bottomArr: this.props.params.bottom,
      widthArr: this.props.params.width,
      heightArr: this.props.params.height,
      right: this.props.params.right[0],
      bottom: this.props.params.bottom[0],
      width: this.props.params.width[0],
      height: this.props.params.height[0],
      onClick: this.props.params.onClick,
      vidName: this.props.params.vidName
    };
    this.subTstFloat = {
      right: parseInt(this.state.right),
      bottom: parseInt(this.state.bottom),
      margin: 10,
      top: "auto",
      left: "auto",
      position: "fixed",
      paddingRight: parseInt(this.state.width),
      paddingBottom: parseInt(this.state.height),
      paddingLeft: "0px",
      paddingTop: "0px",
      backgroundColor: "#f0f0"
    };

    // console.log(this.state)
    // console.log(this.subTstFloat);

    setInterval(() => {
      let time = Math.round(parseFloat(document.getElementById("surgeryVideo").currentTime) * 1)
      // console.log(time)
      // console.log(this.state)
      this.setState({
        right: this.state.rightArr[time],
        bottom: this.state.bottomArr[time],
        width: this.state.widthArr[time],
        height: this.state.heightArr[time]
      })
    }, 100)


    // setInterval(this.UpdateLoc, 500)
  }
  // UpdateLoc = function () {
  //   let time = Math.round(parseFloat(document.getElementById("surgeryVideo").currentTime) * 10)
  //   console.log(time)
  //   console.log(this.state)
  //   this.setState({
  //     right: this.state.rightArr[time],
  //     bottom: this.state.bottomArr[time],
  //     width: this.state.widthArr[time],
  //     height: this.state.heightArr[time]
  //   })
  // }


  render() {
    let subTstFloat = {
      right: parseInt(this.state.right),
      bottom: parseInt(this.state.bottom),
      margin: 10,
      top: "auto",
      left: "auto",
      position: "absolute",
      paddingRight: parseInt(this.state.width),
      paddingBottom: parseInt(this.state.height),
      paddingLeft: "0px",
      paddingTop: "0px",
      backgroundColor: "#f0f0"
    };
    return (
      <div>
        <button
          className={classes.button}
          style={subTstFloat}
          onClick={this.state.onClick}
        ></button>
      </div>
    );
  }
}
export default ButtonBoi;

