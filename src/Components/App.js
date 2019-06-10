import React, { Component, Fragment } from "react";
import firebase, { googleProvider } from "../Config/firebase";
import { connect } from "react-redux";
import { fetchUser } from "../Redux/Modules/Auth/auth";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: {} };
  }

  componentDidMount() {
    this.props.fetchUser();
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

  signOut = e => {
    firebase.auth().signOut();
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h1>Test</h1>
        <Switch>
          <Route
            path="/"
            component={() => {
              return (
                <Fragment>
                  <button onClick={this.googleSignIn}>Login with Google</button>
                  <br />
                  <button onClick={this.signOut}>Sign Out</button>
                </Fragment>
              );
            }}
          />
        </Switch>
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
)(App);
