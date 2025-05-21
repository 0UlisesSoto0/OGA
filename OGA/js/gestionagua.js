// Selección de elementos clave
const contenedorGrid = document.querySelector('.carrusel2-contenedor');
const contenedorPrincipal = document.querySelector('.Carrusel2');
const botonDesplegable = document.getElementById('Desplegar_PGSA');

// Media query para verificar ancho de pantalla
const consultaPantalla = window.matchMedia('(max-width: 900px)');

// Función para ajustar la vista según el tamaño de pantalla
function manejarVistaResponsiva(evento) {
    if (evento.matches) {
        // Mantener solo las tarjetas originales
        const tarjetasBase = contenedorGrid.querySelectorAll('.tarjeta');
        tarjetasBase.forEach((tarjeta, indice) => {
            if (indice >= 6) tarjeta.remove();
        });
    } else {
        // Configuración para carrusel en pantallas grandes
        const tarjetas = [...contenedorGrid.children];
        const anchoTarjeta = tarjetas[0].offsetWidth;
        const espacioEntreTarjetas = 20; // Espacio entre tarjetas
        const anchoTotalTarjeta = anchoTarjeta + espacioEntreTarjetas;
        const anchoVisible = contenedorGrid.offsetWidth;
        const tarjetasNecesarias = Math.ceil(anchoVisible / anchoTotalTarjeta);
        const cantidadClones = tarjetasNecesarias + 1;

        // Clonar tarjetas para el efecto infinito
        for (let i = 0; i < cantidadClones; i++) {
            tarjetas.forEach((tarjeta) => {
                const clonTarjeta = tarjeta.cloneNode(true);
                contenedorGrid.appendChild(clonTarjeta);
            });
        }
    }
}

// Evento para desplegar/ocultar el contenedor de tarjetas
botonDesplegable.addEventListener('click', () => {
    if (consultaPantalla.matches) {
        const estaOculto = contenedorGrid.parentElement.style.display === 'none';
        contenedorGrid.parentElement.style.display = estaOculto ? 'block' : 'none';
    }
});

// Listener para el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    if (!consultaPantalla.matches) {
        contenedorGrid.parentElement.style.display = 'block';
    }
});

// Escuchar cambios en el ancho de pantalla
consultaPantalla.addEventListener('change', manejarVistaResponsiva);

// Ejecutar función al cargar la página
manejarVistaResponsiva(consultaPantalla);
