import React, { Component } from "react";
import classes from "./VideoPlayer.module.css";
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
  constructor(props) {
    super(props);
    this.state = {
      right: this.props.params.right,
      bottom: this.props.params.bottom,
      width: this.props.params.width,
      height: this.props.params.height,
      onClick: this.props.params.onClick,
      //onmouseover: this.props.params.onmouseover
    };
    this.subTstFloat = {
      right: parseInt(this.state.right),
      bottom: parseInt(this.state.bottom),
      margin: 20,
      top: "auto",
      left: "auto",
      position: "fixed",
      paddingRight: parseInt(this.state.width),
      paddingBottom: parseInt(this.state.height),
      paddingLeft: "0px",
      paddingTop: "0px",
      backgroundColor: "#f0f0" /*"(222,0,0)"*/
    };
    // console.log(this.state)
    // console.log(this.subTstFloat);
  }

  render() {
    return (
      <div>
        <button
          className={classes.button}
          style={this.subTstFloat}
          onClick={this.state.onClick}
        //onmouseover={this.state.onmouseover}
        ></button>
        {/* <button style={btnFloatStyle}>tstBoi</button> */}
      </div>
    );
  }
}
export default ButtonBoi;
