import React, { Component } from 'react'
import CustomReactRouterContext from "./CustomReactRouterContext";

export default function(ChildComponent) {

    return class HOC extends Component {

      render() {
        return (
          <CustomReactRouterContext.Consumer>
            {context => {
              const { history } = context
              return (
                <ChildComponent
                  history={history}
                  {...this.props}
                />
              );
            }}
          </CustomReactRouterContext.Consumer>
        )
      }
    }
}