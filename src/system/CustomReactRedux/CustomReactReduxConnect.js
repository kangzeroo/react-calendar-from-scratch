
import React, { Component } from "react";
import CustomReactReduxContext from "./CustomReactReduxContext";

// withRedux is a higher order function that accepts two functions and returns another function
// the returned function accepts a component, which will get access to redux state
export default function withRedux(
  requestedProps = () => ({}),
  requestedActions = {}
) {
  /*
      requestedProps = (redux) => {
        someComponentProp: redux.somethingFromReduxState
      }

      requestedActions = {
        someReduxAction,
      }
  */

  return ChildComponent => {
    return class CustomReactReduxConnect extends Component {
      static contextType = CustomReactReduxContext;

      actionsWithDispatch = (requestedActions, dispatch) => {
        const reduxActions = Object.keys(requestedActions).map(fnName => {
          return { [fnName]: requestedActions[fnName](dispatch) };
        });
        if (reduxActions.length > 0) {
          return reduxActions.reduce((fns, fn) => ({ ...fns, fn }));
        }
        return {};
      };

      render() {
        return (
          <CustomReactReduxContext.Consumer>
            {context => {
              const { store, storeState } = context;
              const { dispatch } = store;

              return (
                <ChildComponent
                  {...requestedProps(storeState)}
                  {...this.actionsWithDispatch(requestedActions, dispatch)}
                  {...this.props}
                />
              );
            }}
          </CustomReactReduxContext.Consumer>
        );
      }
    };
  };
}
