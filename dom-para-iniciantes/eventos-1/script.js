const img = document.querySelector('img');


function callback(event){
  console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');


function callbackLista(event){
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}

//animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="https"]');

function handleLinkExterno(event){
  event.preventDefault();
  console.log(this.getAttribute('href'));
  console.log(event.currentTarget);
};

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event.type, event);
};

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);
//window.addEventListener('keydown', handleEvent);

function handleKeyBoard(event){
 console.log(event.key);
 if(event.key === 'l'){
  document.body.classList.toggle('azul');
 }
}

//window.addEventListener('keydown', handleKeyBoard);

const imgs = document.querySelectorAll('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}


imgs.forEach((img)=>{
  img.addEventListener('click', imgSrc);
});