/*  eslint no-extend-native: 0 */

Array.prototype.last = function() {
  return this.slice(-1)[0]
}

Array.prototype.groupBy = function(key) {
  if (!this || !this.reduce)
    return this

  return this.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x)

    return rv
  }, {})
}

export default {}