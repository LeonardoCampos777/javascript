// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const distânciaImg = primeiraImg.offsetTop;
console.log(` a distância da primeira imagem para o top da página é de ${distânciaImg}px`);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');

let soma = 0;
imgs.forEach((img)=>{
  const larguraImgs = img.offsetWidth;
  soma += larguraImgs;
});
console.log(` a soma da largura de todas as imagens é ${soma}px`);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link)=>{
  const widthLink = link.clientWidth;
  const heightLink = link.clientHeight;

  if(widthLink >= 48 && heightLink >= 48){
    console.log(link, "Esse link é acessivel");
  } else{
    console.log(link, "Esse link não é acessivel");
  }

});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if(browserSmall){
  menu.classList.add('menu-mobile');
}

