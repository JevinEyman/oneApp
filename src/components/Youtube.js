import React, {Component} from 'react';

const API = "AlzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"
const channelID = "69fCpIY2hO8&t=1262s"
const results = 1;

var finalURL = `${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${results}`


export default class Youtube extends Component {

  constructor (props){
    super(props);
    this.state = {
      resultyt: []
    };
  this.clicked= this.clicked.bind(this);
  }
    
    clicked(){
      fetch (finalURL)
      .then (response => response.json())
      .then ( responseJson => {
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoID);
        this.setState({resultyt});
      });
    }
  
    render() {
      //console.log(this.state.resultyt)
    
    return(
      <div>
          <button onClick = {this.clicked}>Get Productivity Music Video</button>
    
    { 
      this.state.resultyt.map((link, i)=>{

      var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
                
            return frame;
              
              })
              }
          {this.frame}
      
      </div>
    
      );
    }
}