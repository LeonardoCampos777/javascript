console.log('JavaScript Funcionando!')


// CURSO JAVASCRIPT DIA 1 !!!!! //

// TIPO PRIMITIVO STRING //

let Firstname = 'Leonardo';
let Lastname = 'Campos';

console.log(Firstname);
console.log(Lastname);

let corCarro ='Azul marinho';
let idade = '24';
let namorada ='Rayanny Kataprima';

console.log(corCarro);
console.log(idade);
console.log(namorada);


let meuPai ='Luiz Ferreira Campos';
let minhaMae ='Edileuza Maria de Souza';
let irma ='Palloma Souza Campos';
let sobrinho ='Ravi Muniz';

console.log(meuPai);
console.log(minhaMae);
console.log(irma);
console.log(sobrinho);


// TIPO NUMBER //


const price = 300;
// price = 20;
console.log (price);


let ruivinha ='Katarininha';
console.log(ruivinha);



// TIPOS DE VARIAVEIS  PRIMITIVAS //

 // let itemName ='Pen'; // STRING
 // let itemPrice = 3; // NUMBER
// let itemAvailable = true; // BOOLEAN
// let itemColor = 'Red';


// TIPOS DE VARIAVEIS REFERENCIA //

 let itemName ='Pen';
 let itemPrice = 3; 
 let itemAvailable = true; 
 let itemColor = 'red';

let pen = {
     itemName : 'Pen',
     itemPrice : 3,
     itemAvaliable : true,
     itemColor : 'red'
}

 pen.itemColor ='blue'

console.log(pen)

 let friends = ['Marcos', 'João', 'Léo'];
 friends[0] = 'Katarina'

console.log(friends);

function saleStatus(status, total){
    console.log ('Transaction ' + status + '! Total Amount:$' + total)
}

saleStatus('Approved', 30)


function pedido(status, total){
    console.log('Transação ' + status + '! Valor da Compra: R$' + total)
}

pedido('Aprovada', 100)


function Campeonato(artilheiro, gols, partidas){
    console.log( artilheiro + ' Loco Abreu' + gols + partidas)
}

Campeonato(' O melhor do campeonato,', ' com 170 gols', ' em 100 partidas !' )


function statusPedido(status, retorno){
    console.log('Transação ' + status + retorno)
}

statusPedido('em Andamento,', ' tenha calma! retornaremos em breve!')


function statusCompra(status, saldo){
    console.log('Transação ' + status + saldo)
}

statusCompra('Negada!', ' o limite do seu cartão foi negado, tente de novo mais tarde!')



function porcentage10(price){
    return price -(price * 10 / 100)
}

console.log(porcentage10(20))


function soma(price){
    return (price + 10 - 5) 
}

console.log(soma(10))