import React from "react";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  if (props.loggedIn) {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">OneApp</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#" onclick={props._logout}>Log Out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )
  } else {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">OneApp</Link>
          </nav>
      </div>
    )
  }
}

export default Navbar;


