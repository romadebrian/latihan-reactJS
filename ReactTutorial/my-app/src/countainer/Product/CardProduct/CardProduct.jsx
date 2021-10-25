import React, { Component } from "react";
import "../Product.css";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  ngeHandlePerubahanNilai = (newValue) => {
    this.props.KetikaJumblahBerubah(newValue); // "This" untuk statefull component yang menggunakan class, beda dengan "const"
  };

  handlerPlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.ngeHandlePerubahanNilai(this.state.order);
      }
    );
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
    );
  }
}

export default CardProduct;
