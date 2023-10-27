const menu = document.querySelector('.menu');
menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('azul'); // se tiver ativo remove. se não tiver ele adiciona

if(menu.classList.contains('azul')){  // volta um valor booleano. true ou false. se existe true se não existe false
  menu.classList.add('possui-azul');
} else{
  menu.classList.add('não-possui-azul');
}

menu.className += 'nunca-nem-vi'; // use isso para conseguir concatenar uma classe usandoo o CLASSNAME, porque se não concatenar, ela vai escrever em cima das classes anteriores e vai só valor o novo valor que você definiu.
console.log(menu.className);


const animais = document.querySelector('.animais');

//console.log(animais.attributes['aria-label']);

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');
const altImg = img.setAttribute('alt', 'Raposa')
const possuiAlt = img.hasAttribute('alt');


console.log(srcImg);
console.log(possuiAlt);
