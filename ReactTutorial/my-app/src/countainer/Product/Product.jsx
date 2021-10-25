import React, { Component, Fragment } from "react";
import CardProduct from "./CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  ngeHandlePerubahanJumblah = (newvalue) => {
    this.setState({
      order: newvalue,
    });
  };

  render() {
    return (
      <Fragment>
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
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          KetikaJumblahBerubah={(value) =>
            this.ngeHandlePerubahanJumblah(value)
          }
        />
      </Fragment>
    );
  }
}

export default Product;
