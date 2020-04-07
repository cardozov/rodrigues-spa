import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CalendarCombo from './CalendarCombo/CalendarCombo'
import { ptBrMonthList, yearList, getCurrentMonthAndYear, createAction } from './CalendarHeader.service'

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
    <>
      <h1>{getCurrentMonthAndYear(month, year)}</h1>

      <div>
        <CalendarCombo calendarList={ptBrMonthList} onChange={monthCahnged} defaultValue={ptBrMonthList[month]} />

        <CalendarCombo calendarList={yearList} onChange={yearCahnged} defaultValue={year} />
      </div>
    </>
  )
}

export default CalendarHeader