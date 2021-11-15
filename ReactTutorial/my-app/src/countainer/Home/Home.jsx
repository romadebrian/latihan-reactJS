//Libraries
import React, { Component, Fragment, createContext } from "react"; // rcc
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
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
          </div>

          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:PostId" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube-component" component={YoutubeCompPage} />
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
