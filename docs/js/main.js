import flags from './model/flags.js';

function Criarbandeira(bandeira){
  return`<div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>`; 
}

const bandeirasHTML = flags.map(
  (elemento) => {
    return Criarbandeira(elemento);
  }
).join('');

document.querySelector('main').innerHTML = bandeirasHTML

