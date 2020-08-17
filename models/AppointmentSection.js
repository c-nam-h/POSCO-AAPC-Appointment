const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSectionSchema = new Schema({
  _id: String,
})

const AppointmentSection = mongoose.model(
  'AppointmentSection',
  AppointmentSectionSchema
)

module.exports = AppointmentSection
