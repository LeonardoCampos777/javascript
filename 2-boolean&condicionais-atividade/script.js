
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

const minhaIdade = 24;
const idadePai = 59;

if(minhaIdade > idadePai){
  console.log("Sou mais velho");
} else if (minhaIdade === idadePai){
  console.log("Nossa idade é a mesma");
} else{
  console.log("Eu sou mais novo caraca");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// true  3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false;  //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;



if(brasil > china){
  console.log("Brasil tem mais habitantes!");
} else{
  console.log("Brasil tem menos habitantes!");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
} // false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
} // Cão