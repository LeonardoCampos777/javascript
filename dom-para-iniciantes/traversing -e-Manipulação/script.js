//const h1 = document.querySelector('h1');
//const animaisLista = document.querySelector('.animais-descricao');
//console.log(h1.innerHTML); // pega o html com tags);
//console.log(h1.outerHTML); // pega o conteúdo inteiro incluindo as tags

//h1.outerHTML = "<p>Novo Título</p>" // com o innerHTML você pode escrever em cima.

//console.log(animaisLista.innerHTML);

//const lista = document.querySelector('.animais-lista');

//console.log(lista.children[2]); // retona uma HTMLCOLETION com isso você consegue pegar qualquer item da lista, estilo uma array usando o []
//console.log(lista.children[--lista.children.length]); // para pegar o ultimo item da lista.

//console.log(lista.querySelector('li:last-child'));


//console.log(lista.childNodes); 
//console.log(lista.firstChild);
// LEMBRE-SE O NODE PEGA QUALQUER TIPO DE COISA, COMENTARIOS E ATÉ OS ESPAÇOS DE CADA LINHA DO CODIGO
// EXEMPLO 
// H1
// H2
// AQUI TEMOS 1 ESPAÇO DA LINHA 20 PARA A LINHA 21, O NODE VAI CONTAR ESSE ESPAÇO

//const animais = document.querySelector('.animais');
//const contato = document.querySelector('.contato');
//const titulo = contato.querySelector('.titulo');


//const mapa = document.querySelector('.mapa');
//const dados = document.querySelector('.dados');

//contato.replaceChild(lista, titulo);
//contato.insertBefore(animais, dados); 
// com esse método a gente vai conseguir  pegar o titulo que está lá em baixo e colocar ele dentro da section dos animais como o ultimo filho.
// com isso ele vai subir lá pra cima.

//const novoh1 = document.createElement('h1');
//novoh1.innerText = 'Novo Título';
//novoh1.classList.add('titulo');

//animais.appendChild(novoh1); 
//console.log(novoh1);

const titulo = document.querySelector('h1');

const cloneTitulo = titulo.cloneNode(true);
const contato = document.querySelector('.contato');

cloneTitulo.classList.add('azul');

contato.appendChild(cloneTitulo);
