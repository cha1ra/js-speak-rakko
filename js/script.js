const recognition = new webkitSpeechRecognition()
recognition.lang = 'ja-JP'


let isMicrophoneOn = false

document.querySelector('#start').addEventListener('click', () => {
  recognition.start()
  isMicrophoneOn = true
})

document.querySelector('#end').addEventListener('click', () => {
  isMicrophoneOn = false
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
