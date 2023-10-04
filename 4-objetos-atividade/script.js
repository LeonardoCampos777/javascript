// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: "Leonardo ",
  sobrenome: "Campos",
  idade: 24,
  profissao: "atualmente trabalho com apostas",
  nomeCompleto(){
    return this.nome + this.sobrenome;    
  }
}
console.log(meusDados);
console.log(meusDados.profissao);
// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(meusDados.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const meuCachorro = {
  raça: "labrador",
  cor: "preto",
  idade: `${10} anos`,
  verUmHomem(){
    const late = this.verUmHomem;
    if(this.verUmHomem === late){
      return "começou a latir"
    } else{
      return "não tem nenhum homem aqui";
    }
  }
}
console.log(meuCachorro);
console.log(meuCachorro.verUmHomem());
