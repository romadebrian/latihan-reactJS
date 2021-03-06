import React, { Component, Fragment } from "react";
import { GlobalCosumer } from "../../../context/context";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";
// import { connect } from "react-redux";
// import { RootContext } from "../../Home/Home";

class Product extends Component {
  // state = {
  //   order: 4,
  // };

  // handleCounterChange = (newvalue) => {
  //   this.setState({
  //     order: newvalue,
  //   });
  // };

  render() {
    return (
      <Fragment>
        <p> Product Page </p>
        <hr />
        <div className="header">
          <div className="logo">
            <img
              src="img/original.png"
              alt="HeaderLogo"
              width="100"
              height="40"
            />
          </div>
          <div className="troley">
            <img src="img/pack.png" alt="ImgTroli" />
            <div className="count">{this.props.state.totalOrder}</div>
          </div>
        </div>
        <CardProduct />

        {/* <CardProduct
                onCounterChange={(value) => this.handleCounterChange(value)}
              /> */}
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Product);
export default GlobalCosumer(Product);
