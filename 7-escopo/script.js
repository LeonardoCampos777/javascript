var carro = "Fusca";
function mostrarCarro(){
  
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

{
  var mes = "Fevereiro";
  console.log(mes);

}

console.log(mes); // usando o var, a variável vaza, para fora do bloco de chaves (e isso não pode acontecer!!).

