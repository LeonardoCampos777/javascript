// nomeie 3 propriedades ou métodos de strings
const totalCaractere = "Leozinho";
const nomeMaiusculo = "Leozinho";
const texto = "Leozinho";

console.log(texto.charAt(4));
console.log(nomeMaiusculo.toUpperCase());
console.log(totalCaractere.length);
// nomeie 5 propriedades ou métodos de elementos do DOM
const leozinho = document.querySelector('.leozinho');
leozinho.style.backgroundColor = 'green';
leozinho.style.padding = '1rem';
leozinho.classList.add('ativo');
leozinho.ariaRequired;
console.log(leozinho.innerText);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
const btn = document.querySelector('#copy');

btn.addEventListener('click', function(e) {
  const textArea = document.querySelector('.text');
  textArea.select();
  document.execCommand('copy');
});