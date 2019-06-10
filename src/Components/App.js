import React, { Component, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";

import { connect } from "react-redux";
import { fetchUser } from "../Redux/Modules/Auth/auth";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Profile from "./App/Profile/Profile";
import Play from "./App/Play/Play";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: {} };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Navbar />
        {this.props.currentUser === null ? (
          <h1>Loading ...</h1>
        ) : this.props.currentUser === false ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              component={() => {
                return <h1>Not Found</h1>;
              }}
            />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/play" component={Play} />

            <Route
              component={() => {
                return <h1>Not Found</h1>;
              }}
            />
          </Switch>
        )}
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
