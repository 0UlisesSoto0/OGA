document.addEventListener("DOMContentLoaded", () => {
    const tarjetas = document.querySelectorAll('.CarruselTarjetas .TarjetasP');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function mostrarTarjeta(index) {
      tarjetas.forEach((tarjeta, i) => {
        tarjeta.style.display = i === index ? 'block' : 'none';
      });
    }

    mostrarTarjeta(currentIndex);

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % tarjetas.length;
      mostrarTarjeta(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + tarjetas.length) % tarjetas.length;
      mostrarTarjeta(currentIndex);
    });
});


