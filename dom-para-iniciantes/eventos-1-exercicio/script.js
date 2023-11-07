// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function addClass(event){
  event.preventDefault();
  linksInternos.forEach((item)=>{
    item.classList.remove('ativo');
  });

  event.currentTarget.classList.add('ativo');
};

linksInternos.forEach((item)=>{
  item.addEventListener('click', addClass);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

function handleClick(event){
  const elementoMarcado = event.currentTarget;
  console.log(elementoMarcado);
};

elementos.forEach((elemento)=>{
  elemento.addEventListener('click', handleClick);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleClick(event){
  const elementoMarcado = event.currentTarget.remove();
  console.log(elementoMarcado);
};

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleTecla(event){
  if(event.key === 't'){
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleTecla);