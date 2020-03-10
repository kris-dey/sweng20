import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';


//import logo from './logo.svg';
import './App.css';
export default class App extends Component{
  constructor(props){
    super(props)
  var j =[1,2,3,4,5,6,7,8,9,10]    

    this.state = {
      data:{
        
        labels:j,
        datasets:[
         {
           label: "Intensity",
           backgroundColor:"rgba(0, 255, 0, 0.75)",
           borderColor:"rgba(0, 255, 0, 0.75)",
           fill:false,
           data:[0.8,0.5,0.9,1,0.7,0.2,0.6,0.3, 0, 0.4]
         }
        ]
      }
    }
  }
  render() {
    return(
      <div style= {{position: 'relative', width: 600, height:550}}>
        <h3>Line Graph</h3>
        <Line
        options={{
          responsive: true
          
        }}
        data={this.state.data}
        />
      </div>

    )
  }
}