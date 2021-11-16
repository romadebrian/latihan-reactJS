import React, { Component, useState, useEffect } from "react";
import "./Hooks.css";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   componentDidMount() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

//   componentDidUpdate() {
//     document.title = `Title Change: ${this.state.count}`;
//   }

//   componentWillUnmount() {
//     document.title = "ReactJs Hello Wolrd";
//   }

//   render() {
//     return (
//       <div className="p-hooks">
//         <p>Nilai Saya saat ini adalah : {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Title Change: ${count}`;
    return () => {
      document.title = "ReactJS Hello Wolrd";
    };
  });

  return (
    <div className="p-hooks">
      <p>Nilai Saya saat ini adalah : {count}</p>
      <button onClick={() => setCount(count + 1)}>Update Nilai</button>
    </div>
  );
};

export default Hooks;
