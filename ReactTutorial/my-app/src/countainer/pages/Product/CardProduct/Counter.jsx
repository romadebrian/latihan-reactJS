import React, { Component } from "react"; //rcc
import { connect } from "react-redux";

class Counter extends Component {
  //   state = {
  //     order: 4,
  //     name: "Prawito",
  //   };

  //   handleCounterchange = (newValue) => {
  //     this.props.onCounterChange(newValue); // "This" untuk statefull component yang menggunakan class, beda dengan "const"
  //   };

  //   handlerPlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleCounterchange(this.state.order);
  //       }
  //     );
  //   };

  //   handlerMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState({
  //         order: this.state.order - 1,
  //       });
  //     }
  //   };

  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <button className="minus" onClick={this.props.handlerMinus}>
          -
        </button>
        <input type="text" value={this.props.order} />
        <button className="plus" onClick={this.props.handlerPlus}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerPlus: () => dispatch({ type: "ADD_ORDER" }),
    handlerMinus: () => dispatch({ type: "MINUS_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
