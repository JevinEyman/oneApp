import React, { Component } from 'react';
import "../styles/ToDo.css";
import { Resizable, ResizableBox } from 'react-resizable';
import ToDoJSON from "./todolist.json"
import ToDoArray from "./ToDoArray";


export default class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            list: [],
            ToDoJSON,
            is_checked: false
        };
    }

    toggleCheckbox(event) {
        let newValue = (this.state.is_checked === "on" || this.state.is_checked === true) ? false : true;
        this.setState({
          is_checked: newValue
        });
      }

    changeUserInput(input){
        this.setState({
            userInput: input,
        });
    }

    addToList(input){
        this.setState({
            list: ToDoJSON.list,
            userInput: '',
        })
    }

    render() {
        return (
            <div className="to-do-list-main"/>
            //     <input 
            //         onChange={ (e)=>this.changeUserInput(e.target.value)}
            //         value={this.state.userInput} 
            //         type="text"
            //     />
            // //     <button className="addTask" onClick={ ()=> this.addToList(this.state.userInput)}>Submit</button>

            // //         {this.state.ToDoJSON.map(item => (
            // //             <ToDoArray
            // //                 list={item.list} 
            // //                 id={item.id}
            // //                 is_checked={item.is_checked}
            // //                 onChange={this.toggleCheckbox.bind(this)}
            // //             />
            // //         ))
            // //     }              
            // </div>
        )
    }
}