const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');
let timer = document.querySelector('.timer')

let hours = 0
let minutes = 0
var seconds = 0
let milliseconds = 0

var interval

btnStart.addEventListener('click', (event) => {
  watch()
  interval = setInterval(() => {watch();}, 10)
  btnStart.style.display = "none"
})

btnPause.addEventListener('click', (event) => {
  clearInterval(interval)
  btnStart.innerHTML = "Continuar"
  btnStart.style.display = "block"
})

btnStop.addEventListener('click', (event) => {
  resetTimer()
  btnStart.style.display = "block"
  btnPause.style.display = "block"
  btnStart.innerHTML = "Iniciar"
})

function watch() {
  if((milliseconds += 10) === 1000) {
    milliseconds = 0
    seconds++
  }
  if(seconds==60) {
    minutes++
    seconds = 0
  }
  if(minutes == 60) {
    hours++
    minutes = 0
  }

  document.querySelector('.timer').innerHTML = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}:${threeDigits(milliseconds)}`
}

function twoDigits(digit) {
  if(digit < 10) {
    return ('0' + digit)
  } else {
    return (digit)
  }
}

function threeDigits(digit) {
  if(digit < 10) {
    return ('00' + digit)
  }
  if(digit < 100 && digit >= 10) {
    return ('0' + digit)
  } else {
    return (digit)
  }
}

function resetTimer() {
  clearInterval(interval)
  hours = 0
  minutes = 0
  seconds = 0
  document.querySelector('.timer').innerHTML = `00:00:00:000`
}