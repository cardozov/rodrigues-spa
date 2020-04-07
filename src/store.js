import { createStore } from 'redux'

const stateFn = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_CALENDAR':
      return Object.assign(state, { calendar: action.calendar })
    default:
      return state
  }
}

export default createStore(stateFn)