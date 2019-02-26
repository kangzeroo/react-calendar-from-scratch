import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import CustomReactRouterContext from "./CustomReactRouterContext";

export default class CustomReactRouterRoute extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    component: PropTypes.elementType,
    exact: PropTypes.bool,
  }

  notifyMounted(notifyMounted) {
    if (!this._isMounted) {
      this._isMounted = true
      notifyMounted()
    }
  }

  renderOutput = ({ notifyMounted }) => {
  	if (this.props.exact) {
    		if (document.location.pathname === this.props.path) {
          this.notifyMounted(notifyMounted)
  	  		return (
            <div className='react-route'>
              { <this.props.component /> }
            </div>
          )
  	  	} else {
          this.notifyMounted(notifyMounted)
  	  		return null
  	  	}
  	} else {
  		if (document.location.pathname.indexOf(this.props.path) > -1) {
          this.notifyMounted(notifyMounted)
  	  		return (
            <div className='react-route'>
              { <this.props.component /> }
            </div>
          )
  	  	} else {
          this.notifyMounted(notifyMounted)
  	  		return null
  	  	}
  	}
  }

  render() {
    return (
      <CustomReactRouterContext.Consumer>
        {
          context => {
            return this.renderOutput(context)
          }
        }
      </CustomReactRouterContext.Consumer>
    )
  }
}
