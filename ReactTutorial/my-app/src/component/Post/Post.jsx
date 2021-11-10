import React from "react"; //rafce

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">Dummy Tditle</p>
        <p className="desc">Dummy Body here</p>
      </div>
    </div>
  );
};

export default Post;
