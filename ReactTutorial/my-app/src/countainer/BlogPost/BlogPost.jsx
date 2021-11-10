import React, { Component, Fragment } from "react"; //rcc
import Post from "../../component/Post/Post";
import "./BlogPost.css";

class BlogPost extends Component {
  render() {
    return (
      <Fragment>
        <h2 className="section-title">Blog Post</h2>
        <Post title="Title" desc="Description" />
      </Fragment>
    );
  }
}

export default BlogPost;
