import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class VBucks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div class="card" style={{ width: 200 }}>
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <Link to={"/" + this.props.link}>Enter Now</Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default VBucks;
