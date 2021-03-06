import React, { Component } from 'react'
import '../styles/ToDoButton.css'
import ToDoJSON from "./todolist.json"

const ToDoButton = props => (
    <div className="row button-row">
        <button className="btn notifications button" onclick={() => props.onClick} id={props.id} type="button">{props.title}</button>
        <br />
    </div>
);

export default ToDoButton;