import React, { Component } from "react";
import "../styles/Body.css";
import ToDoList from "./ToDo.js"
import ToDoJSON from "./todolist.json"



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
                {this.state.ToDoJSON.map(item => (
                  <ToDoList
                    key={item.key}
                    list={item.list}
                  />
                ))
              }         
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
    </div>
);
    }
}

export default Body;