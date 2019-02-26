/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import './CalendarPage.css'
import { withRouter } from '../../system/CustomReactRouter';
import Calendar from './Calendar/Calendar'

class CalendarPage extends PureComponent {

  state = {}

  // static propTypes = {}
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidMount = async () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (param) => (e) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  redirectURL = (url) => (e) => {
    console.log('redirectURL: ', url)
    this.props.history.push(url)
  }

  render () {
    return (
      <div id='CalendarPage'>
        <div
          className='back-btn-div'
          onClick={this.redirectURL('/home')}>
          <div className='back-btn'>↩</div>
        </div>
        <div className='title-header'>
          <div className='page-title'>Calendar Page</div>
        </div>
        <div className='body-content'>
          <Calendar />
        </div>
      </div>
    )
  }
};

// const mapStateToProps = (redux) => {}
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(CalendarPage);
export default withRouter(CalendarPage)
