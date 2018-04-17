import React, { Component } from "react";
import "../styles/Body.css";
import ToDoList from "./ToDo.js"
import ToDoJSON from "./todolist.json"
import Header from "./Header.js"


class Body extends Component {
    constructor () {
      super()
      this.state = {
        ToDoJSON,
      }
    }

    showToDoList(){

    }

    render() {
        return (


    <div className="col-12">
     
            <div className="canvas" id="canvas-wrap">
            <Header />
                <div id="overlay" draggable="true">
                
              <ToDoList/>
                
                      
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
    </div>
);
    }
}

export default Body;