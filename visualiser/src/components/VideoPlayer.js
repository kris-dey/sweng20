import React, { Component } from "react";
import videos from "./sampleVideo.mp4";
import classes from "./VideoPlayer.module.css";
import Button from "./button";


//TODO pass an array of locations and sizes to each 
let renderBoxes = [
  {
    rightArr: [],
    bottomArr: [],
    widthArr: [],
    heightArr: [],
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN ONE")
    }
  },
  {
    rightArr: [],
    bottomArr: [],
    widthArr: [],
    heightArr: [],
    onClick: () => {
      alert(document.getElementById("surgeryVideo").currentTime);
      // console.log(document.getElementById("surgeryVideo").currentTime)
      // alert("BTN TWO")
    }
  }
];

class ROI_locations {
  constructor(right, bottom, width, height) {
    this.right = right;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }
}

class VideoPlayer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      roi_locations: []
    }

    this.props.ROILocationData.filter((data, index) => {

        let roi_location_right = [];
        let roi_location_bottom = [];
        let roi_location_width = [];
        let roi_location_height = [];

        // roi_location_right.push(data.initial_location[0]);
        // roi_location_bottom.push(data.initial_location[1]);
        // roi_location_width.push(data.initial_location[2]);
        // roi_location_height.push(data.initial_location[3]);

            
        data.roi_location.filter((location_data, index) => {
            if(index<151){
              roi_location_right.push(location_data[0]);
              roi_location_bottom.push(location_data[1]);
              roi_location_width.push(location_data[2]);
              roi_location_height.push(location_data[3]);
            }
          }
        )

        this.state.roi_locations.push(new ROI_locations(roi_location_right, roi_location_bottom, roi_location_width, roi_location_height));
    
    })
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
        {
        
          this.state.roi_locations.map(e => {
             return <Button params={e} />;
          })
        
        }
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
