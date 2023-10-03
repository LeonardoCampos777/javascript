// Crie uma função para verificar se um valor é Truthy
function valorTrue(dado){
  return !!dado;
}
console.log(valorTrue(1));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function quadrado(lado){
  return ` o valor do perímetro desse quadrado é igual a ${lado * 4}`;
}
console.log(quadrado(5));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  const meuNome = nome + sobrenome;
  return meuNome;
}
console.log(nomeCompleto("Leonardo ", "Campos"));
// Crie uma função que verifica se um número é par
function numeroPar(numero){
 const modulo = numero % 2;
 if(modulo === 0){
  return true;
 } else{
  return false;
 }
}
console.log(numeroPar(10902));
console.log(numeroPar(12231));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(sobrinho){
  return sobrinho;
}
console.log(tipoDeDado(typeof "Ravi Muniz"));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
function mostrarAoClick(){
  console.log("Você clicou ai cálica");
}

window.addEventListener('click', mostrarAoClick);
// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));