import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-almundo.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img src={logo} alt="map" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
