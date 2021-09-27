const openMenu = document.querySelector('.menu-toggle')
const closeMenu = document.querySelector('.menu-close')
const menu = document.querySelector('.menu')

closeMenu.addEventListener("click",function(){
  menu.style.display="none"
})
openMenu.addEventListener("click",function(){
  menu.style.display=="none"? menu.style.display="block": menu.style.display="none"
})