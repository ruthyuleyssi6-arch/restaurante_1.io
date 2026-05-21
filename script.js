// ===== MENÚ PARA DISPOSITIVOS MÓVILES =====
const botonMenu = document.getElementById('menuMovil');
const menuNavegacion = document.querySelector('.menu');

botonMenu.addEventListener('click', () => {
    menuNavegacion.classList.toggle('activo');
    // Cambia el ícono cuando se abre/cierra el menú
    botonMenu.innerHTML = menuNavegacion.classList.contains('activo') 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace
const enlacesMenu = document.querySelectorAll('.menu a');
enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', () => {
        menuNavegacion.classList.remove('activo');
        botonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});

// ===== EFECTO EN LA BARRA DE NAVEGACIÓN AL HACER SCROLL =====
const cabecera = document.querySelector('.cabecera');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        cabecera.style.background = 'rgba(255, 255, 255, 0.98)';
        cabecera.style.boxShadow = '0 3px 15px rgba(0,0,0,0.15)';
    } else {
        cabecera.style.background = 'rgba(255, 255, 255, 0.95)';
        cabecera.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ===== FUNCIÓN DEL BUSCADOR =====
const inputBuscar = document.getElementById('buscar');
const botonBuscar = document.querySelector('.buscador button');

function realizarBusqueda() {
    const texto = inputBuscar.value.trim().toLowerCase();
    if (texto === '') {
        alert('Por favor escribe lo que deseas buscar');
        return;
    }

    // Redirige o muestra mensaje según lo buscado
    if (texto.includes('plato') || texto.includes('comida') || texto.includes('ceviche') || texto.includes('lomo')) {
        window.location.href = '#carta';
        alert(`Mostrando resultados para: "${texto}"`);
    } else if (texto.includes('reserva') || texto.includes('mesa')) {
        window.location.href = '#reserva';
        alert(`Mostrando resultados para: "${texto}"`);
    } else if (texto.includes('evento') || texto.includes('fiesta')) {
        window.location.href = '#eventos';
        alert(`Mostrando resultados para: "${texto}"`);
    } else if (texto.includes('contacto') || texto.includes('teléfono')) {
        window.location.href = '#contacto';
        alert(`Mostrando resultados para: "${texto}"`);
    } else {
        alert(`No encontramos resultados para: "${texto}". Intenta con otro término.`);
    }
    inputBuscar.value = '';
}

botonBuscar.addEventListener('click', realizarBusqueda);
inputBuscar.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') realizarBusqueda();
});

// ===== ENVÍO DEL FORMULARIO DE RESERVAS =====
const formularioReserva = document.getElementById('formReserva');
formularioReserva.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener los datos ingresados
    const nombre = formularioReserva[0].value;
    const telefono = formularioReserva[1].value;
    const fecha = formularioReserva[2].value;
    const hora = formularioReserva[3].value;
    const personas = formularioReserva[4].value;

    // Mensaje de confirmación
    alert(`✅ ¡Reserva realizada con éxito!

Gracias ${nombre}.
Te esperamos el día ${fecha} a las ${hora} hs.
Para ${personas} personas.
Te contactaremos pronto al número: ${telefono}

¡Buen provecho!`);

    // Limpiar formulario después de enviar
    formularioReserva.reset();
});

// ===== ANIMACIÓN AL APARECER LAS SECCIONES =====
const secciones = document.querySelectorAll('.seccion');
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

secciones.forEach(seccion => {
    seccion.style.opacity = '0';
    seccion.style.transform = 'translateY(30px)';
    seccion.style.transition = 'all 0.8s ease';
    observador.observe(seccion);
});