const eu = {
  nome: "Leonardo Souza Campos",
  idade: 24,
  profissao: "Bicheiro",
  possuiFaculdade: false,
}

console.log(eu);


const quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },

  cinco(){ // EXEMPLO DA SIMPLIFICAÇÃO DO MÉTODO.
    return 5;
  }
}

console.log(quadrado.area(4));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());


console.log(Math.random());

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight(){
    return this.height / 2;
  }
}

const bg = menu.backgroundColor;
const altura = menu.height;
const largura = menu.width;
console.log(bg, altura, largura);

menu.color = '#fff',

menu.esconder = function(){
  return "escondi abestado";
}

console.log(menu.esconder());
