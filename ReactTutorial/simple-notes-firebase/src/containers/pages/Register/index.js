import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <p>Page Register</p>
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="password" />
        <button>Register</button>
        <button>Go to Dashboard</button>
      </div>
    );
  }
}

export default Register;
