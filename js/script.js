const recognition = new webkitSpeechRecognition()
recognition.lang = 'ja-JP'


let isMicrophoneOn = false

const status = document.querySelector('#status')

document.querySelector('#start').addEventListener('click', () => {
  recognition.start()
  status.innerHTML = '音声認識中...'
  isMicrophoneOn = true
})

document.querySelector('#end').addEventListener('click', () => {
  isMicrophoneOn = false
  status.innerHTML = '音声未認識'
})

recognition.onsoundstart = () => {
  document.querySelector('#avator').setAttribute('src', '/img/dbk_speak.svg')
}

recognition.onsoundend = () => {
  document.querySelector('#avator').setAttribute('src', '/img/dbk_close.svg')
}

recognition.onend = () => {
  isMicrophoneOn && recognition.start()
}
