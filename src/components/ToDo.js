import React, { Component } from 'react';
import "../styles/ToDo.css";
import { Resizable, ResizableBox } from 'react-resizable';
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

    toggleCheckbox(event) {
        let newValue = (this.state.is_checked === "on" || this.state.is_checked === true) ? false : true;
        this.setState({
          is_checked: newValue
        });
      }

    changeUserInput(input){

        this.setState({
            userInput: input.value,
        });
        console.log(this.state.userInput);
    }

    // addToList(event){
    //      event.preventDefault();
    //     for(var i=0;i<this.state.ToDoArray;i++){
    //         if(this.state.ToDoArray[i].title == event.target.name){
    //             var prevState = this.state.ToDoArray
    //             prevState[i].list.push({
    //                 "is_Checked":false,
    //                 "text":this.state.userInput
    //             }); 
    //             this.setState({
    //                 lists:{prevState}.map(singleList=>(this.createRows(singleList))),
    //                 userInput: '',
    //             })
    //             break;
    //         }
    //     }
       
    // }

    removeList(ListID){

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
                        <button onclick={this.removeList}>X</button>
                        {list.rows}
                    </ul>
                    ))
                }
            </div>          
        )
    }
}