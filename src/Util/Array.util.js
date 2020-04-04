// const groupBy = (xs, key) =>
//   xs.reduce((rv, x) => {
//     (rv[x[key]] = rv[x[key]] || []).push(x)

//     return rv
//   }, {})

// eslint-disable-next-line no-extend-native
Array.prototype.groupBy = function(key) {
  if (!this || !this.reduce)
    return this

  return this.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x)

    return rv
  }, {})
}

export default {}