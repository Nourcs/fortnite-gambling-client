import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class Packages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="card" style={{ width: 200 }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <Link to={this.props.link}>Enter Now</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Packages;
