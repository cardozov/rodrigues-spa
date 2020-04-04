import moment from 'moment'

import '../Util/Array.util'

const getFormattedCalendar = moment => ({
  week: moment.week(),
  day: moment.format('DD'),
  obj: moment,
  weekDay: moment.format('dddd')
})

const fillWeek = (array, init) => {
  init
    ? array.unshift(getFormattedCalendar(array[0].obj.subtract(1, 'd')))
    : array.push(getFormattedCalendar(array.slice(-1)[0].obj.add(1, 'd')))

  return array.length === 7 ? array : fillWeek(array, init)
}

const fullArrayOfDaysFormattedForCalendar = (month, year) =>
  new Array(moment([year, month]).endOf('month').date())
    .fill(undefined)
    .map((_, idx) => getFormattedCalendar(moment([year, month, idx + 1])))

const fillFirstAndLastWeeks = monthWeeks => {
  if (monthWeeks[0].length < 7) {
    monthWeeks[0] = fillWeek(monthWeeks[0], true)
  }
  
  if (monthWeeks.slice(-1)[0].length < 7) {
    monthWeeks.slice(-1)[0] = fillWeek(monthWeeks.slice(-1)[0], false)
  }

  return monthWeeks
}

const getFormattedWeekListByMonth = (month, year) => {
  const full = fullArrayOfDaysFormattedForCalendar(month, year)
  
  const grouped = full.groupBy('week')
  
  const final = []
  for (let week in grouped) {
    final.push(grouped[week])
  }

  return fillFirstAndLastWeeks(final)
}

export default {
  getFormattedWeekListByMonth
}