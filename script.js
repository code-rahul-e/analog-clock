const secondHand = document.querySelector('#second')
const minuteHand = document.querySelector('#minute')
const hourHand = document.querySelector('#hour')

function setClock() {
  const date = new Date()
  const seconds = date.getSeconds() / 60
  const minutes = date.getMinutes() / 60
  const hours = date.getHours() / 12

  setRotation(secondHand, seconds)
  setRotation(minuteHand, minutes)
  setRotation(hourHand, hours)
}

function setRotation(element, fraction) {
  element.style.setProperty('--rotation', fraction * 360)
}

setInterval(setClock, 1000)
