import React, { Component } from 'react'

const ToDoItem = props => (
    <div className="row button-row">
        <label className="container task">
        	{props.listItem}
            <input className="toDoChecked" type="checkbox" />
            <span className="checkmark"></span>
        </label>
    </div>
);

export default ToDoItem