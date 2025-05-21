const botonIgual = document.getElementById('AbrirM');
const botonX = document.getElementById('CerrarM');
const menuHamburguesa = document.getElementById('CH');
const main = document.getElementById('main');

function cambiarBotonHamburguesa() {
    const servicios = document.getElementById('DropD');
    const calendario = document.getElementById('Calen');

    const dropdown1 = document.querySelector('.dropdown1');
    const dropdown2 = document.querySelector('.dropdown2');
    const dropdown3 = document.querySelector('.dropdown3');

    const desplegableDd1 = document.getElementById('desplegableDd1');
    const desplegableDd2 = document.getElementById('desplegableDd2');
    const desplegableDd3 = document.getElementById('desplegableDd3');

    const flecha1 = document.querySelector('.flechaItem1');
    const flecha2 = document.querySelector('.flechaItem2');
    const flecha3 = document.querySelector('.flechaItem3');


    botonIgual.classList.toggle('ocultarBoton');
    botonX.classList.toggle('ocultarBoton');
    botonX.classList.toggle('mostrarBoton');
    menuHamburguesa.classList.toggle("visible");

    // Coloca la altura del nav en CP
    const alturaMenu = menuHamburguesa.offsetHeight;
    document.documentElement.style.setProperty('--alturaMenu', `${alturaMenu}px`);
    main.classList.toggle('menuDesplegado');

    dropdown1.style.display = "none";
    dropdown2.style.display = "none";
    dropdown3.style.display = "none";

    calendario.classList.remove('dpd2Desplegado');
    servicios.classList.remove('dpd1Desplegado');

    desplegableDd1.classList.remove('dpd1Desplegado');
    desplegableDd2.classList.remove('dpd2Desplegado');
    desplegableDd3.classList.remove('dpd3Desplegado');

    flecha1.classList.remove('rotado');
    flecha2.classList.remove('rotado');
    flecha3.classList.remove('rotado');
}



function reiniciarMenu() {
    if (window.innerWidth > 959) {
        main.classList.remove('menuDesplegado');
        botonIgual.classList.remove('ocultarBoton');
        botonX.classList.add('ocultarBoton');
        botonX.classList.remove('mostrarBoton');
        menuHamburguesa.classList.remove("visible");
    }
}

function mostrarOcultarSubMenusNav(dropdownSeleccionado) {
    const dropdowns = document.querySelectorAll("[class^='dropdown']");
    const dropdown1 = document.querySelector('.dropdown1');
    const dropdown2 = document.querySelector('.dropdown2');
    const dropdown3 = document.querySelector('.dropdown3');

    const servicios = document.getElementById('DropD');
    const calendario = document.getElementById('Calen');

    const desplegableDd1 = document.getElementById('desplegableDd1');
    const desplegableDd2 = document.getElementById('desplegableDd2');
    const desplegableDd3 = document.getElementById('desplegableDd3');

    const flecha1 = document.querySelector('.flechaItem1');
    const flecha2 = document.querySelector('.flechaItem2');
    const flecha3 = document.querySelector('.flechaItem3');


    dropdowns.forEach((dropdown) => {
        if (dropdownSeleccionado != dropdown) {
            dropdown.style.display = "none";
        }
    });

    if (dropdownSeleccionado === dropdown1) {
        dropdown2.style.display = "none";
        dropdown3.style.display = "none";

        desplegableDd2.classList.remove('dpd2Desplegado');
        desplegableDd3.classList.remove('dpd3Desplegado');

        flecha2.classList.remove('rotado');
        flecha3.classList.remove('rotado');
        
        calendario.classList.remove('dpd2Desplegado');
    } else if (dropdownSeleccionado === dropdown2) {
        dropdown1.style.display = "none";
        dropdown3.style.display = "none";

        desplegableDd1.classList.remove('dpd1Desplegado');
        desplegableDd3.classList.remove('dpd3Desplegado');

        flecha1.classList.remove('rotado');
        flecha3.classList.remove('rotado');

        servicios.classList.remove('dpd1Desplegado');
    } else {
        dropdown1.style.display = "none";
        dropdown2.style.display = "none";

        desplegableDd1.classList.remove('dpd1Desplegado');
        desplegableDd2.classList.remove('dpd2Desplegado');

        flecha1.classList.remove('rotado');
        flecha2.classList.remove('rotado');

        calendario.classList.remove('dpd2Desplegado');
        servicios.classList.remove('dpd1Desplegado');
    }
}

document.getElementById('DropD0').addEventListener('click', function () {
    mostrarOcultarSubMenusNav(document.getElementById('dropdown1'));
});

// document.getElementById('DropD0').addEventListener('click', function (event) {
//     event.stopPropagation(); // Evita que se cierre inmediatamente al hacer clic
//     mostrarOcultarSubMenusNav(document.getElementById('dropdown1'));
// });

document.getElementById('DropD').addEventListener('click', function (event) {
    // event.stopPropagation();
    mostrarOcultarSubMenusNav(document.getElementById('dropdown2'));
});

document.getElementById('DropD2').addEventListener('click', function (event) {
    // event.stopPropagation();
    mostrarOcultarSubMenusNav(document.getElementById('dropdown3'));
});

window.addEventListener('resize', reiniciarMenu);
document.getElementById('botonesMenuH').addEventListener('click', cambiarBotonHamburguesa);