import React, { Component, Fragment } from "react";
import axios from "axios";

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendEmail = () => {
    axios
      .post("http://localhost:5000/emailwinner")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
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
                <button onClick={this.sendEmail} className="btn btn-dark ml-5">
                  {" "}
                  Send Email
                </button>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Winner;
