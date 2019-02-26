/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import './Calendar.css'
import PropTypes from 'prop-types'
import { dayOfWeek, monthOfYear, dayOfTheWeek, daysInMonth, isLeapYear } from '../api/calendar-constants'
import CalendarWeek from './CalendarWeek'

export default class Calendar extends Component {

  state = {
    now: new Date(),
  }

  // static propTypes = {}
  // static defaultProps = {}

  // getDerivedStateFromProps = () => {}
  // componentDidUpdate = () => {}
  // componentWillUnmount = () => {}

  // fnEventHandlerWithoutBind = (params) => (e) => {}
  // fnRegular = () => { this.setState((prevState, currProps) => ({})) }

  selectDay = (day) => (e) => {
    this.setState({ now: day })
  }

  incrementMonth = (now, amount) => (e) => {
    let nextMonth = now.getUTCMonth() + 1 + amount
    if (now.getUTCMonth() + 1 + amount < 1) {
      nextMonth = 12
    } else if (now.getUTCMonth() + 1 + amount > 12) {
      nextMonth = 1
    }
    const nextDate = new Date(`
      ${nextMonth}
      ${now.getUTCDate()}
      ${now.getUTCFullYear()}
    `)
    this.setState({ now: nextDate })
  }

  incrementYear = (now, amount) => (e) => {
    const nextDate = new Date(`
      ${now.getUTCMonth() + 1}
      ${now.getUTCDate()}
      ${now.getUTCFullYear() + amount}
    `)
    this.setState({ now: nextDate })
  }

  /**
   * -------- generateWeeks() -------
   * Should generate a months worth of weeks to display on calendar
   * 1. Find start day of week for this month
   * 2. Generate the 1st week <tr>
   * 3. Generate subsequent week <tr>
   * 4. Generate last week <tr>
  **/
  generateWeeks = (datetime) => {
    let daysCount = daysInMonth[datetime.getUTCMonth()]
    if (isLeapYear(datetime.getUTCFullYear()) && datetime.getUTCMonth()+1 === 1) {
      daysCount = 29
    }
    const year = datetime.getUTCFullYear()
    const month = monthOfYear[datetime.getUTCMonth() + 1]
    const daysOfMonth = Array.from({length:daysCount}, (x,i) => i+1).map(day => new Date(`${month} ${day} ${year}`))

    const weeks = []
    let currentWeek = Array.from({length:7}, (x,i) => null)
    for (let i = 0; i <= daysCount-1; i++) {
      if (dayOfTheWeek(daysOfMonth[i]) === 6) {
        currentWeek[dayOfTheWeek(daysOfMonth[i])] = daysOfMonth[i]
        weeks.push(currentWeek)
        currentWeek = Array.from({length:7}, (x,i) => null)
      } else {
        currentWeek[dayOfTheWeek(daysOfMonth[i])] = daysOfMonth[i]
      }
      if (i === daysCount-1) {
        weeks.push(currentWeek)
      }
    }
    return weeks.map((week, i) => {
      return (
        <CalendarWeek key={`week-${i}`} week={week} selectDay={this.selectDay} today={datetime} />
      )
    })
  }

  render () {
    const { now } = this.state
    return (
      <div id='Calendar'>
        <div id='Calendar-Controls'>
          <div className='Calendar-Controls-Panel'>
            <div className='Calendar-Control' onClick={this.incrementMonth(now, -1)}>{`<`}</div>
            <div>
              {monthOfYear[now.getUTCMonth() + 1]}
            </div>
            <div className='Calendar-Control' onClick={this.incrementMonth(now, 1)}>{`>`}</div>
          </div>
          <div className='Calendar-Controls-Panel'>
            <div className='Calendar-Control' onClick={this.incrementYear(now, -1)}>{`-`}</div>
            <div>
              {now.getUTCFullYear()}
            </div>
            <div className='Calendar-Control' onClick={this.incrementYear(now, 1)}>{`+`}</div>
          </div>
        </div>
        <table id='Calendar-Display'>
          <thead>
            <tr id='Calendar-Week-Headers'>
              <th className='Calendar-Week-Header'>Sun</th>
              <th className='Calendar-Week-Header'>Mon</th>
              <th className='Calendar-Week-Header'>Tue</th>
              <th className='Calendar-Week-Header'>Wed</th>
              <th className='Calendar-Week-Header'>Thur</th>
              <th className='Calendar-Week-Header'>Fri</th>
              <th className='Calendar-Week-Header'>Sat</th>
            </tr>
          </thead>
          <tbody>
            {
              this.generateWeeks(now)
            }
          </tbody>
        </table>
      </div>
    )
  }
};

// const mapStateToProps = (redux) => {}
// const mapActionsToComponent = {}

// export default connect(mapStateToProps, mapActionsToComponent)(Calendar);
