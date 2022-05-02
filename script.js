
//toggle do hamburguer
let nav = document.querySelector('#Header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(Element of toggle){
  Element.addEventListener('click', function(){
    nav.classList.toggle('show')
  })
}

//links toggle
const links = document.querySelectorAll('nav ul li a')

for(link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

//mudar header

let header = document.querySelector("#Header")
let navHeight = header.offsetHeight

 function scrollFunction(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
}

// ---- swiper
const swiper = new Swiper('.swiper', {
  slidesPerView:1,
  pagination: {
    el:  '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
  breakpoints:{
    767:{
      slidesPerView:2,
      setWrapperSize: true,
    }
    
  }
})

// scroll

let hd = document.querySelector('#header')
const SLOW = {
  origin: 'top',
  distance: '30px',
  duration:800,
  reset:true,
  Interval:100
}
// LInk ativo na página


ScrollReveal().reveal( `
 #Home .img, #Home .text,
 #About .img, #About .text,
 #Services header, #Services .card,
 #Testemonials header, #Testemonials .swiper,
 #Contact
  
`,SLOW)

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}


window.addEventListener('scroll',function(){
  scrollFunction()
  activateMenuAtCurrentSection()
})