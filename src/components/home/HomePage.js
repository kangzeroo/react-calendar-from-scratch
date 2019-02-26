/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 **/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';
import { withRouter } from '../../system/CustomReactRouter';

class HomePage extends PureComponent {

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      back: PropTypes.func.isRequired,
    })
  }
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidMount = async () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (e) => (param) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  redirectURL = (url) => (e) => {
    console.log('redirectURL: ', url)
    this.props.history.push(url)
  }

  render () {
    return (
      <div id='HomePage'>
        <div className='title-header'>
          <div className='page-title'>Home Page</div>
        </div>

        <div className='next-appt-notification'>Next Appointment at:</div>
        <div
          className='view-calendar'
          onClick={this.redirectURL('/calendar')}
        >
          VIEW CALENDAR
        </div>
      </div>
    )
  }
};

// const mapStateToProps = (redux) => {}
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(HomePage);
export default withRouter(HomePage)
