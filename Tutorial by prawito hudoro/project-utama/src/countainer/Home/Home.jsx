//Libraries
import React, { Component, Fragment } from "react"; // rcc
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GlobalProvider from "../../context/context";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Hooks from "../pages/Hooks/Hooks";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

//Style
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
      <Router>
        <Fragment>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube-component">Youtube</Link>
            <Link to="/hooks">Hooks</Link>
          </div>

          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:PostId" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube-component" component={YoutubeCompPage} />
          <Route path="/hooks" component={Hooks} />
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
