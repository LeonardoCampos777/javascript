// Retorne no console todas as imagens do site
const imagensFull = document.querySelectorAll('img');
console.log(imagensFull);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="./img/imagem"]'); 
/* o img[src^="./img/imagem"], sgnifica todo src que começa com o img/imagem. para funcionar
*/
console.log(imgImagem);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);
// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[ultimoParagrafo.length - 1]);