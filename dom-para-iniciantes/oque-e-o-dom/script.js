//window.alert("Futuro Developer Front-end");

const href = window.location.href;
 // o window nós disponiliza o location, com todas as informações do browser, como url, href, protoclo,
// toda a parte de cima da "BUSCA".

console.log(href);

if(href === 'http://127.0.0.1:5500/index.html'){
  console.log("é igual");
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callbackh1(){
  console.log("Você clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);