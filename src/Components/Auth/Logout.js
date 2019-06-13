import React, { Component, Fragment } from "react";
import firebase from "../../Config/firebase";

import { Link } from "react-router-dom";
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut = e => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <Fragment>
        <Link to="/" className="nav-link" onClick={this.signOut}>
          Logout
        </Link>
      </Fragment>
    );
  }
}

export default Logout;
