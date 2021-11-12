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
    isUpdate: false,
  };
  // Read Data from Database
  getPostApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };
  // Imput Data To Database
  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostApi();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };
  // Update Data in Database
  putDataToAPI = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log();
        this.getPostApi();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      });
  };
  // Delete data from database
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then(this.getPostApi); //Untuk merefresh list item
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  handleFormChange = (event) => {
    // console.log("Form Change", event.target);
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    // ( ! ) artinya else atau false
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    // console.log(this.state.formBlogPost);
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
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
            value={this.state.formBlogPost.title}
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={this.state.formBlogPost.body}
            placeholder="add blog content"
            onChange={this.handleFormChange}
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>

        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.handleRemove}
              update={this.handleUpdate}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
