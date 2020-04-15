import React, { Component } from "react";
import classes from "./VideoPlayer.module.css";

class ButtonBoi extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      leftArr: this.props.params.leftArr,
      topArr: this.props.params.topArr,
      widthArr: this.props.params.widthArr,
      heightArr: this.props.params.heightArr,
      left: this.props.params.leftArr[0],
      top: this.props.params.topArr[0],
      width: this.props.params.widthArr[0],
      height: this.props.params.heightArr[0],
      onClick: this.props.params.onClick,
      vidName: this.props.params.vidName,
      buttonCSS: null,
      prediction: this.props.params.prediction,
      backgroundColor: "f0f0"
    };
    this.subTstFloat = {
      left: parseInt(this.state.left),
      top: parseInt(this.state.top),
      margin: 10,
      bottom: "auto",
      right: "auto",
      position: "fixed",
      paddingRight: parseInt(this.state.width),
      paddingBottom: parseInt(this.state.height),
      paddingLeft: "0px",
      paddingTop: "0px",
      prediction: this.props.params.prediction,
      backgroundColor: "f0f0",
    };

    if (this.state.prediction === "Healthy") {
      this.state.buttonCSS = classes.buttonHealthy;
    } else if (this.state.prediction === "Benign") {
      this.state.buttonCSS = classes.buttonBenign;
    } else if (this.state.prediction === "Cancer") {
      this.state.buttonCSS = classes.buttonCancer;
    }

    setInterval(() => {
      let time = Math.round(
        parseFloat(document.getElementById("surgeryVideo").currentTime) * 1
      );

      let loc = document.getElementById('surgeryVideo').getBoundingClientRect()
      // console.log(time)
      // console.log(this.state)
      this.setState({
        left: loc.x + this.state.leftArr[time],
        top: loc.y + this.state.topArr[time],
        width: this.state.widthArr[time],
        height: this.state.heightArr[time],
      });
    }, 100);
  }

  render() {
    let subTstFloat = {
      left: parseInt(this.state.left),
      top: parseInt(this.state.top),
      margin: 10,
      bottom: "auto",
      right: "auto",
      position: "absolute",
      paddingRight: parseInt(this.state.width),
      paddingBottom: parseInt(this.state.height),
      paddingLeft: "0px",
      paddingTop: "0px",
      backgroundColor: "f0f0",
      borderColor: "ffff",
      borderRadius: 10,
    };
    return (
      <div>
        <button
          className={this.state.buttonCSS}
          style={subTstFloat}
          onClick={this.state.onClick}
        />
      </div>
    );
  }
}
export default ButtonBoi;
