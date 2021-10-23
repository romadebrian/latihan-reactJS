import React from "react"; // rafce
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div className="youtube-warper">
      <div className="img-thumb">
        <img src="img/1.jpg" alt="Thumnaill" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="dsc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title Here",
  desc: "Description Here",
};

export default YoutubeComp;
