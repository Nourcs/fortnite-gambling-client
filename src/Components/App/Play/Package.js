import React, { Component, Fragment } from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let pName = this.props.match.params.id;
    return (
      <Fragment>
        <h2 className="text-center my-5">Play to win {pName} V-Bucks</h2>
        {
          {
            1000: <One />,
            2800: <Two />,
            7500: <Three />,
            13500: <Four />
          }[pName]
        }
      </Fragment>
    );
  }
}

export default Package;
