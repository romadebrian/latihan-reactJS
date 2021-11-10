import React, { Component, Fragment } from "react"; //rcc
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };

  handleRemove = (data) => {
    axios
      .delete("http://localhost:3004/posts/${data}")
      .then((res) => console.log(res));
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-title">Blog Post</h2>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
