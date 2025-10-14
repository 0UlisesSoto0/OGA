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

// CÓDIGO UNIFICADO PARA AMBOS CARRUSELES

function inicializarCarrusel(selectorCarrusel, selectorContenedor) {
    // Seleccionar los elementos específicos para este carrusel
    const carrusel = document.querySelector(selectorCarrusel);
    const carruselContenedor = document.querySelector(selectorContenedor);

    if (!carrusel || !carruselContenedor) {
        return;
    }

    let seDesplaza = false;
    let startX;
    let scrollLeft;
    let isManualMode = false;
    let animationId;
    let lastTimestamp;
    let velocidadAuto = -0.8;

    // Anula animaciones de CSS
    carruselContenedor.style.animation = 'none'; 
    carruselContenedor.style.cursor = 'grab';
    carruselContenedor.style.userSelect = 'none';

    // Clonar tarjetas para efecto infinito
    const tarjetasOriginales = Array.from(carruselContenedor.children);
    tarjetasOriginales.forEach(tarjeta => {
        const clon = tarjeta.cloneNode(true);
        carruselContenedor.appendChild(clon);
    });

    // Ancho del contenido (se divide entre 2 por la clonación)
    const anchoContenido = carruselContenedor.scrollWidth / 2;

    // movimiento
    function getCurrentTranslate() {
        const style = window.getComputedStyle(carruselContenedor);
        const matrix = new DOMMatrixReadOnly(style.transform);
        return matrix.m41 || 0;
    }

    function setTranslate(x) {
        let nuevaX = x;
        if (x < -anchoContenido) {
            // Si llega al final, reinicia suavemente
            nuevaX += anchoContenido;
        } else if (x > 0) {
            // Si se arrastra hacia atrás, también crea el bucle
            nuevaX -= anchoContenido;
        }
        carruselContenedor.style.transform = `translateX(${nuevaX}px)`;
    }

    // automática
    function animarAuto(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;

        if (!isManualMode && !seDesplaza) {
            const currentX = getCurrentTranslate();
            setTranslate(currentX + velocidadAuto);
        }

        if (isManualMode || seDesplaza) {
            lastTimestamp = timestamp;
        }

        animationId = requestAnimationFrame(animarAuto);
    }

    // manual
    function startDrag(e) {
        seDesplaza = true;
        isManualMode = true;
        startX = e.pageX || e.touches[0].pageX;
        scrollLeft = getCurrentTranslate();
        carruselContenedor.style.cursor = 'grabbing';
        carruselContenedor.style.transition = 'none';
        e.preventDefault();
    }

    function duringDrag(e) {
        if (!seDesplaza) return;
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        setTranslate(scrollLeft + walk);
    }

    function endDrag() {
        if (!seDesplaza) return;
        seDesplaza = false;
        carruselContenedor.style.cursor = 'grab';
        carruselContenedor.style.transition = 'transform 0.3s ease';
    }

    // eventos
    carruselContenedor.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', duringDrag);
    document.addEventListener('mouseup', endDrag);
    carruselContenedor.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', duringDrag);
    document.addEventListener('touchend', endDrag);

    // pausar al hacer hover
    carrusel.addEventListener('mouseenter', () => {
        velocidadAuto = 0;
    });

    // reanudar
    carrusel.addEventListener('mouseleave', () => {
        velocidadAuto = -0.8;
        isManualMode = false;
        carruselContenedor.style.transition = 'none';
    });

    requestAnimationFrame(animarAuto);
}


inicializarCarrusel('.Carrusel', '.carrusel-contenedor');
inicializarCarrusel('.Carrusel2', '.carrusel2-contenedor');


// general

document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    tarjeta.addEventListener('mouseover', () => {
        tarjeta.classList.add('borde-rojo');
    });
    tarjeta.addEventListener('mouseout', () => {
        tarjeta.classList.remove('borde-rojo');
    });
});

document.querySelectorAll('.tarjeta img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Limpiar la animación al salir de la página
window.addEventListener('beforeunload', () => {
});
