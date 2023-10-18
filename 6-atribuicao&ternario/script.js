let numero = 10;
let numero2 = 20;

numero += numero2; // numero = numero + numero2 (usamos isso como forma de abreviação)

console.log(numero);


const idade = 18;
const podeBeber = (idade >= 18) ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

const sabeNadar = true;
const entrarPraia = (sabeNadar === true && idade >= 18) ? "Pode entrar na praia, você sabe nadar" : "Desculpe, você não sabe nadar";
console.log(entrarPraia);


const possuiFaculdade = true;

if(possuiFaculdade) 
  console.log("Possui faculdade ok!");
else
  console.log("Desculpe, você não possui faculdade!");

// essa forma é bem mais legal a abreviação, porém se seu código tiver mais alguma outra linha entre o if e o else, vai dar erro na sintaxe do código e vai bugar, só escreva dessa forma, se você não tiver nenhuma linha entre essas duas condiçoes.


