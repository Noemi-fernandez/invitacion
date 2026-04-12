// ========== PERGAMINO INICIAL ==========
const pergaminoInicial = document.getElementById('pergamino-inicial');
const pergaminoRoll = document.getElementById('pergaminoRoll');
const invitacionPrincipal = document.getElementById('invitacion-principal');
const musicPlayer = document.getElementById('musicPlayer');

// Función para desenrollar el pergamino
function desenrollarPergamino() {
    pergaminoInicial.style.transform = 'translateY(-100%)';

    setTimeout(() => {
        pergaminoInicial.style.display = 'none';
        invitacionPrincipal.style.display = 'block';
        musicPlayer.style.display = 'flex';

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    }, 1200);
}

pergaminoRoll.addEventListener('click', desenrollarPergamino);

// ========== MÚSICA DE FONDO ==========
// Usamos una fuente de audio gratuita y confiable
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
audio.loop = true;
audio.volume = 0.5;

const btnPlay = document.getElementById('btnPlayMusic');
const btnPause = document.getElementById('btnPauseMusic');

btnPlay.addEventListener('click', () => {
    audio.play().catch(e => console.log('Audio requiere interacción del usuario'));
});

btnPause.addEventListener('click', () => {
    audio.pause();
});

// ========== CONTADOR REGRESIVO ==========
const fechaObjetivo = new Date("November 21, 2026 15:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diff = fechaObjetivo - ahora;

    if (diff <= 0) {
        document.getElementById('diasCont').innerText = "00";
        document.getElementById('horasCont').innerText = "00";
        document.getElementById('minutosCont').innerText = "00";
        document.getElementById('segundosCont').innerText = "00";
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('diasCont').innerText = dias < 10 ? "0" + dias : dias;
    document.getElementById('horasCont').innerText = horas < 10 ? "0" + horas : horas;
    document.getElementById('minutosCont').innerText = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById('segundosCont').innerText = segundos < 10 ? "0" + segundos : segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// ========== CONFIRMACIÓN POR WHATSAPP ==========
// Confirmación por WhatsApp - versión mejorada
const btnWhatsApp = document.getElementById('btnConfirmarWhatsApp');
btnWhatsApp.addEventListener('click', (e) => {
    e.preventDefault();
    const telefono = "527224555662"; // Reemplaza con tu número real
    const mensaje = "Hola! Confirmo mi asistencia a los XV años de Itza Nahomy.%0A%0A*Nombre(s):* %0A*Número de personas:* %0A*Niños (edades):* %0A¡Gracias!";
    
    // Detectar si es móvil o computadora
    const esMovil = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (esMovil) {
        // En móvil: abre la app de WhatsApp
        window.location.href = `whatsapp://send?phone=${telefono}&text=${mensaje}`;
    } else {
        // En computadora: abre WhatsApp Web
        window.open(`https://web.whatsapp.com/send?phone=${telefono}&text=${mensaje}`, '_blank');
    }
});
    // ========== BOTONES DE REGALOS ==========
    const btnRegaloLista = document.getElementById('btnRegaloLista');
    const btnRegaloMercado = document.getElementById('btnRegaloMercado');

    btnRegaloLista.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://www.liverpool.com.mx/tienda/home', '_blank');
    });

    btnRegaloMercado.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://www.mercadolibre.com.mx/', '_blank');
    });

    // ========== MODAL DE MAPAS ==========
const modal = document.getElementById('mapModal');
const modalTitle = document.getElementById('modalTitle');
const modalOpenMaps = document.getElementById('modalOpenMaps');
const closeModal = document.querySelector('.modal-close');

let currentMapUrl = '';

function openModal(title, mapsLink) {
    if (modalTitle) modalTitle.innerText = title;
    if (modalOpenMaps) modalOpenMaps.href = mapsLink;
    if (modal) modal.style.display = 'flex';
    
    // Opcional: mostrar un mensaje o imagen en el contenedor
    const mapContainer = document.getElementById('modalMapContainer');
    if (mapContainer) {
        mapContainer.innerHTML = '<p style="text-align:center; padding:20px;">📍 Haz clic en "Abrir en Google Maps" para ver la ubicación exacta</p>';
    }
}

function closeModalFunc() {
    if (modal) modal.style.display = 'none';
}

if (closeModal) {
    closeModal.addEventListener('click', closeModalFunc);
}

if (modal) {
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunc();
    });
}

// ========== UBICACIONES ==========

const fiestaLocation = {
    title: "Las Tres Cúpulas",
    mapsLink: "https://maps.app.goo.gl/cUFveHeCdVttXW5X8"
};

// ========== BOTONES DE MAPA ==========
const mapaMisaBtn = document.getElementById('mapaMisaBtn');
const mapaFiestaBtn = document.getElementById('mapaFiestaBtn');

if (mapaFiestaBtn) {
    mapaFiestaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(fiestaLocation.title, fiestaLocation.mapsLink);
    });
}
    // ========== ESTADO INICIAL ==========
    window.addEventListener('DOMContentLoaded', () => {
        invitacionPrincipal.style.display = 'none';
        pergaminoInicial.style.transform = 'translateY(0)';
        pergaminoInicial.style.display = 'flex';
        musicPlayer.style.display = 'none';

        // Precargar audio
        audio.load();
    });
// Función para leer datos de la URL
function personalizarInvitacion() {
    const urlParams = new URLSearchParams(window.location.search);
    const pases = urlParams.get('pases'); // Lee ?pases=3
    const familia = urlParams.get('familia'); // Lee ?familia=Fuentes

    if (pases) {
        document.getElementById('numPases').innerText = pases;
    } else {
        document.getElementById('numPases').innerText = "2"; // Valor por defecto
    }

    if (familia) {
        document.getElementById('nombreFamilia').innerText = familia.toUpperCase();
    }
}

// Ejecutar al cargar la página
window.onload = personalizarInvitacion;

    // ========== EFECTO DE DESVANECIMIENTO AL SCROLL ==========
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const pergaminoCuerpo = document.querySelector('.pergamino-cuerpo');
        if (pergaminoCuerpo) {
            const opacity = Math.max(0.95, 1 - scrollPosition / 1000);
            pergaminoCuerpo.style.opacity = opacity;
        }
    });