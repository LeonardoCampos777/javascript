function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2)); // 2 x 2 
console.log(areaQuadrado(10)); // 10 x 10


function pi(){
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(pi());


// peso e altura  são parâmetros
function imc (peso, altura){ 
  const imc = peso / (altura * altura);
  return imc; 
}

console.log(80, 1.8);
// 80, 1.8 são argumentos

function corFavorita(cor){
  if(cor === 'Azul'){
    console.log('azul ? 7 pika no seu c..');
  } else if (cor === 'Vermelho'){
    console.log('meu pau no teu joelho');  
  } else{
    console.log('você não gosta de porra nenhuma');
  }
}

corFavorita();


 addEventListener('click', function(){console.log('fala rapaziadinha, bagui é doido')});

// OU VOCÊ PODE ATIVAR UM EVENTO DE CLICK, USANDO A FUNCÃO SEPARADA


function ativaBrother(){
  console.log('ativou ??, hahaha espero que sim meu truta');
}

addEventListener('click', ativaBrother);

function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'informe um número por favor!'
  } else if (idade >= 60){
    return 'você já pode dar entrada na sua previdencia'
  } else {
    return 'desculpe, você não tem idade para dar entrada na sua previdencia...'
  }
}

console.log(terceiraIdade(67));

function faltaVisitar(paisesVisitados){
  const totalPaises = 184;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(faltaVisitar(5));

// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
