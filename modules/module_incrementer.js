

module.exports = function( val ) {
  return function increment( x ) {
    return x + val
  }
}