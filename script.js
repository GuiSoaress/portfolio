var menubar = document.querySelector(".menubar");

menubar.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});