// Menu Hâmburguer

var hamburguer = document.getElementById("hamburguer")
var menu = document.getElementById("menu")

hamburguer.addEventListener("click", function() {
    if (menu.style.display === "none"){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})

// Botão Voltar ao Topo

var botaotopo = document.getElementById("btntopo")

window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 300){
        botaotopo.style.display = "block";
    } else {
        botaotopo.style.display = "none";
    }
    })

botaotopo.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"}); // objeto
})