import React, {Component} from 'react';

const API = "AIzaSyBHeRj0l7ALC_Y9wixnnuHpZEVKYD70vVU"
const channelID = "69fCpIY2hO8&t=1262s"
const results = 10;

var finalURL = `${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${results}`


class Youtube extends Component {

  constructor (props){
    super(props);
    this.state = {
      resultsyt: []
    };
  this.clicked= this.clicked.bind(this);
  }
    
    clicked(){
      fetch (finalURL)
      .then ((response) => response.json())
      .then (( responseJson) => {
        const resultsyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoID);
        this.setState({resultsyt});
      })
      .catch((error)=>{
        console.error(error);
      });
    }
  
    render(){
      console.log(this.state.resultsyt);
    
      
  return(
      /*<div>
          <button onClick = {this.clicked}>Get Productivity Music Video</button>
    
     this.state.resultsyt.map((link, i)={

      var frame= <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                
      }      
      return frame;
              
              )
              
          {this.frame}
      
      </div>*/
    
       <div>
         <button onClick = {this.clicked}>Get Productivity Music Video</button>
       
       <div> <iframe width="560" height="315" src="https://www.youtube.com/embed/69fCpIY2hO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>     
     
      </div>
     ); 
    }
  } 
    
  


export default Youtube;
    