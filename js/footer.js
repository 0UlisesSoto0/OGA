

function mostrarOcultarEnlacesUAM() {
    const elementoDesplegable = document.getElementById('deplegableUnidadesUAM');
    const seccion3 = document.getElementById('fSeccion3Titulo');

    elementoDesplegable.classList.toggle('ocultarUnidadesUAM');
    elementoDesplegable.classList.toggle('mostrarUnidadesUAM');
    seccion3.classList.toggle('rotarFlecha')
}

document.getElementById('fSeccion3Titulo').addEventListener('click', mostrarOcultarEnlacesUAM);
