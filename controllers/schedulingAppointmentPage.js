const moment = require('moment-timezone')
let now = moment().tz('America/Chicago').format('dddd, MMMM D YYYY')
const getMonday = require('../public/js/getMonday')

module.exports = function (req, res) {
  // declare a global variable for current week's Monday and set the hours to 0
  let year = getMonday[0] // year of current week's Monday
  let month = getMonday[1] // month
  let date = getMonday[2] // date

  global.monday = new Date(new Date(year, month, date).setUTCHours(0, 0, 0, 0))
  global.sunday = new Date(
    new Date(year, month, date + 14).setUTCHours(0, 0, 0, 0)
  )
  console.log(monday, sunday)

  global.daysOfTwoWeeks = []
  for (
    var d = new Date(new Date(year, month, date + 14).setUTCHours(0, 0, 0, 0));
    monday <= d;
    d.setDate(d.getDate() - 1)
  ) {
    daysOfTwoWeeks.push(new Date(d))
  }
  console.log(daysOfTwoWeeks)

  // if month from getMonday function return single digit numbers
  if (month.toString().length === 1) {
    month += 1 // increase the value of month by 1 because 0 - 11 is the numbers used for month
    month = '0' + month // and add a string '0' in front of the value
  } // because the shipping date has a string 'z0' in front of month

  // same goes for the date
  if (date.toString().length === 1) {
    date = '0' + date
  }

  const dateOfMonday = year + '-' + month + '-' + date

  res.render('scheduling-appointment')
}
