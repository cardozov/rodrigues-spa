export const ptBrMonthList = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export const yearList = Array(10).fill(0).map((_, idx) => idx + new Date().getFullYear() -1)

export const createAction = dispatch => payload => dispatch({ type: 'CHANGE_CALENDAR', payload })

export const getCurrentMonthAndYear = (m, y) => `${ptBrMonthList[m]}/${y}`