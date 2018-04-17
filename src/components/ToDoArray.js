 import React, { Component } from 'react'
import '../styles/ToDoArray.css'

const ToDoArray = (props) => (
  <ul>
    <button onclick={props.remove}>X</button>
    {props.list}
  </ul>
  );

export default ToDoArray;

