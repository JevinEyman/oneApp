import React, { Component } from 'react';
import "../styles/ToDo.css";
import ToDoJSON from "./todolist.json"



export default class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            lists:ToDoJSON.map(singleList=>(this.createRows(singleList))),
            ToDoArray:ToDoJSON,
            is_checked: false
        };
    }

    changeUserInput(input){
        this.setState({
            userInput: input.value,
        });
        console.log(this.state.userInput);
    }


    createRows(items){
        let list ={
            rows: items.list.map(item=>(
                <li onclick={this.toggleCheckbox}> {item.text}</li>
            )),
            title:items.title

        }
        return list;
    }

       
    render() {
        // var lists = 

        

        return (
            <div>
                {this.state.lists.map((list) =>(
                    <ul>
                    <form onSubmit={this.addToList}>
                        <input
                            name={list.title}     
                            onChange={(e)=>this.changeUserInput(e.target)}

                            type="text">
                        </input>
                        <button type="submit">Submit</button>
                    </form>
                        {/* <button onClick={this.removeList}>X</button> */}
                        {list.rows}
                    </ul>
                    ))
                }
            </div>          
        )
    }
}