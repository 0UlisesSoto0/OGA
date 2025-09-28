function mostrarOcultarInformacionP(elementoInformacion, elementoTitulo, clase) {
    const visionInformacion = document.getElementById('visionInformacion');
    const misionInformacion = document.getElementById('misionInformacion');
    const visionTitulo = document.getElementById('vision__titulo');
    const misionTitulo = document.getElementById('mision__titulo');

    if (elementoInformacion === visionInformacion) {
        if (!misionInformacion.classList.contains(clase)) {
            misionInformacion.classList.remove('mostrarInformacionProposito');
            misionInformacion.classList.add(clase);
            misionTitulo.classList.remove('rotarFlecha');
        }
    } else {
        if (!visionInformacion.classList.contains(clase)) {
            visionInformacion.classList.remove('mostrarInformacionProposito');
            visionInformacion.classList.add(clase);
            visionTitulo.classList.remove('rotarFlecha');
        }
    }
    if (elementoInformacion.classList.contains(clase)) {
        elementoInformacion.classList.remove(clase);
        elementoInformacion.classList.add('mostrarInformacionProposito');
        elementoTitulo.classList.add('rotarFlecha');
    } else {
        elementoInformacion.classList.remove('mostrarInformacionProposito');
        elementoInformacion.classList.add(clase);
        elementoTitulo.classList.remove('rotarFlecha');
    }
}

function mostrarOcultarPanelEnlace(panelSeleccionado) {
    const anchoVentana = window.innerWidth;

    // Solo ejecuta la función si el ancho de la ventana está entre 501 y 900px
    if (anchoVentana <= 500) {
        const paneles = document.querySelectorAll('.panelEnlaces');

        panelSeleccionado.classList.toggle('ocultarPanelEnlaces');
        panelSeleccionado.classList.toggle('mostrarPanelEnlaces');

        paneles.forEach((panel) => {
            if (panelSeleccionado != panel) {
                panel.classList.add('ocultarPanelEnlaces');
                panel.classList.remove('mostrarPanelEnlaces');
            }
        });
    }
}

// function mostrarOcultarPanelTablet(panelSeleccionado) {
//     const anchoVentana = window.innerWidth;
//     if (anchoVentana >= 501 && anchoVentana <= 900) {
//         const paneles = document.querySelectorAll('.panelTablet');
//         paneles.forEach((panel) => {
//             if (panelSeleccionado !== panel) {
//                 panel.classList.add('ocultarPanelTablet');
//                 panel.classList.remove('mostrarPanelTablet');
//             }
//         });
//         panelSeleccionado.classList.toggle('ocultarPanelTablet');
//         panelSeleccionado.classList.toggle('mostrarPanelTablet');    
//     }
// }

function mostrarOcultarPanelTablet(panelSeleccionado) {
    const anchoVentana = window.innerWidth;
    if (anchoVentana >= 501 && anchoVentana <= 900) {
        const paneles = document.querySelectorAll('.panelTablet');
        paneles.forEach((panel) => {
            if (panelSeleccionado !== panel) {
                panel.classList.add('ocultarPanelTablet');
                panel.classList.remove('mostrarPanelTablet');
            }
        });
        panelSeleccionado.classList.toggle('ocultarPanelTablet');
        panelSeleccionado.classList.toggle('mostrarPanelTablet');
    }
}

function moverTablet(idDestino, panelSeleccionado) {

    const anchoVentana = window.innerWidth;
    if (anchoVentana >= 501 && anchoVentana <= 900) {
        const panel = document.getElementById(panelSeleccionado);
        const activo = panel.classList.contains('mostrarPanelTablet');
        if (!activo) {
            setTimeout(() => {
                const elemento = document.getElementById(idDestino);
                if (elemento) {
                    elemento.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 50);
        }
    }
}


document.getElementById('mision__titulo').addEventListener('click', function () {
    const elementoInformacion = document.getElementById('misionInformacion');
    const misionTitulo = document.getElementById('mision__titulo');
    mostrarOcultarInformacionP(elementoInformacion, misionTitulo, 'ocultarInformacionProposito');
});
document.getElementById('vision__titulo').addEventListener('click', function () {
    const elementoInformacion = document.getElementById('visionInformacion');
    const visionTitulo = document.getElementById('vision__titulo');
    mostrarOcultarInformacionP(elementoInformacion, visionTitulo, 'ocultarInformacionProposito');
});

document.getElementById('panelISR__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesIRS'));
});
document.getElementById('panelGestionSostenibleA__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesGestionSostenibleA'));
});
document.getElementById('panelGestionAreasV__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesGestionAreasV'));
});
document.getElementById('panelDisminucionGasesEI__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesDisminucionGasesEI'));
});



