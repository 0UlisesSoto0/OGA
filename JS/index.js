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
function mostrarOcultarEnlacesUAM(){
    const elementoDesplegable = document.getElementById('deplegableUnidadesUAM');
    const seccion3 = document.getElementById('fSeccion3Titulo');

    elementoDesplegable.classList.toggle('ocultarUnidadesUAM');
    elementoDesplegable.classList.toggle('mostrarUnidadesUAM');
    seccion3.classList.toggle('rotarFlecha')
}

function mostrarOcultarPanelEnlace(panelSeleccionado){
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
document.getElementById('fSeccion3Titulo').addEventListener('click', mostrarOcultarEnlacesUAM);

document.getElementById('panelISR__tituloContenido').addEventListener('click', function(){
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesIRS'));
});
document.getElementById('panelGestionSostenibleA__tituloContenido').addEventListener('click', function(){
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesGestionSostenibleA'));
});
document.getElementById('panelGestionAreasV__tituloContenido').addEventListener('click', function(){
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesGestionAreasV'));
});
document.getElementById('panelDisminucionGasesEI__tituloContenido').addEventListener('click', function(){
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesDisminucionGasesEI'));
});
document.getElementById('panelConsumoResponsable__tituloContenido').addEventListener('click', function(){
    mostrarOcultarPanelEnlace(document.getElementById('panelEnlacesConsumoResponsable'));
});