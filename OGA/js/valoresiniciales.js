
document.addEventListener("DOMContentLoaded", () => {

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

    }

    // Al cambiar el tamaño de la pantalla se aplica
    window.addEventListener('resize', reiniciarValores);
    iniciarValores();
});