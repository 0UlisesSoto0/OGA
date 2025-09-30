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































// // Variables para el control de arrastre
// let seDesplaza = false; // Bandera que indica si el usuario está arrastrando el carrusel
// let inicioX; // Posición X inicial del mouse/touch cuando comienza el arrastre
// let desplazamiento; // Valor de desplazamiento inicial del carrusel al comenzar el arrastre
// let cursorX; // Posición X actual del cursor durante el arrastre

// // Seleccionar el contenedor del carrusel
// const carruselContenedor = document.querySelector('.carrusel-contenedor');

// // Guardar la animación original
// const originalAnimation = window.getComputedStyle(carruselContenedor).animation; // Almacena la animación CSS original del carrusel

// // Añadir estilos para mejorar la experiencia de arrastre
// carruselContenedor.style.cursor = 'grab'; // Cambia el cursor a "agarrar" cuando está sobre el carrusel
// carruselContenedor.style.userSelect = 'none'; // Evita que el usuario seleccione texto accidentalmente
// carruselContenedor.style.transition = 'transform 0.1s ease'; // Aplica transición suave a las transformaciones

// // Desactivar la animación CSS original
// carruselContenedor.style.animation = 'none'; // Elimina la animación automática para permitir el control manual

// // Función para iniciar el arrastre
// function startDrag(e) {
//     seDesplaza = true; // Activa el estado de arrastre
//     inicioX = e.pageX || e.touches[0].pageX; // Obtiene la posición X inicial (mouse o touch)
//     desplazamiento = getCurrentTranslate(); // Guarda la posición actual de desplazamiento
//     cursorX = inicioX; // Inicializa la posición del cursor
    
//     // Cambiar cursor
//     carruselContenedor.style.cursor = 'grabbing'; // Cambia a cursor de "agarrando" durante el arrastre
    
//     // Prevenir selección de texto y comportamiento predeterminado
//     e.preventDefault(); // Evita comportamientos no deseados del navegador
// }

// // Función durante el arrastre
// function duringDrag(e) {
//     if (!seDesplaza) return; // Si no está en modo arrastre, sale de la función
    
//     const x = e.pageX || e.touches[0].pageX; // Obtiene la posición X actual (mouse o touch)
    
//     // Aplicar el desplazamiento
//     setTranslate(desplazamiento + x - inicioX); // Calcula y aplica el nuevo desplazamiento
    
//     // Actualizar para momentum
//     cursorX = x; // Guarda la posición actual para cálculos de momentum
// }

// // Función para finalizar el arrastre
// function endDrag() {
//     if (!seDesplaza) return; // Si no estaba arrastrando, sale de la función
    
//     seDesplaza = false; // Desactiva el estado de arrastre
//     carruselContenedor.style.cursor = 'grab'; // Restaura el cursor a estado normal
    
//     // Aplicar efecto de momentum
//     applyMomentum(); // Aplica el efecto de deslizamiento continuo al soltar
// }

// // Función para obtener el valor actual de translateX
// function getCurrentTranslate() {
//     const style = window.getComputedStyle(carruselContenedor); // Obtiene los estilos computados del elemento
//     const matrix = new DOMMatrixReadOnly(style.transform); // Convierte la transformación a matriz
//     return matrix.m41; // Devuelve el valor translateX (posición en el eje X)
// }

// // Función para aplicar translateX
// function setTranslate(x) {
//     // Limitar el desplazamiento para que no se salga de los límites
//     const maxScroll = carruselContenedor.scrollWidth - carruselContenedor.clientWidth; // Calcula el desplazamiento máximo posible
//     if (x > 0) x = 0; // Evita que se desplace más allá del inicio
//     if (x < -maxScroll) x = -maxScroll; // Evita que se desplace más allá del final
    
//     carruselContenedor.style.transform = `translateX(${x}px)`; // Aplica la transformación CSS
// }

// // Función para aplicar efecto de momentum al soltar
// function applyMomentum() {
//     // Calcular velocidad basada en el movimiento final
//     const finalX = cursorX; // Posición final del cursor
//     const velocity = finalX - inicioX; // Calcula la velocidad del movimiento
    
//     // Aplicar desaceleración progresiva
//     let momentum = velocity * 0.5; // Reduce la velocidad para el efecto momentum
//     let targetScroll = getCurrentTranslate() + momentum; // Calcula la posición objetivo
    
//     // Limitar el desplazamiento
//     const maxScroll = carruselContenedor.scrollWidth - carruselContenedor.clientWidth; // Recalcula límites
//     if (targetScroll > 0) targetScroll = 0; // Limita al inicio
//     if (targetScroll < -maxScroll) targetScroll = -maxScroll; // Limita al final
    
//     // Animación suave hacia la posición final
//     carruselContenedor.style.transition = 'transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Aplica transición suave
    
