 import React, { Component } from 'react'
import '../styles/ToDoArray.css'
import ToDoItem from './ToDoItem.js'


export default class ToDoArray extends Component {
    constructor(props){
        super(props);

        this.state = {
            listItems: this.props.list
        };
    }
    Render(){
    	return(
    		<div>
	    		{this.state.listItems.map(item =>(
		    			<ToDoItem
		    				listItem={item}
		    			/>
	    			))
	    		}
			</div>
    	)
    }

}