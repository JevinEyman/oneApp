import React, {Component} from 'react';

const API = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"
const channelID = "69fCpIY2hO8&t=2s"
const result = 10;
const baseURL="https://www.googleapis.com/youtube/v3/search?key="  
//const videoID= "69fCpIY2hO8&list=RD69fCpIY2hO8&t=48"

var finalURL = `${baseURL}${API}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`


class Youtube extends Component {

  constructor(props){
    super(props);
    this.state = {
      resultyt: []
    };
  this.clicked= this.clicked.bind(this);
  }
    
    clicked(){
     fetch(finalURL)
      .then((response) => response.json())
      .then(( responseJson) => {
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt: resultyt});
        //console.log(responseJson);
      })
      .catch((error)=>{
        console.error(error);
      });
    }
  
    render(){
      //console.log(finalURL);
    
      
  return(
      <div>
          <button onClick={this.clicked}>Get Productivity Music Video</button>
    {
      this.state.resultyt.map((link, i) => {

       var frame = <div key={i} className="youtube"><iframe  width="560" height="315" src={link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe></div>
                
            
      return frame;
              
      })

    }
              
          {this.frame}
      
      </div>
    
    /*<div>
         <button onClick = {this.clicked}>Get Productivity Music Video</button>

        
         
       
       <iframe width="560" height="315" src="https://www.youtube.com/embed/69fCpIY2hO8" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>      
         
    </div>*/

            );

          }
        }
      
      
     

   
    
  


export default Youtube;
    