import React, { Component } from "react";
import "../styles/Body.css";
import ToDoJSON from "./todolist.json";
import NotesContainer from "./notes/NotesContainer";




class Body extends Component {
    constructor () {
      super()
      this.state = {
        ToDoJSON,
        
      }
    }

    render() {
        return (

    <div className="col-10">
            <div className="canvas" id="canvas-wrap">
                <div id="overlay" draggable="true">

                  <NotesContainer />
                                       
                </div>

                <canvas id="myCanvas"></canvas>
            </div>
    </div>
);
    }
}

export default Body;