import { combineReducers } from 'redux'

import calendar from './CalendarReducer'
import events from './EventReducer'

const rootReducer = combineReducers({
  calendar,
  events
})

export default rootReducer