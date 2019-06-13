import React, { Component, Fragment } from "react";

import Packages from "./Packages";

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <h2 className="text-center my-5">Want to win some V-Bucks?</h2>
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <Packages title="1000 V-Bucks" link="play/1000" />
            </div>
            <div className="col">
              <Packages title="2800 V-Bucks" link="play/2800" />
            </div>
            <div className="col">
              <Packages title="7500 V-Bucks" link="play/7500" />
            </div>
            <div className="col">
              <Packages title="13500 V-Bucks" link="play/13500" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Play;
