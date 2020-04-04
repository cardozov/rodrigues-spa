import React from 'react'
import moment from 'moment'

const CalendarHeader = () => {
  const monthInPtBr = month => {
    const pt = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const es = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return pt[es.indexOf(month)]
  }

  const getCurrentMonthAndYear = () => {
    const month = monthInPtBr(moment().format('MMM'))

    return `${month}/${moment().format('YYYY')}`
  }

  return (
    <h1>{getCurrentMonthAndYear()}</h1>
  )
}

export default CalendarHeader