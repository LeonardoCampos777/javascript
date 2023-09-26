const lindo = false;
const gostosao = true;

if(lindo){
  console.log("eu sou lindo");
 }
 else if(gostosao){
  console.log("isso mesmo sou gostoso caralho");
} else{
  console.log("mentira não sou lindo e nem gostoso :(")
}

const nome = "10kg" / 10;

if(nome){
  console.log(nome);
} else{
  console.log('isso é false caralho');
}

if(!lindo){
  console.log("agora peguei o macete peguei o macete")
}

if (!!gostosao){
  console.log(gostosao);
}

if (!!nome){
  console.log(nome);
} else{
  console.log("mais uma vez o o sinal !! mostrou que é false");
}

if(!!lindo){
  console.log(lindo);
} else{
  console.log("mais uma vez o o sinal !! mostrou que é false");
}

const condicional1 = (5 - 5) && (10 + 10);
if(condicional1){
  console.log('Verdadeiro calica');
} else{
  console.log('Errouu calica é false papai');
}

const condicional2 = (5 - 10) && (10 + 10);
if(condicional2){
  console.log('Verdadeiro calica chupa que é de uva');
} else{
  console.log('Errouu calica é false papai');
}

const condicional3 = (5 - 5) || (5 + 10);
if(condicional3){
  console.log("diz pra mim oque é ctz que é true");
} else{
  console.log('iii menozinn tu errou é false kakaka');
}


const corPreferida = "roxo";

switch (corPreferida) {
  case 'Vermelho':
    console.log('caralho sou o homem aranha');
    break;
  case 'Verde':
    console.log('caralho sou o Hulk mané');
    break;
  case 'Azul':
    console.log('caralho sou o capiton americon');
    break;
  default:
    console.log('você não é porra nenhuma, vá cuidar em estudar vagabundo');      
}


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}