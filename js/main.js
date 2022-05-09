

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){   
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuCurrentSection(home)
    activateMenuCurrentSection(services)
    activateMenuCurrentSection(about)
    activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
    const middleLine = scrollY + innerHeight / 2; 

    // verifica onde começa a seção
    const sectionTop = section.offsetTop;
    // verifica o tamanho da seção
    const sectionHeight = section.offsetHeight;

    // verifica se a linha invisível do meio passou do topo da seção
    const sectionTopReachOfPassedTgLine = middleLine >= sectionTop;

    // verifica onde a seção termina
    const sectionEndsAt = sectionTop + sectionHeight;

    // verifica se o final da seção passou ou não da linha invisivel do meio
    const sectionEndPassedTgLine = sectionEndsAt <= middleLine;

    // verifica se a linha do meio está entre os limites da seção
    const sectionBoundaries = sectionTopReachOfPassedTgLine && !sectionEndPassedTgLine;

    const sectionId = section.getAttribute('id')

    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    
  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
    if(scrollY > 0){
        navigation.classList.add("scroll")
    }else {
        navigation.classList.remove("scroll")
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 500 && scrollY < 4700){
        backToTopButton.classList.add("show")
    }else {
        backToTopButton.classList.remove("show")
    }
}

function showBackToTopButtonWhite() {
    if(scrollY > 4300){
        backToTopButton.classList.add("showWhite")
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){ 
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'right',
    distance: '30px',
    duration: 900,
}).reveal(`
    #home,
    #home img,
    #home .info,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);



