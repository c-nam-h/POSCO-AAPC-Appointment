const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSectionSettingsScehma = new Schema({
  section: {
    type: String,
    ref: 'AppointmentSection',
  },
  appointmentTimes: [String],
  settingStartDate: Date,
  settingEndDate: Date,
  use: Boolean,
})

const AppointmentSectionSetting = mongoose.model(
  'AppointmentSectionSetting',
  AppointmentSectionSettingsScehma
)

module.exports = AppointmentSectionSetting
