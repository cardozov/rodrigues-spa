import React from 'react'
import './ClendarRow.scss'
import CalendarRowHeader from './CalendarRowHeader/CalendarRowHeader';

const CalendarRow = ({row, first}) => (
  <div>
    { first && <CalendarRowHeader className="calendar-row" /> }
    <div className="calendar-row">
      {
        row.map(day => <span className={`calendar-item${day.disabled ? '--disabled' : ''}`}>{day.day}</span>)
      }
    </div>
  </div>
)

export default CalendarRow