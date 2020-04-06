import React, { Component } from "react";
import videos from "./sampleVideo.mp4";
import classes from "./VideoPlayer.module.css";
import Button from "./button";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      R1: false,
      R2: false,
      R3: false
    };
  }

  render() {

    let renderBoxes = [
      {
        //label: "HI",
        right: 250,
        bottom: 500,
        width: 100,
        height: 100,

        // borderColor: (222, 0, 0),

        onClick: () => {
          this.setState({
            R1: true,
            R2: false,

          });
          alert(
            // Math.round(document.getElementById("surgeryVideo").currentTime) +
            //" seconds"
            "Region: ROI 1"
          );

          // console.log(document.getElementById("surgeryVideo").currentTime)
          // alert("BTN ONE")
        },

      },

      {
        right: 200,
        bottom: 620,
        width: 60,
        height: 40,
        label: "hi",
        onClick: () => {
          this.setState({
            R1: false,
            R2: true,

          });
          alert(
            // Math.round(document.getElementById("surgeryVideo").currentTime) +
            //" seconds"
            "Region: ROI 2"
          ); // console.log(document.getElementById("surgeryVideo").currentTime)
          // alert("BTN TWO")
          //this.props.width = this.props.width / 2;
          //sayHi;
        }
      },

    ];
    let lastRegionChecked;
    if (this.state.R1) {
      lastRegionChecked = "Last Region Checked: ROI 1";
    } else if (this.state.R2) {
      lastRegionChecked = "Last Region Checked: ROI 2";
    } else {
      lastRegionChecked = "Last Region Checked: None";
    }

    let hsafi = "hi";
    return (
      <div className={classes.video}>

        <video



          id="surgeryVideo"
          style={{ paddingTop: 50 }}
          width="900"
          height="500"
          src={videos}
          frameBorder="0"
          controls
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen


        ></video>

        <button
          onClick={() => {
            alert(lastRegionChecked);
          }}
        >
          Last Region Checked
        </button>

        {renderBoxes.map(e => {
          return <Button params={e} />;
        })}

        {/* <Button params={{ right: 200, bottom: 600, width: 180, height: 100 }} /> */}
      </div>
    );
  }
}

export default VideoPlayer;
