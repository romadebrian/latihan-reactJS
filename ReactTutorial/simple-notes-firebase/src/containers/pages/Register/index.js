import React, { Component } from "react";
import "./Register.scss";

class Register extends Component {
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Page Register</p>
          <input className="input" placeholder="Email" type="text" />
          <input className="input" placeholder="Password" type="password" />
          <button className="btn">Register</button>
        </div>
        {/* <button>Go to Dashboard</button> */}
      </div>
    );
  }
}

export default Register;
