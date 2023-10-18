// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;
console.log(url);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo.classList[0]);
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem);
// Retorne a largura da janela
const windowWidth = window.innerWidth;
console.log(windowWidth);

// um macete muito bom, é digitar window. e procurar oque você quer em ingles... 
// com isso vai aparecer todos os métodos e propiedades e você vai achar oquer quer