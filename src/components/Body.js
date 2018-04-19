import React, { Component } from "react";
import "../styles/Body.css";
import ToDoList from "./ToDo.js"
import ToDoJSON from "./todolist.json"
import Header from "./Header.js"

import { Route, Link } from 'react-router-dom'



class Body extends Component {
    constructor () {
      super()
      this.state = {
        ToDoJSON,
      }
    }


    render() {
     const loggedIn = this.props.loggedIn

      const whatToRender = loggedIn ? (
        <div className="col-12">
     
            <div className="canvas" id="canvas-wrap">
            <Header />
                <div id="overlay" draggable="true">
                
              <ToDoList/>
                
                      
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
        </div>
        ) : (
        <div>
        <button className="btn btn-dark">
          <Link to="/login">
            Login
          </Link>
        </button>
        <button className="btn btn-warning">
          <Link to="/signup">
            Sign Up
          </Link>
        </button >
        </div>
        )

        return (
          <div>
          {whatToRender}
          </div>
);
    }
}

export default Body;