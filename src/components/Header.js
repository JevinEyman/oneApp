import React, { Component } from "react";
import "../styles/Header.css";
import Calendar from "./Calendar";
import ToDo from "./ToDo";
import DiscussionBoard from "./DiscussionBoard.js"
import ReactModal from 'react-modal';
import { Modal, Button } from 'antd';

class Header extends Component {
  constructor () {
    super()
    this.state = {
      isHidden: true,
      modal2Visible: false,
    }
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  addButton() {
    return <button type="button" onClick={this.toggleHidden.bind(this)} className="btn notifications button" id="todo">
    Profile <span className="badge badge-light ToDoList">9</span>
    <span className="sr-only">unread messages</span>
  </button>
  }
  
  onDayClick = (e, day) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
    alert(day);
  }
  
  render() {
    return (

  <div className="col-md-2 header">
    <div id="accordion">
 
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              To-Do List
            </button>
          </h5>
        </div>

        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">

              <div className="row">
              <button type="button" onClick={this.toggleHidden.bind(this)} className="btn notifications button" id="todo">
                Profile <span className="badge badge-light ToDoList">9</span>
                <span className="sr-only">unread messages</span>
              </button>

            {!this.state.isHidden && <ToDo />}

              </div>

              <br />
              <br />

              <div className="row">
              <button type="button" onClick={this.addButton.bind(this)} className="btn notifications addToDoList" id="addtodo">
                Add To-Do List <span className="badge badge-light ToDoList" id="addtodospan">9</span>
                <span className="sr-only">unread messages</span>
              </button>
              </div>              


          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Chat
            </button>
          </h5>
        </div>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingFour">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Calendar
            </button>
          </h5>
        </div>
        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
          <div className="card-body">
          <Calendar onDayClick={(e, day)=> this.onDayClick(e, day)}/>   
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingSix">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Discussion Boards
            </button>
          </h5>
        </div>
        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
          <div className="card-body">
              <Button type="primary" onClick={() => this.setModal2Visible(true)}>Discussion Board</Button>
              <Modal className="modal" wrapClassName="vertical-center-modal" visible={this.state.modal2Visible} onCancel={() => this.setModal2Visible(false)} footer={null} maskClosable={true}>
                <DiscussionBoard />
              </Modal>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header" id="headingSeven">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              Youtube Searcher
            </button>
          </h5>
        </div>
        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingEight">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              Workspaces
            </button>
          </h5>
        </div>
        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>


    </div>
  </div>
);

  }

}

export default Header;
