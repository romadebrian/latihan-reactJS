import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello Ngab",
      subTitle: "Aplikasi React Pertamaku",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subTitle}</p>
      </div>
    );
  }
}

export default Title;
