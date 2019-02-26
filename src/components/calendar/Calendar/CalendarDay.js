/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'

export default ({ day, selectDay, today }) => {
  let sameDay = false
  if (day) {
    sameDay = day.getUTCFullYear() === today.getUTCFullYear() && day.getUTCMonth() === today.getUTCMonth() && day.getUTCDate() === today.getUTCDate()
  }
  return (
    <td className={`CalendarDay${sameDay ? ' same-day' : ''}`} onClick={day ? selectDay(day) : () => {}}>
      {
        day
        ?
        day.getUTCDate()
        :
        null
      }
    </td>
  )
}
