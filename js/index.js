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

function mostrarOcultarPanelTablet(panelSeleccionado) {
    const anchoVentana = window.innerWidth;

    // Solo ejecuta la función si el ancho de la ventana está entre 501 y 900px
    if (anchoVentana >= 501 && anchoVentana <= 900) {
        const paneles = document.querySelectorAll('.panelTablet');

        panelSeleccionado.classList.toggle('ocultarPanelTablet');
        panelSeleccionado.classList.toggle('mostrarPanelTablet');

        paneles.forEach((panel) => {
            if (panelSeleccionado !== panel) {
                panel.classList.add('ocultarPanelTablet');
                panel.classList.remove('mostrarPanelTablet');
            }
        });
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
    mostrarOcultarPanelTablet(document.getElementById('panelTabletIRS'));
});
document.getElementById('panelGestionSostenibleA__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletGestionSostenibleA'));
});
document.getElementById('panelGestionAreasV__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletGestionAreasV'));
});
document.getElementById('panelDisminucionGasesEI__tituloContenido').addEventListener('click', function () {
    mostrarOcultarPanelTablet(document.getElementById('panelTabletDisminucionGasesEI'));
});
