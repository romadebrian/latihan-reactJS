import React, { Component } from "react";
import "./LifeCycleComp.css";

class LifeCycleComp extends Component {
  // sering digunakkan
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  static getDerivedStateFormProps(props, state) {
    console.log("getDerivedStateFormProps");
    return null;
  }
  // sering digunakkan
  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log("shouldComponentUpdate");
    console.group("shouldComponentUpdate");
    console.log("nextProps: ", nextProps);
    console.log("nextState: ", nextState);
    console.log("this state: ", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }
  // sering digunakkan
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  // sering digunakkan
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // sering digunakkan
  render() {
    console.log("render");
    return (
      <button className="btn" onClick={this.changeCount}>
        {" "}
        Button {this.state.count}
      </button>
    );
  }
}

export default LifeCycleComp;
