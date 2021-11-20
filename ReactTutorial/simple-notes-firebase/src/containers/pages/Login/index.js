import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUserName } from "../../../config/redux/action";
import Button from "../../../components/atoms/Button";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isLoading: false,
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    this.props.registerAPI({ email, password });
    this.setState({
      email: "",
      password: "",
    });
  };

  changeUser = () => {
    this.props.changeUserName();
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
            value={this.state.email}
          />
          <input
            id="password"
            className="input"
            placeholder="Password"
            type="password"
            onChange={this.handleChangeText}
            value={this.state.password}
          />
          <Button
            onClick={this.handleRegisterSubmit}
            title="Register"
            loading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  popupProps: state.popup,
  userName: state.user,
});

const reduxDispatch = (dispatch) => ({
  changeUserName: () => dispatch(actionUserName()),
});

export default connect(reduxState, reduxDispatch)(Login);
