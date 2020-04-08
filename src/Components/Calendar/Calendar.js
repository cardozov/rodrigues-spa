import React from 'react'
import { useSelector } from 'react-redux'

import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarRow from './CalendarRow/CalendarRow'
import Service from './Calendar.service'

const Calendar = () => {
  const state = useSelector(state => state.calendar)

  const calendar = Service.getFormattedWeekListByMonthAndYear(state.month, state.year)

  return (
    <div className="calendar-container">
      <CalendarHeader/>
      
      { calendar.map((row, i) => <CalendarRow key={i} row={row} first={i===0} />) }
    </div>
  )
}

export default Calendar