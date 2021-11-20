import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/atoms/Button";
import { LoginUserAPI } from "../../../config/redux/action";

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

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const res = await this.props
      .LoginAPI({ email, password })
      .catch((err) => err);
    if (res) {
      console.log("login success");
      // this.setState({
      //   email: "",
      //   password: "",
      // });
    } else {
      console.log("login failed");
    }
  };

  changeUser = () => {
    this.props.changeUserName();
  };
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Page Login</p>
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
            onClick={this.handleLoginSubmit}
            title="Register"
            loading={this.props.isLoading}
          />
        </div>
      </div>
    );
  }
}

const ReduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  LoginAPI: (data) => dispatch(LoginUserAPI(data)),
});

export default connect(ReduxState, reduxDispatch)(Login);
