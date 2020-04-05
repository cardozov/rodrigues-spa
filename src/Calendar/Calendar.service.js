import moment from 'moment'

import '../Util/Array.util'

const getFormattedCalendar = (moment, disabled) => ({
  week: moment.week(),
  day: moment.format('DD'),
  obj: moment,
  weekDay: moment.format('dddd'),
  disabled
})

const fillWeek = (array, init) => {
  init
    ? array.unshift(getFormattedCalendar(array[0].obj.subtract(1, 'd'), true))
    : array.push(getFormattedCalendar(array.last().obj.add(1, 'd'), true))

  return array.length === 7 ? array : fillWeek(array, init)
}

const daysForSpecificMonthAndYearOnCalendarFormat = (month, year) =>
  new Array(moment([year, month]).endOf('month').date())
    .fill(undefined)
    .map((_, idx) => getFormattedCalendar(moment([year, month, idx + 1])))

const fillFirstAndLastWeeks = monthWeeks => {
  if (monthWeeks[0].length < 7) {
    monthWeeks[0] = fillWeek(monthWeeks[0], true)
  }
  
  if (monthWeeks.last().length < 7) {
    // Object.assign is required once "last()" is not recognized an assignable statement
    Object.assign(monthWeeks.last(), fillWeek(monthWeeks.last(), false))
  }

  return monthWeeks
}

const getFormattedWeekListByMonthAndYear = (month, year) => {
  const full = daysForSpecificMonthAndYearOnCalendarFormat(month, year)
  
  const grouped = full.groupBy('week')
  
  const final = []
  for (let week in grouped) {
    final.push(grouped[week])
  }

  return fillFirstAndLastWeeks(final)
}

export default {
  getFormattedWeekListByMonthAndYear
}