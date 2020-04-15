import React, { Component } from "react";
import classes from "./VideoPlayer.module.css";

class ButtonBoi extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      rightArr: this.props.params.rightArr,
      bottomArr: this.props.params.bottomArr,
      widthArr: this.props.params.widthArr,
      heightArr: this.props.params.heightArr,
      right: this.props.params.rightArr[0],
      bottom: this.props.params.bottomArr[0],
      width: this.props.params.widthArr[0],
      height: this.props.params.heightArr[0],
      onClick: this.props.params.onClick,
      vidName: this.props.params.vidName,
      buttonCSS: null,
      prediction: this.props.params.prediction,
      backgroundColor: "f0f0",
    };
    
    if(this.state.prediction === "Healthy"){
      this.state.buttonCSS = classes.buttonHealthy;
    } else if(this.state.prediction === "Benign"){
      this.state.buttonCSS = classes.buttonBenign;
    } else if(this.state.prediction === "Cancer"){
      this.state.buttonCSS = classes.buttonCancer;
    }
    
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
      backgroundColor: "f0f0",
    };

    // console.log(this.state)
    // console.log(this.subTstFloat);

    setInterval(() => {
      let time = Math.round(
        parseFloat(document.getElementById("surgeryVideo").currentTime) * 1
      );
      // console.log(time)
      // console.log(this.state)
      this.setState({
        right: this.state.rightArr[time],
        bottom: this.state.bottomArr[time],
        width: this.state.widthArr[time],
        height: this.state.heightArr[time],
      });
    }, 100);
  }

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
      backgroundColor: "f0f0",
      borderColor:"ffff",
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
