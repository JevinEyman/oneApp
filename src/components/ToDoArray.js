import React, { Component } from 'react'
import '../styles/ToDoArray.css'

const ToDoArray = props => (
    <div className="row button-row">
        <label key={props.list.index} className="container task">{props.list}
            <input className="toDoChecked" type="checkbox" checked={props.is_checked} />
            <span className="checkmark"></span>
        </label>)}
    </div>
);

export default ToDoArray;