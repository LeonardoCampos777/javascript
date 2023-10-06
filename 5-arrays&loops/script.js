const videoGames = ["Nitendo", "PS2", "Xbox", "SuperNitendo"];

//const ultimoItem = videoGames.pop();

//videoGames.push('Videogame que tinha a pistola');

console.log(videoGames);

for(var numero = 1; numero <= 10; numero++){
  console.log(numero);
}

//numero ++ é igual a numero = numero + 1
//numero é igual a numero + 1 sempre
//O operador ++ é dito de incremento, ele aumenta o valor da variável em uma unidade.

const videoGames2 = ["Nitendo", "PS2", "Xbox", "SuperNitendo"];
for (let item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === "PS2"){
    break;
  }
}
//videoGames.length; é o total de itens que tem dentro dessa Array.

const jogadores = ["Ronaldinho", "Neymar", "Ronaldo", "Ibrahimović", "Káká"];

jogadores.forEach(function(jogador,index,array){
  console.log(jogador,index,array);
});

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}


