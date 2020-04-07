const mockedState = [
  { date: '2020-04-03', order: '1234', type: 'BOOKING'},
  { date: '2020-04-04', order: '1234', type: 'BOOKING'},
  { date: '2020-04-05', order: '1234', type: 'BOOKING'},
  { date: '2020-04-15', order: '4321', type: 'VISIT'}
]

export default (state = mockedState, action) => {
  switch (action.type) {
    case 'CHANGE_EVENTS':
    return action.payload
  
    default:
      return state
  }
}