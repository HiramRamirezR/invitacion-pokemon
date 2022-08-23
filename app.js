const off = document.querySelector('.off')
const on = document.querySelector('.on')
const fondoNegro = document.querySelector('.fondoNegro')
const audio = new Audio('pokemon.mp3')


on.addEventListener('click', () => {
  on.classList.toggle('hidden')
  fondoNegro.classList.toggle('hidden')
  off.classList.toggle('hidden')
  audio.play()
})
off.addEventListener('click', () => {
  off.classList.toggle('hidden')
  fondoNegro.classList.toggle('hidden')
  on.classList.toggle('hidden')
})
