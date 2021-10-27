let menuIcon = document.querySelector("#menu-icon-container");
let menu = document.querySelector("#mobile-nav-menu");
let homeMenuLink= document.querySelector("#home-mobile-link")
let musicMenuLink= document.querySelector("#music-mobile-link")
let videosMenuLink= document.querySelector("#videos-mobile-link")
let contactMenuLink= document.querySelector("#contact-mobile-link")



menuIcon.addEventListener("click", function(){
	menu.style.display = "block"
});

homeMenuLink.addEventListener("click", function(){
	menu.style.display = "none"
})

musicMenuLink.addEventListener("click", function(){
	menu.style.display = "none"
})

videosMenuLink.addEventListener("click", function(){
	menu.style.display = "none"
})

contactMenuLink.addEventListener("click", function(){
	menu.style.display = "none"
})




