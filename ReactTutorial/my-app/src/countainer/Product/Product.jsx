import React, { Component, Fragment } from "react";
import "./Product.css";

class Product extends Component {
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
            <div className="count">3</div>
          </div>
        </div>
        <div className="card">
          <div className="img-thumb-prod">
            <img src="img/1.jpg" alt="imgCard" width="100" height="400" />
          </div>
          <p className="product-title">Daging Ayam</p>
          <p className="product-price">Rp 400.000</p>
          <div className="counter">
            <button className="minus"> - </button>
            <input type="text" value={3} />
            <button className="plus"> + </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Product;
