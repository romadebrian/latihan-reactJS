import React, { Component } from "react";

class DetailPost extends Component {
  componentDidMount() {
    console.log(this.props.match.params.PostId);
  }
  render() {
    return (
      <div>
        <h1> DetailPost</h1>
      </div>
    );
  }
}

export default DetailPost;
