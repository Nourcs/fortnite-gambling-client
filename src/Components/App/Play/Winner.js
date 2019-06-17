import React, { Component, Fragment } from "react";
import axios from "axios";

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h3 className="text-center mt-5 pb-3">
          {this.props.winners.length === 0 ? "" : "Winners"}
        </h3>
        <ul className="list-group">
          {this.props.winners.map((e, i) => {
            return (
              <li key={i} className="list-group-item text-center">
                {e.user.displayName}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Winner;
