import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

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
    <div className={`event-container calendar-item${reference.disabled ? '--disabled' : ''}`} key={reference.day}>
      <span>{reference.day}</span>
      {events.map(event => <div className={eventClassesNames[event.type]}></div>)}
    </div>
  )
}

export default CalendarDay