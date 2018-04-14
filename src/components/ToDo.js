import React, { Component } from 'react';
import "../styles/ToDo.css";
import { Resizable, ResizableBox } from 'react-resizable';

export default class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            list: []
        }
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        }, ()=> console.log(input));
    }

    addToList(input){
        let listArray = this.state.list

        listArray.push(input);

        this.setState({
            list: listArray,
            userInput: '',
        })
    }

    render() {
        return (

            <ResizableBox width={200} height={200} minConstraints={[100, 100]} maxConstraints={[300, 300]}>

            <div className="to-do-list-main">
                <input 
                    onChange={ (e)=>this.changeUserInput(e.target.value)}
                    value={this.state.userInput} 
                    type="text"
                />
                <button className="addTask" onClick={ ()=> this.addToList(this.state.userInput)}>Submit</button>

                <ul>
                    {this.state.list.map( (val) => <li className="task">{val}</li>)}
                </ul>
            </div>

            </ResizableBox>

        )
    }
}