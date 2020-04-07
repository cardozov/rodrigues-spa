import moment from 'moment'

const INITIAL_STATE = {
  month: parseInt(moment().format('MM')) -1,
  year: moment().format('YYYY')
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_CALENDAR':
    return {
      month: action.payload.month,
      year: action.payload.year
    }
  
    default:
      return state
  }
}