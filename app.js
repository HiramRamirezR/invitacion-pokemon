const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const modal = document.querySelector('.modal')
const pokebola = document.querySelector('.pokebola')

const pikachu = document.querySelector('.pikachu')
const squirtle = document.querySelector('.squirtle')
const bulbasaur = document.querySelector('.bulbasaur')
const charmander = document.querySelector('.charmander')

const musica = new Audio('pokemon.mp3')
const pikachuSound = new Audio('pikachu.mp3')
const squirtleSound = new Audio('squirtle.mp3')
const bulbasaurSound = new Audio('bulbasaur.mp3')
const charmanderSound = new Audio('charmander.mp3')

play.addEventListener('click', () => {
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

pause.addEventListener('click', () => {
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

fecha.addEventListener('click', () => {
  modal.classList.toggle('hidden')
  pokebola.classList.toggle('hidden')
})

// pokebola.addEventListener('click', () => {
//   musica.play()
// })

squirtle.addEventListener('click', () => {
  squirtleSound.play()
})
bulbasaur.addEventListener('click', () => {
  bulbasaurSound.play()
})
pikachu.addEventListener('click', () => {
  pikachuSound.play()
})
charmander.addEventListener('click', () => {
  charmanderSound.play()
})
