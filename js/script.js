const recognition = new webkitSpeechRecognition()
recognition.lang = 'ja-JP'

recognition.onsoundstart = () => {
  console.log('音声開始')
}

recognition.onsoundend = () => {
  console.log('音声終了！')
}

recognition.onend = () => {
  recognition.start()
}

recognition.start()
