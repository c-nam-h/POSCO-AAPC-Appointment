const Appointment = require('../models/Appointment')

module.exports = function (req, res) {
  console.log(req.body)
  const carrier = req.body.carrier
  const releaseNo = req.body.releaseNo
  const destination = req.body.destination
  const truckNo = req.body.truckNo
  const appointmentTimeDate = req.body.appointmentTimeSelect
  const appointmentTime = appointmentTimeDate.substring(
    0,
    appointmentTimeDate.indexOf(' ')
  )
  const appointmentDateTemp = new Date(
    appointmentTimeDate.substring(appointmentTimeDate.indexOf(' ') + 1)
  )

  const selectedAppointmentYear = appointmentDateTemp.getFullYear()
  const selectedAppointmentMonth = appointmentDateTemp.getMonth() + 1
  const selectedAppointmentDate = appointmentDateTemp.getDate()

  const appointmentDate =
    selectedAppointmentYear +
    '-' +
    selectedAppointmentMonth +
    '-' +
    selectedAppointmentDate

  const appointmentCategory = req.body.category
  Appointment.create({
    carrier: carrier,
    releaseNo: releaseNo,
    destination: destination,
    customer: null,
    truckNo: truckNo,
    appointmentDate: appointmentDate,
    appointmentTime: appointmentTime,
    appointmentCategory: appointmentCategory,
    appointmentSection: 'A',
    truckType: 'Flatbed',
    task: 'Delivery',
  })

  res.render('scheduling-appointment')
}
