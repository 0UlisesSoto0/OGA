// Selección de elementos clave
const contenedorTarjetas1 = document.querySelector('.carrusel-contenedor');
const contenedorCarrusel1= document.querySelector('.Carrusel');
const EspacioB1 = document.querySelector('.EspacioV');
const SubPanelPC = document.querySelector('.panelIRS__carrucel');
const tituloSeccion1 = document.getElementById('Desplegar_PGIRS');

// Media query para verificar ancho de pantalla
const mediaQuery1 = window.matchMedia('(max-width: 900px)');
const mediaQuery2 = window.matchMedia('(max-width: 500px)');


// Función para habilitar/deshabilitar carrusel
function actualizarVista1(e) {
    if (e.matches) {
        const tarjetasOriginales1 = contenedorTarjetas1.querySelectorAll('.tarjeta'); //numero de tarjetas originales
        // Elimina las tarjetas duplicadas, conservando solo las originales
        tarjetasOriginales1.forEach((tarjeta, index2) => {
            if (index2 >= 8){
                tarjeta.remove();
            }  
        });
       
    } 
    else {
        const contenedorTarjetas2 = document.querySelector('.carrusel-contenedor');
        // Obtenemos las tarjetas originales
        const tarjetas1 = [...contenedorTarjetas2.children];
        const tarjetaAncho1 = tarjetas1[0].offsetWidth; // Ancho de una tarjeta
        const gap1 = 20; // Espacio entre tarjetas (de tu CSS)
        const totalAnchoTarjeta1 = tarjetaAncho1 + gap1; // Ancho total de cada tarjeta con gap
        const contenedorTarjetas3 = contenedorTarjetas2.offsetWidth; // Ancho visible del carrusel
        const tarjetasVisibles1 = Math.ceil(contenedorTarjetas3/ totalAnchoTarjeta1); // Tarjetas necesarias para llenar el contenedor visible
        const duplicarVeces1 = tarjetasVisibles1 + 1; // Agregamos una ronda extra para garantizar el efecto infinito

        // Clonamos las tarjetas suficientes veces
        for (let it = 0; it < duplicarVeces1; it++) {
            tarjetas1.forEach((tarjeta) => {
                const clon1 = tarjeta.cloneNode(true);
                contenedorTarjetas2.appendChild(clon1);
            });
        }
    }
}

// Evento para desplegar el contenedor de tarjetas
tituloSeccion1.addEventListener('click', () => {
    if (mediaQuery1.matches && window.innerWidth > 500) {
        const isHidden = contenedorTarjetas1.parentElement.style.display === 'none';
        contenedorTarjetas1.parentElement.style.display = isHidden ? 'block' : 'none';
    }
});

// Listener para el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    if (!mediaQuery1.matches) { // Si estamos en pantallas grandes
        // Asegúrate de que el contenedor sea visible
        contenedorTarjetas1.parentElement.style.display = 'block';
    }
});

// Escuchar cambios en el ancho de pantalla
mediaQuery1.addEventListener('change', actualizarVista1);

// Ejecutar función al cargar la página
actualizarVista1(mediaQuery1);


