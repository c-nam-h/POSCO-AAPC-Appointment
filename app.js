const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/posco-aapc-appointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schedulingAppointmentPageController = require('./controllers/schedulingAppointmentPage')
app.get('/scheduling-appointment', schedulingAppointmentPageController)

const confirmAppointmentPageController = require('./controllers/confirmAppointmentPage')
app.post('/scheduling-appointment', confirmAppointmentPageController)

const confirmAppointment = require('./controllers/confirmAppointment')
app.post('/confirm-appointment', confirmAppointment)

const appointmentDefaultPageController = require('./controllers/appointmentDefaultPage')
app.get('/appointments', appointmentDefaultPageController)

const appointmentDynamicPageController = require('./controllers/appointmentDynamicPage')
app.get('/appointments/:date', appointmentDynamicPageController)

app.get('/register', function (req, res) {
  res.render('register')
})

app.get('/register-complete', function (req, res) {
  res.render('register-complete')
})

app.get('/setting', function (req, res) {
  res.render('setting')
})

app.get('/setting-appointments', function (req, res) {
  res.render('setting-appointments')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
