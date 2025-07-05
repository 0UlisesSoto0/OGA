// Selección de elementos clave
const contenedorTarjetas = document.querySelector('.carrusel2-contenedor');
const contenedorCarrusel = document.querySelector('.Carrusel2');
const EspacioB2 = document.querySelector('.EspacioV2');
const SubPanelPGSA = document.querySelector('.panelGestionSostenibleA__carrucel');
const tituloSeccion = document.getElementById('Desplegar_PGSA');

// Media query para verificar ancho de pantalla
const mediaQuery = window.matchMedia('(max-width: 900px)');

// Función para habilitar/deshabilitar carrusel
function actualizarVista(e) {
    if (e.matches) {
        contenedorTarjetas.parentElement.style.display = 'none'; // Ocultar las tarjetas inicialmente
        contenedorTarjetas.style.animation = 'none'; // Detener animación
        EspacioB2.style.display = 'none'; // Quitar espacio en blanco

        const tarjetasOriginales = contenedorTarjetas.querySelectorAll('.tarjeta'); //numero de tarjetas originales
        
        // Elimina las tarjetas duplicadas, conservando solo las originales
        tarjetasOriginales.forEach((tarjeta, index) => {
            if (index >= 6) tarjeta.remove(); 
        });

        contenedorTarjetas.style.display = 'grid';
        contenedorTarjetas.style.padding = '1.5rem';
        
        contenedorTarjetas.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        contenedorCarrusel.style.height = 'auto';
        SubPanelPGSA.style.height = 'auto';
       
    } else {
        // Restaurar carrusel para pantallas más grandes
        EspacioB2.style.display = ''; // Mostrar espacio
        contenedorTarjetas.style.display = 'flex';
        contenedorTarjetas.style.animation = ''; // Restaurar animación
        contenedorCarrusel.style.height = ''; // Restaurar altura
        SubPanelPGSA.style.height = '';
    }
}

// Evento para desplegar el contenedor de tarjetas
tituloSeccion.addEventListener('click', () => {
    if (mediaQuery.matches && window.innerWidth > 500) {
        const isHidden = contenedorTarjetas.parentElement.style.display === 'none';
        contenedorTarjetas.parentElement.style.display = isHidden ? 'block' : 'none';
    }
});


// Ejecutar función al cargar la página
actualizarVista(mediaQuery);
