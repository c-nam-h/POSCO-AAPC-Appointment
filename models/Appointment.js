const mongoose = require('mongoose')
const Schema = mongoose.Schema

const getMonday = require('../public/js/getMonday')
const moment = require('moment-timezone')
const now = moment().tz('America/Chicago')

const AppointmentSchema = new Schema({
  carrier: String,
  releaseNo: String,
  destination: String,
  customer: String,
  truckNo: String,
  appointmentDate: String,
  appointmentTime: String,
  appointmentCategory: String,
  appointmentSection: String,
  truckType: String,
  task: String,
  bay: String,
  remark: String,
})

const Appointment = mongoose.model('Appointment', AppointmentSchema)

module.exports = Appointment
