import React, { Component } from "react";
import videos from "./sampleVideo.mp4";
import classes from "./VideoPlayer.module.css";
import Button from "./button";



class VideoPlayer extends Component {

  state = {
    //TODO pass an array of locations and sizes to each 
    renderBoxes: this.props.renderBoxes
  }



  render() {
    return (
      <div className={classes.video}>
        <video
          id="surgeryVideo"
          style={{ paddingTop: 5 }}
          width="900"
          height="500"
          src={videos}
          frameBorder="0"
          controls
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></video>
        {this.state.renderBoxes.map(e => {
          return <Button params={e} />;
        })}
        {
          // <Button
          //   params={{ right: 200, bottom: 600, width: 180, height: 100 }}
          // />
        }
      </div>
    );
  }
}
export default VideoPlayer;
