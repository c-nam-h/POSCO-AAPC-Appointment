module.exports = function (req, res) {
  let category = ''
  if (truck === 'flatbed' && task === 'delivery') {
    category = 'AR'
  } else if (truck === 'flatbed' && task === 'pickup') {
    category = 'SB'
  } else if (truck === 'dryvan' && task === 'delivery') {
    category = 'CR'
  } else if (truck === 'dryvan' && task === 'pickup') {
    category = 'CS'
  }
  next()
}
