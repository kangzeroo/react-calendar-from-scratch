/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { PureComponent } from 'react';
import { Router, Route } from "../system/CustomReactRouter/index";
import DemoPage from '../components/template/demo/DemoPage'
import HomePage from '../components/home/HomePage'
import CalendarPage from '../components/calendar/CalendarPage'

export default class Routes extends PureComponent {
  render () {
    return (
  	 <Router defaultPath="/">
         <Route path="/" exact component={HomePage} />
         <Route path="/calendar" exact component={CalendarPage} />
         <Route path="/demo" exact component={DemoPage} />
      </Router>
    )
  }
}
