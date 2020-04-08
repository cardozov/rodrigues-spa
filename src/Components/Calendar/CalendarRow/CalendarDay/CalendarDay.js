import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Paper } from '@material-ui/core'

const CalendarDay = ({reference}) => {
  const isSameDate = dates => {
    const standardizeArray = dates.map(d => moment(d).format('YYYY-MM-DD'))

    return standardizeArray.every(d => d === standardizeArray[0])
  }

  const eventClassesNames = {
    'BOOKING': 'event-booking',
    'VISIT': 'event-visiting'
  }

  const events = useSelector(state => state.events.filter(({date}) => isSameDate([date, reference.obj])))

  return (
    <Paper elevation={3} className={`event-container calendar-item${reference.disabled ? '--disabled' : ''}`} key={reference.day}>
      <span>{reference.day}</span>
      {events.map((event, i) => <div key={i} className={eventClassesNames[event.type]}></div>)}
    </Paper>
  )
}

export default CalendarDay