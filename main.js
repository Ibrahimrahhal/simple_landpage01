var menuico = document.getElementsByClassName("menu-ico")[0];
var menunav = document.getElementById("nav-menu1");
var br = document.getElementById("hero-con");
var menupar = document.getElementsByClassName("menu-perent")[0];
var appleico = document.getElementsByClassName("apple")[0];
var googleico = document.getElementsByClassName("google")[0];
menuico.addEventListener("click",function(){
  menunav.classList.toggle("no-sm");
    br.classList.toggle("no-sm") ;
    menupar.classList.toggle("no-sm") ;
    menuico.classList.toggle("menu-ico-clicked");
    
})

appleico.addEventListener("mouseover",function(){
    appleico.innerHTML= '<span class="btn-text">app store</span>' ;
})
appleico.addEventListener("mouseout",function(){
    appleico.innerHTML= '<span id="apple-icon"></span>' ;
})
googleico.addEventListener("mouseover",function(){
   googleico.innerHTML= "<span class='btn-text'>play store</span>" ;
})
googleico.addEventListener("mouseout",function(){
    googleico.innerHTML= '<span id="google-icon"></span>' ;
})