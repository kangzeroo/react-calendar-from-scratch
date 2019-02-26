/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

// @flow

export const dayOfWeek = {
  "0": "Sunday",
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
}

export const monthOfYear = {
  "1": "January",
  "2": "Febuary",
  "3": "March",
  "4": "April",
  "5": "May",
  "6": "June",
  "7": "July",
  "8": "August",
  "9": "September",
  "10": "October",
  "11": "November",
  "12": "December",
}

export const daysInMonth = {
  "0": 31,
  "1": 28,
  "2": 31,
  "3": 30,
  "4": 31,
  "5": 30,
  "6": 31,
  "7": 31,
  "8": 30,
  "9": 31,
  "10": 30,
  "11": 31,
}

export const dayOfTheWeek = (datetime: Date): number => {
  const weekSplit = daysSince1800(datetime)%7/7
  if (weekSplit < 1/7) {
    return 3
  } else if (weekSplit < 2/7) {
    return 4
  } else if (weekSplit < 3/7) {
    return 5
  } else if (weekSplit < 4/7) {
    return 6
  } else if (weekSplit < 5/7) {
    return 0
  } else if (weekSplit < 6/7) {
    return 1
  } else if (weekSplit < 7/7) {
    return 2
  }
}

export const isLeapYear = (year: number): boolean => {
  return (year%4 === 0 && year%100 !== 0) || (year%4 === 0 && year%400 === 0)
}

export const yearAsDays = (y: number):number => {
  const days = Array.from({length:y-1800}, (x,i) => 1800+i).reduce((acc, curr) => {
    const d = isLeapYear(curr) ? 366 : 365
    return acc + d
  }, 0)
  return days
}

export const monthAsDays = (m: number, leap: boolean):number => {
  const days = Array.from({length:m}, (x,i) => i).reduce((acc, curr) => {
    if (leap && curr === 1) {
      return acc + daysInMonth[curr] + 1
    }
    return acc + daysInMonth[curr]
  }, 0)
  return days
}

export const daysSince1800 = (datetime: Date, inclusive: boolean): number => {
  const m = datetime.getUTCMonth();
  const days = datetime.getUTCDate();
  const y = datetime.getUTCFullYear();
  const today = inclusive ? 0 : -1
  return yearAsDays(y) + monthAsDays(m, isLeapYear(y)) + days + today
}
