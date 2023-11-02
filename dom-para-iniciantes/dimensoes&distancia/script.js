const listaAnimais = document.querySelector('.animais-lista');
const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

console.log(height);
console.log(animaisTop);

const primeiroH2 = document.querySelector('h2');
const distanciaLeft = primeiroH2.offsetLeft;

console.log(distanciaLeft);


const h2Rect = primeiroH2.getBoundingClientRect();
console.log(h2Rect.top);

if(h2Rect.top < 0){
  console.log("Passou do elemento");
}


console.log(
  window.innerWidth,
  window.innerHeight,

  window.outerWidth,
  window.outerHeight,

  window.scrollY,
)

// o inner só vai pegar a área de dentro da janela do  usuário.
// já o outer pega até em cima, nas abas começa a medir da ponta da tela até o final dela. (geranmente não usamos muito ela).


const small = window.matchMedia('(max-width: 600px)').matches;

if(small){
  console.log("Tela menor que 600px");
} else{
  console.log("Tela maior que 600px");
}