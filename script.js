////////// Animação Scroll



const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.6;


function animaScroll(){
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible){
            section.classList.add('ativo')
        } else if(section.classList.contains('ativo')){
            section.classList.remove('ativo')
        }
    })
}
animaScroll()

window.addEventListener('scroll', animaScroll)



///////////////////// ANIMA NUMEROS



function animaNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach((numero) => {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    
    
    let start = 0;
    const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start
        if(start > total){
            numero.innerText = total;
            clearInterval(timer)
        }
    }, 25 )
    });
}



function handleMutation(mutation){
    if(mutation[0].target.classList.contains('ativo')) {
        observer.disconnect();
        animaNumeros();
    }
}

const observerTarget = document.querySelector('.numeros')
const observer = new MutationObserver(handleMutation);


observer.observe(observerTarget, {attributes: true})


///////////////////////////////////////////////


function initAccordion(){
const accordionList = document.querySelectorAll('.js-accordion dt')

accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAccordion(){
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})
}
initAccordion()



///////Animação

new SimpleAnime();