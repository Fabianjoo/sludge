var hamburguer = document.getElementById("hamburguer")
var menu = document.getElementById("menu")

hamburguer.addEventListener("click", function() {
    if (menu.style.display === "none"){
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
})