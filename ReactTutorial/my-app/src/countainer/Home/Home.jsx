import React, { Component, Fragment } from "react"; // rcc
import { BrowserRouter, Route, Link } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 10000);
  }

  render() {
    return (
      <BrowserRouter>
        {/* <div>
          <YoutubeComp
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
        <YoutubeComp />

        <p> Product </p>
        <hr />
        <Product />

        <p>LifeCycleComponents</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null} 
          if else

          <p>Blog Post</p>
          <hr />
          <BlogPost />
        </div> */}

        <Fragment>
          <div>
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
