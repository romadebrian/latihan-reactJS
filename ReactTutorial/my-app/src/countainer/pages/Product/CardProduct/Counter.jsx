import React, { Component } from "react"; //rcc
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContext } from "../../../Home/Home";

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
    // console.log(this.props);
    return (
      <RootContext.Consumer>
        {(value) => {
          console.log("value: ", value);
          return (
            <div className="counter">
              <button className="minus" onClick={() => value.dispatch({type: 'MINUS_ORDER'})}>
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button className="plus" onClick={() => value.dispatch({type: 'PLUS_ORDER'})}>
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlerPlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handlerMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
