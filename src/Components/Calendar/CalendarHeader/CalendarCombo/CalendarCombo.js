import React from 'react'

const CalendarCombo = ({ calendarList, onChange, defaultValue }) => (
  <select id="month-select" className="calendar-select" onChange={onChange} defaultValue={defaultValue}>
    {
      calendarList.map((item, idx) => <option key={idx} value={item}>{item}</option>)
    }
  </select>
)

export default CalendarCombo