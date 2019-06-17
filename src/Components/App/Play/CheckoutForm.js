import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    console.log("THIS PROPS ", this.props);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    if (token) {
      let response = await fetch("http://localhost:5000/charge", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: token.id
      });

      if (response.ok) {
        if (this.props.package.entry.length === 9) {
          axios
            .post("http://localhost:5000/newentry", {
              packageName: this.props.packageName,
              user: this.props.currentUser._id
            })
            .then(res => {
              axios
                .post("http://localhost:5000/handlepackage", {
                  packageName: this.props.packageName
                })
                .then(res => {
                  console.log(res.data);
                  axios
                    .post(
                      "http://localhost:5000/newpackage",
                      {
                        packageName: this.props.packageName
                      },
                      { packageName: this.props.packageName }
                    )
                    .then(res => {
                      this.setState({ package: res.data });
                      axios
                        .post("http://localhost:5000/winners", {
                          packageName: this.props.packageName
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
              packageName: this.props.packageName,
              user: this.props.currentUser._id
            })
            .then(res => {
              this.setState({ package: res.data });
            })
            .catch(err => {
              console.error(err);
            });
        }
      }
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
