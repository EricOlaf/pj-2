import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/RAWtrails logo full-01.png";
//import reducers

import "./Navbar.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="total">
        <div className="logo">
          <img src={logo} className="logo__img" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/About">
            About
          </Link>
          <Link className="link" to="/Quiz/one">
            Plan a Trip
          </Link>
          <Link className="link" to="/About">
            Contact
          </Link>
        </div>
      </nav>
    );
  }
}
export default Navbar;
