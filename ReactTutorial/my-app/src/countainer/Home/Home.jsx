import React, { Component } from "react"; // rcc
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <YoutubeComp
          time="7.12"
          title="Tutorial ReactJs - Bagian 1"
          desc="2x ditonton, 2 hari yang lalu"
        />
        <YoutubeComp
          time="8.02"
          title="Tutorial ReactJs - Bagian 2"
          desc="200x ditonton, 10 hari yang lalu"
        />
        <YoutubeComp
          time="7.12"
          title="Tutorial ReactJs - Bagian 3"
          desc="500x ditonton, 4 hari yang lalu"
        />
        <YoutubeComp
          time="5.04"
          title="Tutorial ReactJs - Bagian 4"
          desc="1k ditonton, 14 hari yang lalu"
        />
        <YoutubeComp /> */}
        <Product />
      </div>
    );
  }
}

export default Home;