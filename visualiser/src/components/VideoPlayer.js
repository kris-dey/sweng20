import React, { Component } from "react";
import videos from "./sampleVideo.mp4";
import classes from "./VideoPlayer.module.css";
import Button from "./button";

const locationsRight = [200, 210, 220, 230, 240];
const locationsBottom = [500, 510, 520, 530, 540];
let renderBoxes = [
  {
    right: locationsRight,
    bottom: 90,
    width: 100,
    height: 100,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN ONE")
    }
  }
  /*{
    right: locationsRight,
    bottom: locationsBottom,
    width: 60,
    height: 40,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN TWO")
    }
  },
  {
    right: locationsRight,
    bottom: locationsBottom,
    width: 180,
    height: 100,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN THREE")
    }
  }*/
];

class VideoPlayer extends Component {
  render() {
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
        {renderBoxes.map(e => {
          return <Button params={e} />;
        })}
      </div>
    );
  }
}
export default VideoPlayer;
