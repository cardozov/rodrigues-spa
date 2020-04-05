import React from 'react'

const CalendarHeader = ({month, year, change}) => {
  const ptBrMonthList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const yearList = Array(10).fill(0).map((_, idx) => idx + new Date().getFullYear() -1)

  const getCurrentMonthAndYear = (m, y) => `${ptBrMonthList[m]}/${y}`

  const monthCahnged = e => {
    change({month: ptBrMonthList.indexOf(e.target.value), year})
  }

  const yearCahnged = e => {
    change({year: e.target.value, month})
  }

  return (
    <>
      <h1>{getCurrentMonthAndYear(month, year)}</h1>
      <div>
        <select id="month-select" className="calendar-select" onChange={monthCahnged}>
          {
            ptBrMonthList.map((m, i) => <option key={i} selected={i===month} value={m}>{m}</option>)
          }
        </select>
        
        <select id="year-select" className="calendar-select" onChange={yearCahnged}>
          {
            yearList.map((y, i) => <option key={i} selected={y === +year} value={y}>{y}</option>)
          }
        </select>
      </div>
    </>
  )
}

export default CalendarHeader