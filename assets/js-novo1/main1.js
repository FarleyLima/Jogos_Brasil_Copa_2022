import app from './firebase.js'

import {
  getFirestore,
  doc,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'

const db = getFirestore(app)

function showConfet(id) {
  const element = document.getElementById(id)
  party.confetti(element)
}

//FUNÇÃO PARA O PLACAR D0 1º JOGO
function updateScore(id, br, other) {
  const element = document.getElementById(id)
  element.innerText = `${br} x ${other}`
}

//FUNÇÃO PARA O PLACAR D0 2º JOGO
function updateScore2(id, br, other) {
  const element = document.getElementById(id)
  element.innerText = `${br} x ${other}`
}

//FUNÇÃO PARA O PLACAR D0 3º JOGO
function updateScore3(id, br, other) {
  const element = document.getElementById(id)
  element.innerText = `${br} x ${other}`
}

function throwGalvao() {
  const audio = new Audio('assets/audio/gol.mp3')
  audio.playbackRate = 1.5 // PARA REPRODUZIR O AUDIO MAIS RÁPIDO
  audio.play()
}

function throwNaoGalvao() {
  const audio2 = new Audio('assets/audio/gol2.mp3')
  audio2.playbackRate = 1.5
  audio2.play()
}

// função para gol do brasil
function showEmoji() {
  const emoji = document.getElementById('emoji-gol')
  emoji.classList.add('show') // função para fazer o efeito da animação, para aarecer a imagem.

  setTimeout(() => {
    emoji.classList.remove('show')
  }, 4000) // para repetir a animação sempre que tiver o gol do brasil
}
// função para gol do do outro time
function showEmoji2() {
  const emoji2 = document.getElementById('emoji-gol2')
  emoji2.classList.add('show2')

  setTimeout(() => {
    emoji2.classList.remove('show2')
  }, 5000)
}

// TESTE PARA VER SE CARREGA O PLACAR DO 1º JOGO! 
onSnapshot(doc(db, 'matches', 'br-01'), doc => {
  const { br, other } = doc.data()

  updateScore('br-01', br, other)

  if (br > 0) {
    showConfet('br-01')
    throwGalvao()
    showEmoji()
  }
})

onSnapshot(doc(db, 'matches', 'br-01'), doc => {
  const { br, other } = doc.data()

  updateScore('br-01', br, other)

  if (other > 0) {
    throwNaoGalvao()
    showEmoji2()
  }
})

// TESTE PARA VER SE CARREGA O PLACAR DO 2º JOGO! 
onSnapshot(doc(db, 'matches', 'br-02'), doc => { 
  const { br, other } = doc.data()

  updateScore2('br-02', br, other)

  if (br > 0) {
    showConfet('br-02')
    throwGalvao()
    showEmoji()
  }
})

// TESTE PARA VER SE CARREGA O PLACAR DO 3º JOGO! 
onSnapshot(doc(db, 'matches', 'br-03'), doc => { 
  const { br, other } = doc.data()

  updateScore3('br-03', br, other)

  if (br > 0) {
    showConfet('br-03')
    throwGalvao()
    showEmoji()
  }
})




