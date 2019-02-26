/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */


 import React, { Component, PureComponent } from 'react'
 import logo from "../../../assets/logo.svg";
 import "./DemoPage.css"
 import { connect } from "react-redux";
 import PropTypes from 'prop-types'
 import { templateIncrementCounter } from "../../../actions/template/template_actions";

 // --------------------- Component --------------------- //

export default class DemoPage extends Component {
	render() {
	  return (
	    <div id="DemoPage" className="App-header">
	      <img src={logo} className="App-logo" alt="logo" />
	      <DemoCounter />
	    </div>
	  )
	}
}

// --------------------- Pure Component --------------------- //

class NakedDemoCounter extends PureComponent {

  static propTypes = {
    count: PropTypes.number.isRequired,
    templateIncrementCounter: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div id="DemoCounter">
        <DemoCounterBtn
          amount={-1}
          symbol='-'
          templateIncrementCounter={this.props.templateIncrementCounter}
        />
        <div className="increment-status">{this.props.count}</div>
        <DemoCounterBtn
          amount={1}
          symbol='+'
          templateIncrementCounter={this.props.templateIncrementCounter}
        />
      </div>
    );
  }
}

const mapStateToProps = redux => {
  return {
    count: redux.template.count
  };
};

const mapActionsToRedux = {
  templateIncrementCounter,
};

const DemoCounter = connect(mapStateToProps, mapActionsToRedux)(NakedDemoCounter);



// --------------------- Functional Component --------------------- //

const DemoCounterBtn = ({ amount, symbol, templateIncrementCounter }) => {
  return (
    <div
      className="increment-btn"
      onClick={() => templateIncrementCounter(amount)}
    >
      { symbol }
    </div>
  )
}
