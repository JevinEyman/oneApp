 import React, { Component } from 'react'
import '../styles/ToDoArray.css'


export default class ToDoArray extends Component {
    constructor(props){
        super(props);

        this.state = {
           
        };
    }

    createList(item){
    	return ( <li> {item}</li>)
    }


    Render(){

    	var rows = this.props.listItems.map(this.createList);
    	
    	return(
			<ul>
				{rows}
			</ul>
    	)
    }

}


