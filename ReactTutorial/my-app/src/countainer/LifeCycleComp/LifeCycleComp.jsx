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
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
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
  // sering digunakkan
  render() {
    console.log("render");
    return <button className="btn">Component Button {this.state.count}</button>;
  }
}

export default LifeCycleComp;
