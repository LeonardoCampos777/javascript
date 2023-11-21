const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


if(tabMenu.length && tabContent.length){
  tabContent[0].classList.add('ativo');

  function activeTab(index){
    tabContent.forEach((section) =>{
      section.classList.remove('ativo');
    });
  
    tabContent[index].classList.add('ativo');
  };
  
  
  tabMenu.forEach((itemMenu, index) =>{
    itemMenu.addEventListener('click', () =>{
      activeTab(index);
    });
  });
}


// com o if ele vai verificar se realmente tabMenu e tabContent são (são true), ou seja, o código só vai rodar
// se eles existirem, para não bugar caso dê algum problema nas classes do html
// aqui estamos fazendo um loop para cada item de dentro do tabMenu, que no caso são cada li
// ai temos o itemMenu, que é cada li de dentro desse tabMenu
// e temos o index, que vai retornar o número index, de cada imagem clicada da lista  exemplo: 0/1/2/3/4/5/6.
// em cada item eu vou adicionar o evento de click, e ao clicar vai executar a funcão e me mostrar o número do index e com isso
// ativar a funcão o activeTab lá de cima. 
