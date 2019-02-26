/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import CalendarDay from './CalendarDay'

export default ({ week, selectDay, today }) => {
  return (
    <tr className="CalendarWeek">
      {
        week.map((day, i) => (
          <CalendarDay key={`day-${i}`} day={day} selectDay={selectDay} today={today} />
        ))
      }
    </tr>
  )
}
