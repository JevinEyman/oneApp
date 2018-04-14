import React, { Component } from 'react'
import '../styles/ToDoButton.css'

const ToDoButton = props => (
    <div className="row">
        <button className="btn notifications button" id={props.id} type="button">{props.title}</button>
        <br />
    </div>
);

export default ToDoButton;