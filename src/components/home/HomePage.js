/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 **/

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown'
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

  generateMarkdown = () => {
    const converter = new showdown.Converter()
    const md = `
      # React Calendar App
      Practice ES7 & React v16+ by implementing a calendar component library with custom made react-redux and react-router.

      ## Core Objective
      Create a web app with a calendar that:
      - Displays any month of any year with the right start Day 1 (eg. Feb 1st 2019 starts on a Friday)
      - Shows the day of the week properly

      ## Additional Objectives
      - Can add/remove events to the calendar
      - Events have a title, description, date, start datetime and end datetime
      - Calendar can display multiple events in a day
      - Calendar can display multi-day events

      ## Constraints
      You cannot use any of the following libraries. You must re-implement them from scratch.
      - 'react-router'
      - 'react-redux'
    `
    return converter.makeHtml(md)
  }

  render () {
    return (
      <div id='HomePage'>
        <div className='title-header'>
          <div className='page-title'>Home Page</div>
        </div>

        {/*<div className='next-appt-notification'>Next Appointment at:</div>*/}
        <div
          className='view-calendar'
          onClick={this.redirectURL('/')}
        >
          VIEW CALENDAR
        </div>

        <br/><br/>
        {/*<div id="markdown">
          {this.generateMarkdown()}
        </div>*/}
      </div>
    )
  }
};

// const mapStateToProps = (redux) => {}
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(HomePage);
export default withRouter(HomePage)
