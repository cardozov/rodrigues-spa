import React from 'react'

const CalendarDay = ({reference}) => (
  <span className={`calendar-item${reference.disabled ? '--disabled' : ''}`} key={reference.day}>{reference.day}</span>
)

export default CalendarDay