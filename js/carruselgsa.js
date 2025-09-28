const ContenedorPrincipalT = document.querySelector('.carrusel2-contenedor');

const TarjetasPresentables = [...ContenedorPrincipalT.children];

const AnchoT = TarjetasPresentables[0].offsetWidth;
const EspacioG = 20;
const TotalAT = AnchoT + EspacioG;
const CVisible = ContenedorPrincipalT.offsetWidth;
const TVisibles = Math.ceil(CVisible/TotalAT);
const DuplicacionT = TVisibles + 1;

for (let r = 0; r < DuplicacionT; r++){
    TarjetasPresentables.forEach((tarjeta) => {
        const clonT = tarjeta.cloneNode(true);
        ContenedorPrincipalT.appendChild(clonT);
    });
}

const EspacioCarrusel = document.querySelector('.Carrusel2');
EspacioCarrusel.addEventListener('mouseover', () => {
    ContenedorPrincipalT.style.animationPlayState = 'paused';
    const TarjetasMovibles = document.querySelectorAll('.tarjeta');

    TarjetasMovibles.forEach((tarjeta) => {
        tarjeta.addEventListener('mouseover', () => {
            tarjeta.classList.add('borde-rojo');
        });
        tarjeta.addEventListener('mouseout', () => {
            tarjeta.classList.remove('borde-rojo'); // Elimina la clase
        });
    });
});

EspacioCarrusel.addEventListener('mouseout', () => {
    ContenedorPrincipalT.style.animationPlayState = 'running';
});

