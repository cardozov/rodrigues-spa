import React from 'react'

const CalendarRow = ({row}) => (
  <div className="calendar-row">
    {
      row.map(day => <span className="calendar-item">{day.day}</span>)
    }
  </div>
)

export default CalendarRow