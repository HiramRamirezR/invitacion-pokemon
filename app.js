const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalContador = document.querySelector('.modalContador')
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

invitacion.addEventListener('click', () => {
  modalInvitacion.classList.toggle('hidden')
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  pokebola.classList.toggle('hidden')
})

squirtle.addEventListener('click', () => {
  squirtleSound.play()
  squirtle.classList.add('bounce-out-top')
})
pikachu.addEventListener('click', () => {
  pikachuSound.play()
  pikachu.classList.add('bounce-out-top')
})
charmander.addEventListener('click', () => {
  charmanderSound.play()
  charmander.classList.add('bounce-out-top')
})
bulbasaur.addEventListener('click', () => {
  bulbasaurSound.play()
  bulbasaur.classList.add('bounce-out-top')
})
