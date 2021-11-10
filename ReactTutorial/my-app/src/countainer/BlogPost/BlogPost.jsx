import React, { Component, Fragment } from "react"; //rcc
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  getPostApi = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(this.getPostApi); //Untuk merefresh list item
  };

  handleFormChange = (event) => {
    console.log("Form Change", event.target);
    let title = event.target.value;
    this.setState({
      formBlogPost: title,
    });
    console.log("value obj formBlogPost", this.state.formBlogPost);
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    this.getPostApi();
  }

  render() {
    return (
      <Fragment>
        <h2 className="section-title">Blog Post</h2>

        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body-content">Blog Content</label>
          <textarea
            name="body-content"
            id="body-content"
            cols="30"
            rows="10"
            placeholder="add blog content"
          ></textarea>
          <button className="btn-submit">Simpan</button>
        </div>

        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
