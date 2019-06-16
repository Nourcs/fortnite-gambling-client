import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchUser } from "../../../Redux/Modules/Auth/auth";

import axios from "axios";
import _ from "lodash";

import Winner from "./Winner";

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = { package: {}, winners: [] };
  }

  componentDidMount() {
    axios
      .post("http://localhost:5000/newpackage", {
        packageName: this.props.match.params.id
      })
      .then(res => {
        this.setState({ package: res.data });
      });

    axios
      .post("http://localhost:5000/winners", {
        packageName: this.props.match.params.id
      })
      .then(res => {
        this.setState({ winners: res.data });
      });
  }

  handleEntry = e => {
    if (this.state.package.entry.length === 9) {
      axios
        .post("http://localhost:5000/newentry", {
          packageName: this.props.match.params.id,
          user: this.props.currentUser._id
        })
        .then(res => {
          axios
            .post("http://localhost:5000/handlepackage", {
              packageName: this.props.match.params.id
            })
            .then(res => {
              console.log(res.data);
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
                  axios
                    .post("http://localhost:5000/winners", {
                      packageName: this.props.match.params.id
                    })
                    .then(res => {
                      this.setState({ winners: res.data });
                    });
                });
            });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      axios
        .post("http://localhost:5000/newentry", {
          packageName: this.props.match.params.id,
          user: this.props.currentUser._id
        })
        .then(res => {
          this.setState({ package: res.data });
        })
        .catch(err => {
          console.error(err);
        });
    }
  };

  render() {
    let pName = this.props.match.params.id;
    let pack = this.state.package;
    if (!_.isEmpty(pack)) {
      return (
        <Fragment>
          <h2 className="text-center my-5">Play to win {pName} V-Bucks</h2>
          <div className="card mx-auto text-center" style={{ width: "50%" }}>
            <div className="card-body">
              <h4 className="card-title">{pName} V-Bucks</h4>
              <p>{pack.entry.length}/10</p>

              <button className="btn btn-dark" onClick={this.handleEntry}>
                Enter Now
              </button>
            </div>
          </div>
          <Winner winners={this.state.winners} />
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
