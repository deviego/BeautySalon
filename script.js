
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

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight){
    header.classList.add('scroll')
  }else{
    header.classList.remove('scroll')
  }
})

// ---- swiper
const swiper = new Swiper('.swiper', {
  slidesPerView:'auto',
  pagination: {
    el:  '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})