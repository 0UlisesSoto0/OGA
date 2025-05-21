// Seleccionamos el contenedor del carrusel
const carruselContenedor = document.querySelector('.carrusel-contenedor');


// Obtenemos las tarjetas originales aqui
const tarjetas = [...carruselContenedor.children];


// Calculamos el número de duplicados necesarios
const tarjetaAncho = tarjetas[0].offsetWidth; // Ancho de una tarjeta
const gap = 20; // Espacio entre tarjetas (de tu CSS)
const totalAnchoTarjeta = tarjetaAncho + gap; // Ancho total de cada tarjeta con gap
const carruselVisible = carruselContenedor.offsetWidth; // Ancho visible del carrusel
const tarjetasVisibles = Math.ceil(carruselVisible / totalAnchoTarjeta); // Tarjetas necesarias para llenar el contenedor visible
const duplicarVeces = tarjetasVisibles + 1; // Agregamos una ronda extra para garantizar el efecto infinito

// Clonamos las tarjetas suficientes veces
for (let i = 0; i < duplicarVeces; i++) {
    tarjetas.forEach((tarjeta) => {
        const clon = tarjeta.cloneNode(true);
        carruselContenedor.appendChild(clon);
    });
}

// Pausar animación al interactuar con el carrusel
const carrusel = document.querySelector('.Carrusel'); // Selección del contenedor principal
carrusel.addEventListener('mouseover', () => {
    carruselContenedor.style.animationPlayState = 'paused';
    const tarjetas2 = document.querySelectorAll('.tarjeta');

tarjetas2.forEach((tarjeta) => {
    tarjeta.addEventListener('mouseover', () => {
        tarjeta.classList.add('borde-rojo'); // Agrega una clase
    });

    tarjeta.addEventListener('mouseout', () => {
        tarjeta.classList.remove('borde-rojo'); // Elimina la clase
    });
});
});

carrusel.addEventListener('mouseout', () => {
    carruselContenedor.style.animationPlayState = 'running';
});





