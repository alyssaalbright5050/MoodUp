import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper blue">
            <Link
              to="/"
              style={{
                fontFamily: 'Rum Raisin', fontSize: 40
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons"></i>
              Mood Up!
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;