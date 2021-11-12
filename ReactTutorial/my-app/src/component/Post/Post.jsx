import React from "react"; //rafce

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className="remove" onClick={() => props.update(props.data.id)}>
          Update
        </button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
