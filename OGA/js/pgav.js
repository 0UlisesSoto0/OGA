const tarjetas22 = document.querySelectorAll('.tarjeta21');

tarjetas22.forEach((tarjeta) => {
    tarjeta.addEventListener('mouseover', () => {
        tarjeta.classList.add('borde-rojo2'); // Agrega una clase
    });

    tarjeta.addEventListener('mouseout', () => {
        tarjeta.classList.remove('borde-rojo2'); // Elimina la clase
    });
});