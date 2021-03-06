// event listener for radio buttons in the scheduling page
const firstGroupRadios = document.querySelectorAll('input[name=task]') // select all radio buttons with the name, task
let previousRadio1 = null // declare a variable for the previous radio button value, which will store previously clicked radio button's value
for (var i = 0; i < firstGroupRadios.length; i++) {
  firstGroupRadios[i].addEventListener('change', function () {
    if (previousRadio1 !== null) {
      document.querySelector(
        'label[for=' + previousRadio1.value + ']'
      ).style.background = 'white' // previously selected radio button's label background will change to white
    }

    if (this !== previousRadio1) {
      // if the newly clicked button is not the previous radio button
      previousRadio1 = this // store the current button's value to this variable
      document.querySelector('label[for=' + this.value + ']').style.background =
        'lightblue' // change the selected radio button's label's background color to lightblue
    }
  })
}

const secondGroupRadios = document.querySelectorAll('input[name=truck]')
let previousRadio2 = null
for (var i = 0; i < secondGroupRadios.length; i++) {
  secondGroupRadios[i].addEventListener('change', function () {
    if (previousRadio2 !== null) {
      document.querySelector(
        'label[for=' + previousRadio2.value + ']'
      ).style.background = 'white'
    }

    if (this !== previousRadio2) {
      previousRadio2 = this
      document.querySelector('label[for=' + this.value + ']').style.background =
        'lightblue'
    }
  })
}

// const appointmentTimesGroupRadios = document.querySelectorAll(
//   'input[name=appointmentTimeSelect]'
// )
// const labels = document.querySelectorAll('label[test=yes]')

// for (var i = 0; i < 80; i++) {
//   appointmentTimesGroupRadios[i].addEventListener('change', function () {
//     labels[i].style.background = 'black' // label을 specify 하게 정해줘야함.. 방법을 찾자
//   })
// }

// carousel javascript from W3schools
var slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n))
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  var i
  var slides = document.getElementsByClassName('mySlides')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }

  slides[slideIndex - 1].style.display = 'block'
}
