// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const novoMenu = menu.cloneNode(true);

copy.appendChild(novoMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const faqLista = faq.querySelector('.faq-lista');

const faqChildren = faqLista.children;
console.log(faqChildren[0]);

// Selecione o DD referente ao primeiro DT
console.log(faqChildren[1]);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.replaceChild(animais, faqLista); // substitui o faqLista por animais.