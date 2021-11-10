import React, { Component, Fragment } from "react"; //rcc

class BlogPost extends Component {
  render() {
    return (
      <Fragment>
        <h2>Blog Post</h2>
        <div className="post">
          <div className="img-thumb">
            <img src="https://placeimg.com/200/150/tech" alt="dummy" />
          </div>
          <div className="content">
            <p className="title">Dummy Tditle</p>
            <p className="desc">Dummy Body here</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BlogPost;
