
import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomReactReduxContext from "./CustomReactReduxContext";

export default class CustomReactReduxProvider extends Component {
  // regarding this._isMounted (https://tinyurl.com/y7mx2fst)

  static propTypes = {
    // store only has 3 functions
    store: PropTypes.shape({
      subscribe: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
      getState: PropTypes.func.isRequired
    }),
    context: PropTypes.object,
    children: PropTypes.any
  };

  state = {
    storeState: this.props.store.getState(),
    store: this.props.store
  };

  componentDidMount() {
    this._isMounted = true;
    this.subscribe();
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
    this._isMounted = false;
  }

  componentDidUpdate(prevProps) {
    if (this.props.store !== prevProps.store) {
      if (this.unsubscribe) {
        this.unsubscribe();
      }
      // always re-subscribe
      this.subscribe();
    }
  }

  // always getting the latest redux state
  subscribe() {
    const { store } = this.props;
    // make unsubscribe available everywhere in HOC
    this.unsubscribe = store.subscribe(() => {
      // sync with the latest redux store state
      const newState = store.getState();
      if (!this._isMounted) {
        return;
      }
      this.setState(hocState => {
        if (hocState === store.getState()) {
          return null;
        } else {
          return { storeState: newState };
        }
      });
    });

    // handle edge case where actions may have been dispatched between render() and mount()
    const postMountState = store.getState();
    if (postMountState !== this.state.storeState) {
      this.setState({ storeState: postMountState });
    }
  }

  render() {
    const Context = this.props.context || CustomReactReduxContext;
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
