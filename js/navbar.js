

document.getElementById("DropD0").addEventListener("click", function () {
    if (window.innerWidth < 960) {
        let texto1 = this.querySelector(".desplegable1 p");
        texto1.style.fontWeight = (texto1.style.fontWeight === "bold") ? "normal" : "bold";
        let texto2 = document.getElementById("DropD").querySelector(".desplegable2 p");
        texto2.style.fontWeight = "normal";
        let texto3 = document.getElementById("DropD2").querySelector(".desplegable3 p");
        texto3.style.fontWeight = "normal";
    }
});
document.getElementById("DropD").addEventListener("click", function () {
    if (window.innerWidth < 960) {
        let texto2 = this.querySelector(".desplegable2 p");
        texto2.style.fontWeight = (texto2.style.fontWeight === "bold") ? "normal" : "bold";
        let texto1 = document.getElementById("DropD0").querySelector(".desplegable1 p");
        texto1.style.fontWeight = "normal";
        let texto3 = document.getElementById("DropD2").querySelector(".desplegable3 p");
        texto3.style.fontWeight = "normal";
    }
});
document.getElementById("DropD2").addEventListener("click", function () {
    if (window.innerWidth < 960) {
        let texto3 = this.querySelector(".desplegable3 p");
        texto3.style.fontWeight = (texto3.style.fontWeight === "bold") ? "normal" : "bold";
        let texto2 = document.getElementById("DropD").querySelector(".desplegable2 p");
        texto2.style.fontWeight = "normal";
        let texto1 = document.getElementById("DropD0").querySelector(".desplegable1 p");
        texto1.style.fontWeight = "normal";
    }
});

