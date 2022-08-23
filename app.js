const off = document.querySelector('.off')
const on = document.querySelector('.on')
const fondoNegro = document.querySelector('.fondoNegro')

const fecha = document.querySelector('.fecha')
const modals = document.querySelector('.modals')
const textoModal = document.querySelector('.textoModal')
const pokebola = document.querySelector('.pokebola')
const cerrar = document.querySelector('.cerrar')

const pikachu = document.querySelector('.pikachu')
const squirtle = document.querySelector('.squirtle')
const bulbasaur = document.querySelector('.bulbasaur')
const charmander = document.querySelector('.charmander')

const musica = new Audio('pokemon.mp3')
const pikachuSound = new Audio('pikachu.mp3')
const squirtleSound = new Audio('squirtle.mp3')
const bulbasaurSound = new Audio('bulbasaur.mp3')
const charmanderSound = new Audio('charmander.mp3')


on.addEventListener('click', () => {
  on.classList.toggle('hidden')
  fondoNegro.classList.toggle('hidden')
  off.classList.toggle('hidden')
  musica.play()
})
off.addEventListener('click', () => {
  off.classList.toggle('hidden')
  fondoNegro.classList.toggle('hidden')
  on.classList.toggle('hidden')
  musica.pause()
})
fecha.addEventListener('click', () => {
  modals.classList.toggle('hidden')
  textoModal.classList.toggle('hidden')
  pokebola.classList.toggle('hidden')
  cerrar.classList.toggle('hidden')
})
cerrar.addEventListener('click', () => {
  modals.classList.toggle('hidden')
  textoModal.classList.toggle('hidden')
  pokebola.classList.toggle('hidden')
  cerrar.classList.toggle('hidden')
})

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
