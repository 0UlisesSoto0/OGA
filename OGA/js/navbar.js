
document.getElementById("DropD0").addEventListener("click", function() {
    if (window.innerWidth <= 900) { // Verifica si la pantalla es menor a 500px
        let texto = this.querySelector(".desplegable1 p"); 
        texto.style.fontWeight = (texto.style.fontWeight === "bold") ? "normal" : "bold";
    }
});
document.getElementById("DropD").addEventListener("click", function() {
    if (window.innerWidth <= 900) { // Verifica si la pantalla es menor a 500px
        let texto = this.querySelector(".desplegable2 p"); 
        texto.style.fontWeight = (texto.style.fontWeight === "bold") ? "normal" : "bold";
    }
});
document.getElementById("DropD2").addEventListener("click", function() {
    if (window.innerWidth <= 900) { // Verifica si la pantalla es menor a 500px
        let texto = this.querySelector(".desplegable3 p"); 
        texto.style.fontWeight = (texto.style.fontWeight === "bold") ? "normal" : "bold";
    }
});