function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//VAMOS FAZER AGORA UM SCROLL SUAVE USANDO O JAVASCRIPT.
// USANDO O HREF COMO REFERÊNCIA PARA FAZER A RELAÇÃO ENRTRE O MENU E AS SECTIONS

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  if (linksInternos) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener("click", scrollToSection);
    });
  }
}
initScrollSuave();
// UMA NAVEGAÇÃO POR TAB É UMA NAVEGAÇÃO RELACIONADA COM UMA LISTA DE ITENS  E OUTRA LISTA DE ITENS
// E COM ISSO AO CLICAR EM UMA LISTA, VAI ATIVAR A OUTRA!!
// UM ITEM DE CLICK PARA CADA ITEM DO CONTEUDO!

// com o if ele vai verificar se realmente tabMenu e tabContent são (são true), ou seja, o código só vai rodar
// se eles existirem, para não bugar caso dê algum problema nas classes do html
// aqui estamos fazendo um loop para cada item de dentro do tabMenu, que no caso são cada li
// ai temos o itemMenu, que é cada li de dentro desse tabMenu
// e temos o index, que vai retornar o número index, de cada imagem clicada da lista  exemplo: 0/1/2/3/4/5/6.
// em cada item eu vou adicionar o evento de click, e ao clicar vai executar a funcão e me mostrar o número do index e com isso
// ativar a funcão o activeTab lá de cima.

// QUANDO EU CLICAR EU QUER OQUE PASSE O NÚMERO DO INDEX DENTRO DA MINHA FUNÇÃO ACTIVE TAB!!!

// ISOLE SEMPRE O ESCOPO DO QUE VOCÊ ESTÁ FAZENDO COM UMA FUNÇÃO, PORQUE POR ALGUM MOTIVO, ALGO PODE VAZAR ALGUMA VARIAVEL
// OU ATÉ MESMO UMA FUNÇÃO COM O MESMO NOME. ENTÃO LEMBRE-SE ISOLE COM UMA FUNÇÃO!!!!! A SUA MANIPULAÇÃO!
// E TAMBÉM VERIFIQUE SE O ELEMENTO QUE VOCÊ ESTÁ SELECIONANDO NO QUESELECTOR EXISTE COM IF(.LENGTH);

// VAMOS FAZER UMA ANIMAÇÃO COM O SCROLL BEM LEGAL.
// PARA USAR NAS SECTIONS DO NOSSO SITE!!
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6; // aqui é a conta de 60% da tela

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade; //tamanho do height da tela para acontecer o efeito
        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo"); // para quando você voltar de cima pra baixo, acontecer o mesmo efeito.
        }
      });
    }
    animaScroll(); // estamos ativando a função para o primeiro elemento já ficar visivel
    // ao abrir a tela

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll(); 