document.getElementById('panelISR__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletIRS'),
        moverTablet('IDpanelTabletIRS', 'panelTabletIRS')
    );
});
document.getElementById('panelGestionSostenibleA__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletGestionSostenibleA'),
        moverTablet('IDpanelTabletGestionSostenibleA', 'panelTabletGestionSostenibleA')
    );
});
document.getElementById('panelGestionAreasV__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletGestionAreasV'),
        moverTablet('IDpanelTabletGestionAreasV', 'panelTabletGestionAreasV')
    );
});
document.getElementById('panelDisminucionGasesEI__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletDisminucionGasesEI'),
        moverTablet('IDpanelTabletDisminucionGasesEI', 'panelTabletDisminucionGasesEI')
    );
});
































// Variables para el control de arrastre
let isDragging = false;
let startX;
let scrollLeft;
let momentumID;
let cursorX;

// Seleccionar el contenedor del carrusel
const carruselContenedor = document.querySelector('.carrusel-contenedor');

// Guardar la animación original
const originalAnimation = window.getComputedStyle(carruselContenedor).animation;

// Añadir estilos para mejorar la experiencia de arrastre
carruselContenedor.style.cursor = 'grab';
carruselContenedor.style.userSelect = 'none';
carruselContenedor.style.transition = 'transform 0.1s ease';

// Desactivar la animación CSS original
carruselContenedor.style.animation = 'none';

// Función para iniciar el arrastre
function startDrag(e) {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = getCurrentTranslate();
    cursorX = startX;
    
    // Cambiar cursor
    carruselContenedor.style.cursor = 'grabbing';
    
    // Prevenir selección de texto y comportamiento predeterminado
    e.preventDefault();
}

// Función durante el arrastre
function duringDrag(e) {
    if (!isDragging) return;
    
    const x = e.pageX || e.touches[0].pageX;
    
    // Aplicar el desplazamiento
    setTranslate(scrollLeft + x - startX);
    
    // Actualizar para momentum
    cursorX = x;
}

// Función para finalizar el arrastre
function endDrag() {
    if (!isDragging) return;
    
    isDragging = false;
    carruselContenedor.style.cursor = 'grab';
    
    // Aplicar efecto de momentum
    applyMomentum();
}

// Función para obtener el valor actual de translateX
function getCurrentTranslate() {
    const style = window.getComputedStyle(carruselContenedor);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41;
}

// Función para aplicar translateX
function setTranslate(x) {
    // Limitar el desplazamiento para que no se salga de los límites
    const maxScroll = carruselContenedor.scrollWidth - carruselContenedor.clientWidth;
    if (x > 0) x = 0;
    if (x < -maxScroll) x = -maxScroll;
    
    carruselContenedor.style.transform = `translateX(${x}px)`;
}

// Función para aplicar efecto de momentum al soltar
function applyMomentum() {
    // Calcular velocidad basada en el movimiento final
    const finalX = cursorX;
    const velocity = finalX - startX;
    
    // Aplicar desaceleración progresiva
    let momentum = velocity * 0.5;
    let targetScroll = getCurrentTranslate() + momentum;
    
    // Limitar el desplazamiento
    const maxScroll = carruselContenedor.scrollWidth - carruselContenedor.clientWidth;
    if (targetScroll > 0) targetScroll = 0;
    if (targetScroll < -maxScroll) targetScroll = -maxScroll;
    
    // Animación suave hacia la posición final
    carruselContenedor.style.transition = 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Restaurar transición después de la animación
    setTimeout(() => {
        carruselContenedor.style.transition = 'transform 0.1s ease';
    }, 500);
}

// Event listeners para mouse
carruselContenedor.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', duringDrag);
document.addEventListener('mouseup', endDrag);

// Event listeners para touch
carruselContenedor.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', duringDrag);
document.addEventListener('touchend', endDrag);

// Prevenir arrastre de imágenes
document.querySelectorAll('.tarjeta img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// Mantener la funcionalidad existente de pausa al hacer hover
const carrusel = document.querySelector('.Carrusel');
carrusel.addEventListener('mouseenter', () => {
    carruselContenedor.style.animationPlayState = 'paused';
    
    const tarjetas2 = document.querySelectorAll('.tarjeta');
    tarjetas2.forEach((tarjeta) => {
        tarjeta.addEventListener('mouseover', () => {
            tarjeta.classList.add('borde-rojo');
        });

        tarjeta.addEventListener('mouseout', () => {
            tarjeta.classList.remove('borde-rojo');
        });
    });
});

carrusel.addEventListener('mouseleave', () => {
    carruselContenedor.style.animationPlayState = 'running';
});

