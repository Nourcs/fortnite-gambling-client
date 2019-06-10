import React, { Component, Fragment } from "react";
import firebase, { googleProvider } from "../../Config/firebase";

import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  googleSignIn = e => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        console.error(error);
      });
  };

  render() {
    return (
      <Fragment>
        <Link to="/" className="nav-link" onClick={this.googleSignIn}>
          Sign in
        </Link>
      </Fragment>
    );
  }
}

export default Login;