//     // Restaurar transición después de la animación
//     setTimeout(() => {
//         carruselContenedor.style.transition = 'transform 0.1s ease'; // Vuelve a la transición original
//     }, 500); // Después de 500ms
// }

// // Event listeners para mouse
// carruselContenedor.addEventListener('mousedown', startDrag); // Inicia arrastre con click
// document.addEventListener('mousemove', duringDrag); // Detecta movimiento durante arrastre
// document.addEventListener('mouseup', endDrag); // Finaliza arrastre al soltar

// // Event listeners para touch
// carruselContenedor.addEventListener('touchstart', startDrag); // Inicia arrastre en dispositivos táctiles
// document.addEventListener('touchmove', duringDrag); // Detecta movimiento táctil
// document.addEventListener('touchend', endDrag); // Finaliza arrastre táctil

// // Prevenir arrastre de imágenes
// document.querySelectorAll('.tarjeta img').forEach(img => {
//     img.addEventListener('dragstart', (e) => {
//         e.preventDefault(); // Evita que las imágenes se arrastren (comportamiento por defecto)
//     });
// });

// // Mantener la funcionalidad existente de pausa al hacer hover
// const carrusel = document.querySelector('.Carrusel');
// carrusel.addEventListener('mouseenter', () => {
//     carruselContenedor.style.animationPlayState = 'paused'; // Pausa la animación al entrar al carrusel
    
//     const tarjetas2 = document.querySelectorAll('.tarjeta');
//     tarjetas2.forEach((tarjeta) => {
//         tarjeta.addEventListener('mouseover', () => {
//             tarjeta.classList.add('borde-rojo'); // Añade borde rojo al pasar sobre tarjeta
//         });

//         tarjeta.addEventListener('mouseout', () => {
//             tarjeta.classList.remove('borde-rojo'); // Quita borde rojo al salir de tarjeta
//         });
//     });
// });

// carrusel.addEventListener('mouseleave', () => {
//     carruselContenedor.style.animationPlayState = 'running'; // Reanuda animación al salir del carrusel
// });


// Variables para el control
let seDesplaza = false;
let startX;
let scrollLeft;
let isManualMode = false;
let animationId;
let lastTimestamp;
let velocidadAuto = -0.8;

// Seleccionar elementos
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const carrusel = document.querySelector('.Carrusel');

// Configuración inicial
carruselContenedor.style.animation = 'none';
carruselContenedor.style.cursor = 'grab';
carruselContenedor.style.userSelect = 'none';

// Obtener el ancho total del contenido original
function getAnchoContenidoOriginal() {
    const tarjetasOriginales = [...carruselContenedor.children].slice(0, 7);
    return tarjetasOriginales.reduce((total, tarjeta) => total + tarjeta.offsetWidth + 20, 0);
}

const anchoContenido = getAnchoContenidoOriginal();

// Función para obtener posición actual
function getCurrentTranslate() {
    const style = window.getComputedStyle(carruselContenedor);
    const matrix = new DOMMatrixReadOnly(style.transform);
    return matrix.m41 || 0;
}

// Función para aplicar translateX con efecto infinito
function setTranslate(x) {
    let nuevaX = x;
    
    // Efecto infinito
    if (x < -anchoContenido) {
        nuevaX = 0;
    } else if (x > 0) {
        nuevaX = -anchoContenido;
    }
    
    carruselContenedor.style.transform = `translateX(${nuevaX}px)`;
    return nuevaX;
}

// ANIMACIÓN AUTOMÁTICA
function animarAuto(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    
    if (delta > 16 && !isManualMode && !seDesplaza) {
        const currentX = getCurrentTranslate();
        setTranslate(currentX + velocidadAuto);
        lastTimestamp = timestamp;
    }
    
    animationId = requestAnimationFrame(animarAuto);
}

// INICIAR animación automática
animationId = requestAnimationFrame(animarAuto);

// FUNCIONES DE ARRASTRE MANUAL
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
    
    // NO volver a automático aquí - solo al alejar el cursor
}

// EVENT LISTENERS
carruselContenedor.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', duringDrag);
document.addEventListener('mouseup', endDrag);

carruselContenedor.addEventListener('touchstart', startDrag);
document.addEventListener('touchmove', duringDrag);
document.addEventListener('touchend', endDrag);

// CORRECCIÓN: Vuelve a automático SOLO cuando el mouse sale del carrusel
carrusel.addEventListener('mouseleave', () => {
    if (isManualMode && !seDesplaza) {
        isManualMode = false;
    }
});

// Prevenir arrastre de imágenes
document.querySelectorAll('.tarjeta img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Pausar al hacer hover (solo en modo automático)
carrusel.addEventListener('mouseenter', () => {
    if (!isManualMode) {
        velocidadAuto = 0;
    }
    
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
    if (!isManualMode) {
        velocidadAuto = -0.8;
    }
});

// Limpiar al desmontar
window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationId);
});