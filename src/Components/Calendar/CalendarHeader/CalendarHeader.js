import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './CalendarHeader.scss'
import CalendarCombo from './CalendarCombo/CalendarCombo'
import { ptBrMonthList, yearList, getCurrentMonthAndYear, createAction } from './CalendarHeader.service'
import { Typography } from '@material-ui/core'

const CalendarHeader = () => {
  const { month, year } = useSelector(state => state.calendar)

  const dispatch = useDispatch()

  const monthCahnged = e => {
    createAction(dispatch)({month: ptBrMonthList.indexOf(e.target.value), year})
  }

  const yearCahnged = e => {
    createAction(dispatch)({year: e.target.value, month})
  }

  return (
    <div className="calendar-header-container">
      <Typography variant="h2" >{getCurrentMonthAndYear(month, year)}</Typography>

      <div className="calendar-header-combo-wrapper">
        <CalendarCombo calendarList={ptBrMonthList} onChange={monthCahnged} defaultValue={ptBrMonthList[month]} />

        <CalendarCombo calendarList={yearList} onChange={yearCahnged} defaultValue={year} />
      </div>
    </div>
  )
}

export default CalendarHeader