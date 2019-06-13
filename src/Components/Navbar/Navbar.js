import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../Redux/Modules/Auth/auth";

import Login from "../Auth/Login";
import Logout from "../Auth/Logout";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { currentUser } = this.props;
    return (
      <Fragment>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <Link className="navbar-brand mb-0 h1" to="/">
            Fortnite
          </Link>
          <ul className="navbar-nav ml-auto">
            {currentUser ? (
              <Fragment>
                <li className="nav-item my-auto">
                  <Link to="/play" className="nav-link mr-2">
                    Play
                  </Link>
                </li>
                <li className="nav-item my-auto">
                  <Link to="/profile">
                    <img
                      src={currentUser.photoURL}
                      className="mr-2"
                      style={{ height: 30, borderRadius: "100%" }}
                      alt="profile"
                    />
                  </Link>
                </li>
              </Fragment>
            ) : (
              ""
            )}
            <li className="nav-item">
              {currentUser === null ? (
                <Link to="/" className="nav-link">
                  Loading ...
                </Link>
              ) : currentUser === false ? (
                <Login />
              ) : (
                <Logout />
              )}
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Navbar);
