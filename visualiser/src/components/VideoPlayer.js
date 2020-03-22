import React, { Component } from "react";
import videos from "./sampleVideo.mp4";
import classes from "./VideoPlayer.module.css";
import Button from "./button";

let renderBoxes = [
  {
    right: 500,
    bottom: 500,
    width: 100,
    height: 100,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN ONE")
    }
  },
  {
    right: 200,
    bottom: 620,
    width: 60,
    height: 40,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN TWO")
    }
  },
  {
    right: 280,
    bottom: 300,
    width: 180,
    height: 100,
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN THREE")
    }
  }
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
        {
          <Button
            params={{ right: 200, bottom: 600, width: 180, height: 100 }}
          />
        }
      </div>
    );
  }
}
export default VideoPlayer;
