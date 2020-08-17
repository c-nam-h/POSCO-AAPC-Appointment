module.exports = function (req, res) {
  console.log(req.body)
  const truck = req.body.truck
  const task = req.body.task

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

  console.log(category)

  res.render('confirm-appointment', {
    category,
  })
}
