import React from 'react'
import { Select, MenuItem } from '@material-ui/core'

const CalendarCombo = ({ calendarList, onChange, defaultValue }) => (
  <Select value={defaultValue} onChange={onChange} displayEmpty className="calendar-select">
    {
      calendarList.map((item, idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)
    }
  </Select>
)

export default CalendarCombo