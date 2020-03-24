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
  constructor(props) {
    super(props);
    this.state = {
      right: this.props.params.right,
      bottom: this.props.params.bottom,
      width: this.props.params.width,
      height: this.props.params.height,
      onClick: this.props.params.onClick
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
  }

  render() {
    return (
      <div>
        <button
          className={classes.button}
          style={this.subTstFloat}
          onClick={this.state.onClick}
        ></button>
      </div>
    );
  }
}
export default ButtonBoi;

/*export default class ButtonBoi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      color: "#808080",
      duration: 300
    };
  }

  toggleButtonPosition = () => {
    let left = 0;
    if (!this.state.left || this.state.left === 0) {
      left = Math.random();
    }
    let duration = Math.random();
    let color = _.sample(["red", "blue", "black", "green"]);
    this.setState({
      left,
      color,
      duration
    });
  };

  render() {
    let { left, color, duration } = this.state;
    return (
      <div>
        <Animate
          data={{
            left: left,
            color: color
          }}
          default={{
            left: 0,
            color: "#808080"
          }}
          duration={duration}
          easing="easeQuadIn"
        >
          {data => (
            <div
              style={{
                transform: `translate(${data.left}px, 0)`,
                background: data.color || "#808080",
                position: "absolute",
                width: 100,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                color: "white",
                cursor: "pointer"
              }}
              onClick={this.toggleButtonPosition}
            >
              Cancerous
            </div>
          )}
        </Animate>
      </div>
    );
  }
}*/
