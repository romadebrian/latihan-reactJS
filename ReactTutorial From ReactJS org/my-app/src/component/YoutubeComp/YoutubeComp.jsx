import React from "react"; // rafce
import "./YoutubeComp.css";

const YoutubeComp = () => {
  return (
    <div className="youtube-warper">
      <div className="img-thumb">
        <img src="img/1.jpg" alt="Thumnaill" />
        <p className="time">7.12</p>
      </div>
      <p className="title">Title Here</p>
      <p className="dsc">Description Here</p>
    </div>
  );
};

export default YoutubeComp;
