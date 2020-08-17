const moment = require('moment-timezone')

const AppointmentSectionSetting = require('../models/AppointmentSectionSetting')
const getMonday = require('../public/js/getMonday')

module.exports = async function (req, res) {
  const setting = await AppointmentSectionSetting.find()

  global.appointmentTimesSectionA = null

  for (var i = 0; i < setting.length; i++) {
    if (setting[i].section === 'A') {
      appointmentTimesSectionA = setting[i].appointmentTimes
    }
  }

  console.log(appointmentTimesSectionA)

  const selectedDate = moment(req.params.date)
    .tz('America/Chicago')
    .format('dddd, MMMM D YYYY')
  console.log(selectedDate)

  res.render('appointments', {
    now: null,
    selectedDate,
    appointmentTimesSectionA,
  })
}
