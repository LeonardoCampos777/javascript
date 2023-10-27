const imgss = document.querySelectorAll('img');

imgss.forEach((item) =>{ // aqui a gente vê uma Arrow Function, passamos o argumento nas aspas () e a função digitamos o arco =>
  console.log(item);
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

const imgsss = document.querySelectorAll('img');


imgsss.forEach(item =>{
 console.log(item);
});
// você pode também usar se tiver apenas um argumento sem os parenteses () passar o item sem os pareteses.
// porem não é aconselhavel, portanto vamos sempre colocar os parenteses sempre 


const imgs = document.querySelectorAll('img');

imgs.forEach(item => console.log(item));

// se você tiver um código que só tem apenas uma linha, você pode tirar as chaves {}, e abreviar mais ainda
// utilizando o código apenas em uma só linha, destá forma.
// não coloque o ponto e virgula ; no fim do console.log(). lembre-se disso.
// e tabém pode ter casos de não ter argumento nenhum.