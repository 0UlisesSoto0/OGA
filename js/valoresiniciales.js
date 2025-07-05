
document.addEventListener("DOMContentLoaded", () => {
    let texto3 = document.getElementById("DropD2").querySelector(".desplegable3 p");
    let texto2 = document.getElementById("DropD").querySelector(".desplegable2 p");
    let texto1 = document.getElementById("DropD0").querySelector(".desplegable1 p");
    function iniciarValores() {
        if (window.innerWidth < 960) {
            const Encabezado = document.querySelector('.Encabezado');
            const alturaEncabezado = Encabezado.offsetHeight;

            // Coloca la altura del encabezado en las CP
            document.documentElement.style.setProperty('--alturaEncabezado', `${alturaEncabezado}px`);
        }
    }

    function reiniciarValores() {
        const Encabezado = document.querySelector('.Encabezado');
        const alturaEncabezado = Encabezado.offsetHeight;
        document.documentElement.style.setProperty('--alturaEncabezado', `${alturaEncabezado}px`);
        texto1.style.fontWeight = "normal";
        texto2.style.fontWeight = "normal";
        texto3.style.fontWeight = "normal";
    }

    // Al cambiar el tamaño de la pantalla se aplica
    window.addEventListener('resize', reiniciarValores);
    iniciarValores();
});