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
            ArrayOfLists:ToDoJSON,
            is_checked: false
        };
    }

    toggleCheckbox(event) {
        let newValue = (this.state.is_checked === "on" || this.state.is_checked === true) ? false : true;
        this.setState({
          is_checked: newValue
        });
      }

    // changeUserInput(input){
    //     this.setState({
    //         userInput: input,
    //     });
    // }

    // addToList(input){
    //     this.setState({
    //         list: ToDoJSON.list,
    //         userInput: '',
    //     })
    // }

    removeList(ListID){

    }

    createRows(items){
        let rows = items.list.map(item=>(
            <li onclick={this.toggleCheckbox}> {item.text}</li>
        ));
        return rows;
    }

       
    render() {
        var lists = this.state.ArrayOfLists.map(singleList=>(this.createRows(singleList)))

        return (
            <div>
                {lists.map((list) =>(
                    <ToDoArray
                        list={list}
                        remove={this.removeList}

                    />
                    ))
                }
            </div>          
        )
    }
}