const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
const animaisLeft = listaAnimais.offsetLeft;
console.log(height);
console.log(animaisTop);
console.log(animaisLeft);

const primeiroh2 = document.querySelector('.animais-descricao h2');
const h2Left = primeiroh2.offsetLeft;
console.log(h2Left);

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.top);


console.log(
  window.innerWidth,
  window.innerHeight,

  window.outerWidth,
  window.outerHeight,

  window.scrollY,
);

// o inner só vai pegar a área de dentro da janela do  usuário.
// já o outer pega até em cima, nas abas começa a medir da ponta da tela até o final dela. (geranmente não usamos muito ela).

if(h2rect.top < 0){
  console.log("passou do elemento");
}