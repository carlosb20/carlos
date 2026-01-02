
import lista_material from "../lista_material.js";

console.log(lista_material,'ok')

// console.log(lista_material)
const val = document.querySelector('.mck')

const params = new URLSearchParams(window.location.search);

const nome = params.get('nome');

val.innerHTML = `${nome}`

console.log(lista_material[`${nome}`])

console.log(nome);  // Joao


// export default lista_material; 

  