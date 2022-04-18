
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