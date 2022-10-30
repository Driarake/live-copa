import app from './firebase.js'

import { getFirestore, doc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js';

const db = getFirestore(app)

function showConfet(id) {
    const element = document.getElementById(id)
    party.confetti(element)
}

function updateScore(id, br, other) {
    const element = document.getElementById(id)
    element.innerText = `${br} x ${other}`
}

function throwGalvao() {
    const audio = new Audio('assets/audio/gol.mp3')
    audio.playbackRate = 1.5
    audio.play()
}

function showEmoji() {
    const emoji = document.getElementById('emoji-gol')
    emoji.classList.add('show')

    setTimeout(() => {
        emoji.classList.remove('show')
    }, 4000)
}

onSnapshot(doc(db, 'matches', 'br-01'), (doc) => {
    const { br, other } = doc.data()
    //mesma coisa que o de cima
    //const jogo = doc.data()
    //jogo.br

    updateScore('br-01', br, other)

    if (br > 0) {
        showConfet('br-01')
        throwGalvao()
        showEmoji()
    }
})