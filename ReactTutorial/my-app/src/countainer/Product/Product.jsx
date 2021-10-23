import React, { Component, Fragment } from "react";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  handlerPlus = () => {
    this.setState({
      order: this.state.order + 1,
    });
  };

  handlerMinus = () => {
    if (this.state.order > 0) {
      this.setState({
        order: this.state.order - 1,
      });
    }
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
        <div className="card">
          <div className="img-thumb-prod">
            <img src="img/1.jpg" alt="imgCard" width="100" height="400" />
          </div>
          <p className="product-title">Daging Ayam</p>
          <p className="product-price">Rp 400.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handlerMinus}>
              -
            </button>
            <input type="text" value={this.state.order} />
            <button className="plus" onClick={this.handlerPlus}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Product;
