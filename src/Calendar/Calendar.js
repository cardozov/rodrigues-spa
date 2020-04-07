import React, { useState } from 'react'
import moment from 'moment'

import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarRow from './CalendarRow/CalendarRow';
import Service from './Calendar.service'

const Calendar = () => {
  const [state, setState] = useState({
    month: parseInt(moment().format('MM')) -1,
    year: moment().format('YYYY')
  })

  const calendar = Service.getFormattedWeekListByMonthAndYear(state.month, state.year)

  return (
    <>
      <CalendarHeader month={state.month} year={state.year} change={setState}/>
      
      { calendar.map((row, i) => <CalendarRow row={row} first={i===0} />) }
    </>
  )
}

export default Calendar