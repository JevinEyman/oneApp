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
                {this.state.ToDoJSON.map(item => (
              <ToDoList
                    id={item.id}
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