import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
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
