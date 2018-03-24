import React from "react";
import "../styles/Header.css";

const Header = () => (
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
            <div className="container">
              <div className="row">
              <button type="button" className="btn notifications button" id="todo">
                Profile <span className="badge badge-light ToDoList">9</span>
                <span className="sr-only">unread messages</span>
              </button>
              </div>

              <br />
              <br />

              <div className="row">
              <button type="button" className="btn notifications addToDoList" id="addtodo">
                Add To-Do List <span className="badge badge-light ToDoList" id="addtodospan">9</span>
                <span className="sr-only">unread messages</span>
              </button>
              </div>              
            </div>

          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Notes
            </button>
          </h5>
        </div>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
            <button type="button" className="btn notifications button" id="notes">
              Profile <span className="badge badge-light Notes">9</span>
              <span className="sr-only">unread messages</span>
            </button>

            <br />
            <br />

            <button type="button" className="btn notifications button" id="todo">
              Profile <span className="badge badge-light ToDoList">9</span>
              <span className="sr-only">unread messages</span>
            </button>
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
            
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingFive">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Email
            </button>
          </h5>
        </div>
        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header" id="headingSix">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              Social Media
            </button>
          </h5>
        </div>
        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
          <div className="card-body">
            
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="card-header" id="headingSeven">
          <h5 className="mb-0">
            <button className="btn collapsed head" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              News
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

export default Header;
