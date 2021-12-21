import React, { Component, createContext } from "react";

// const Provider = createContext.Provider;
const RootContext = createContext();
const Provider = RootContext.Provider;

// Provider
const GlobalProvider = (Childern) => {
  return class ParentComp extends Component {
    state = {
      totalOrder: 55,
    };

    dispatch = (action) => {
      if (action.type === "PLUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder + 1,
        });
      }
      if (action.type === "MINUS_ORDER") {
        return this.setState({
          totalOrder: this.state.totalOrder - 1,
        });
      }
    };

    render() {
      return (
        <Provider
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
        >
          <Childern {...this.props} />
        </Provider>
      );
    }
  };
};

export default GlobalProvider;

// Cosumer
const Consumer = RootContext.Consumer;
export const GlobalCosumer = (Children) => {
  return class ParentCosumer extends Component {
    render() {
      return (
        <Consumer>
          {(value) => {
            return <Children {...this.props} {...value} />;
          }}
        </Consumer>
      );
    }
  };
};
