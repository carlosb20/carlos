
const val = document.querySelector('.mck')

console.log(val)


const params = new URLSearchParams(window.location.search);

const nome = params.get('nome');

val.innerHTML = `${nome}`

console.log(nome);  // Joao
  