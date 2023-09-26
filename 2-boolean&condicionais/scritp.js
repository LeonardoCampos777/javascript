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

