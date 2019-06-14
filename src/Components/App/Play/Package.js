import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchUser } from "../../../Redux/Modules/Auth/auth";

import axios from "axios";
import _ from "lodash";

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = { package: {} };
  }

  componentDidMount() {
    axios
      .post(
        "http://localhost:5000/newpackage",
        {
          packageName: this.props.match.params.id
        },
        { packageName: this.props.match.params.id }
      )
      .then(res => {
        this.setState({ package: res.data });
      });
  }

  handleEntry = e => {
    console.log("Clicked");
    axios
      .post("http://localhost:5000/newentry", {
        packageName: this.props.match.params.id,
        user: this.props.currentUser._id
      })
      .then(res => {
        console.log(res.data);
        this.setState({ package: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    let pName = this.props.match.params.id;
    let pack = this.state.package;
    if (!_.isEmpty(pack)) {
      return (
        <Fragment>
          <h2 className="text-center my-5">Play to win {pName} V-Bucks</h2>
          <div className="card mx-auto" style={{ width: 200 }}>
            <div className="card-body">
              <h4 className="card-title">{pName} V-Bucks</h4>
              <p>{pack.entry.length}/10</p>

              <button className="btn btn-dark" onClick={this.handleEntry}>
                Enter Now
              </button>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return "";
    }
  }
}

function mapStateToProps({ currentUser }) {
  return { currentUser };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Package);
