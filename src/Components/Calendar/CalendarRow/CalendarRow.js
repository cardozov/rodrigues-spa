import React from 'react'

import './ClendarRow.scss'
import CalendarRowHeader from './CalendarRowHeader/CalendarRowHeader'
import CalendarDay from './CalendarDay/CalendarDay'

const CalendarRow = ({row, first}) => (
  <div>
    { first && <CalendarRowHeader className="calendar-row" /> }
    <div className="calendar-row">

      { row.map(day => <CalendarDay key={day.day} reference={day}/>) }
    
    </div>
  </div>
)

export default CalendarRow