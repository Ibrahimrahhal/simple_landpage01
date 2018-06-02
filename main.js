var menuico = document.getElementsByClassName("menu-ico")[0];
var menunav = document.getElementById("nav-menu1");
var br = document.getElementById("hero-con");
var menupar = document.getElementsByClassName("menu-perent")[0];
menuico.addEventListener("click",function(){
  menunav.classList.toggle("no-sm");
    br.classList.toggle("no-sm") ;
    menupar.classList.toggle("no-sm") ;
    
})