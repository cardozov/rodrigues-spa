import React from 'react'

import './CalendarRowHeader.scss'

const CalendarRowHeader = () => {
  const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

  return (
    <div className='calendar-row'>
      {
        weekdays.map(day => <span key={day} className='calendar-header-item'>{day}</span>)
      }
    </div>
  )
}

export default CalendarRowHeader