import React from 'react'
import moment from 'moment'

import CalendarHeader from './CalendarHeader/CalendarHeader'
import CalendarRow from './CalendarRow/CalendarRow';
import Service from './Calendar.service'

const Calendar = () => {
  const calendar = Service.getFormattedWeekListByMonth(moment().format('MM'), moment().format('YYYY'))

  return (
    <>
      <CalendarHeader />
      {
        calendar.map(row => <CalendarRow row={row} />)
      }
    </>
  )
}

export default Calendar