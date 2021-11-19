import React, { Component } from "react";
import "./Register.scss";
import firebase from "../../../config/firebase";
import Button from "../../../components/atoms/Button";

class Register extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  handleChangeText = (e) => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    console.log("data before send: ", email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        // Signed in
        var user = res.user;
        console.log("succes", res);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Page Register</p>
          <input
            id="email"
            className="input"
            placeholder="Email"
            type="text"
            onChange={this.handleChangeText}
          />
          <input
            id="password"
            className="input"
            placeholder="Password"
            type="password"
            onChange={this.handleChangeText}
          />
          <Button onClick={this.handleRegisterSubmit} title="Register" />
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
