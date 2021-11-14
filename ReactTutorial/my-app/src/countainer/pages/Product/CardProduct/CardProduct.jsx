import React, { Component } from "react";
import "../Product.css";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="img/1.jpg" alt="imgCard" width="100" height="400" />
        </div>
        <p className="product-title">Daging Ayam</p>
        <p className="product-price">Rp 400.000</p>
        <Counter
          onCounterChange={(value) => this.props.onCounterChange(value)}
        />
      </div>
    );
  }
}

export default CardProduct;
