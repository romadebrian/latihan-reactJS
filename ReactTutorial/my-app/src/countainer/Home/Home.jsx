import React, { Component, Fragment } from "react"; // rcc
import { BrowserRouter, Route, Link } from "react-router-dom";
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../pages/Product/Product";
import "./Home.css";

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
        

        <Fragment>
          <div className="navigation">
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
