import React from "react";
import "../styles/Body.css";
import ToDo from "./ToDo.js"

const Body = () => (
    <div className="col">
            <div className="canvas" id="canvas-wrap">
                <div id="overlay" draggable="true">
                    <ToDo />
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
    </div>
);

export default Body;