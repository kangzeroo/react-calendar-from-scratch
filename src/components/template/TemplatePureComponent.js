/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { PureComponent } from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default class TemplatePureComponent extends PureComponent {

  state = {}

  // static propTypes = {}
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidMount = async () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (e) => (param) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  render () {
    return (
      <div id='TemplatePureComponent'>
        TemplatePureComponent
      </div>
    )
  }
};

// const mapStateToProps = (redux) => {}
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(TemplatePureComponent);
