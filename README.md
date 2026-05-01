<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <meta name="description"
        content="Invitación a los XV años de DANIELA - Celebración especial el 21 de Noviembre 2026">
    <title>XV Años - DANIELA | Celebración Real</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Pinyon+Script&family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- SOBRE INICIAL - PERGAMINO ENROLLADO -->
    <div id="pergamino-inicial" class="pergamino-inicial-container">
        <div class="pergamino-roll" id="pergaminoRoll">
            <div class="rollo-superior"></div>
            <div class="cuerpo-rollo">
                <div class="sello-cera">✧</div>
                <div class="texto-rollo">Invitación</div>
                <div class="nombre-rollo">DANIELA</div>
                <div class="texto-rollo-small">XV Años</div>
                <div class="indicacion-tocar">✦ Toca para abrir ✦</div>
            </div>
            <div class="rollo-inferior"></div>
        </div>
    </div>

    <!-- REPRODUCTOR DE MÚSICA (visible y funcional) -->
    <div class="music-player" id="musicPlayer" style="display: none;">
        <div class="music-info">
            <span class="music-icon">🎵</span>
            <span class="music-title">Música para celebrar</span>
        </div>
        <div class="music-controls">
            <button id="btnPlayMusic" class="music-btn">▶</button>
            <button id="btnPauseMusic" class="music-btn">⏸</button>
        </div>
    </div>

    <!-- PERGAMINO PRINCIPAL - INVITACIÓN DESPLEGADA -->
    <div id="invitacion-principal">
        <div class="pergamino-outer">
            <div class="rodillo rodillo-top"></div>
            <div class="pergamino-cuerpo">
                <!-- Encabezado -->
                <div class="subtitulo-heraldico">
                    <span class="linea-dorada"></span>
                    ✧ EL HONOR DE SU PRESENCIA ✧
                    <span class="linea-dorada"></span>
                </div>
                <h1 class="nombre-quince"> DANIELA</h1>
                <div class="fecha-estilo">
                    <span class="fecha-dia">SÁBADO 21</span>
                    <span class="fecha-mes">NOVIEMBRE</span>
                    <span class="fecha-ano">2026</span>
                </div>

                <!-- Marco de foto -->
                <div class="medallon-foto">
                    <div class="marco-dorado">
                        <img src="images.png" alt="Quinceañera DANIELA"
                            onerror="this.src='https://via.placeholder.com/400x500?text=DANIELA'">
                    </div>
                </div>

                <!-- CONTADOR -->
                <div class="countdown-wrapper">
                    <p class="countdown-titulo">✨ FALTAN PARA EL GRAN DÍA ✨</p>
                    <div class="contador-numeros">
                        <div class="caja-tiempo"><span id="diasCont">00</span><small>DÍAS</small></div>
                        <div class="caja-tiempo"><span id="horasCont">00</span><small>HORAS</small></div>
                        <div class="caja-tiempo"><span id="minutosCont">00</span><small>MINUTOS</small></div>
                        <div class="caja-tiempo"><span id="segundosCont">00</span><small>SEGUNDOS</small></div>
                    </div>
                </div>

                <!-- SECCIÓN PADRES -->
                <div class="familia-section">
                    <div class="titulo-dorado">✦ PADRES ✦</div>
                    <div class="padres-nombres">
                        <span class="madre">Sra. Itzel Jacqueline López Fernández</span>
                        <span class="padre">Sr. Francisco Javier García Villeda</span>
                    </div>
                    <div class="frase-amor">Con amor y gratitud infinita</div>
                </div>

                <!-- SECCIÓN PADRINOS -->
                <div class="familia-section">
                    <div class="titulo-dorado">✦ PADRINOS ✦</div>
                    <div class="padrinos-grid">
                        <div class="padrino-item">
                            <span class="padrino-nombre">Sra. Maria Guadalupe Benítez Martínez</span>
                            <span class="padrino-rol">Madrina</span>
                        </div>
                        <div class="padrino-item">
                            <span class="padrino-nombre">Sr. José Antonio García Villeda </span>
                            <span class="padrino-rol">Padrino</span>
                        </div>
                    </div>
                    <div class="padres-nombres" style="font-size: 0.85rem; margin-top: 12px;">
                        Acompañan con amor este gran día
                    </div>
                </div>

                <!-- MESA DE REGALOS -->
                <div class="mesa-regalos">
                    <h3>🎁 MESA DE REGALOS 🎁</h3>
                    <p>Tu presencia es el mejor obsequio, ideas si deseas obsequiar:</p>
                    <div class="regalos-botones">
                        <a href="#" id="btnRegaloLista" class="link-regalo" target="_blank">🛍️ Lista en Liverpool</a>
                        <a href="#" id="btnRegaloMercado" class="link-regalo" target="_blank">📦 Lista en Mercado
                            Libre</a>
                    </div>
                </div>
                <!-- EVENTOS -->
                <div class="evento-item">
                    <div class="evento-icono">🏰</div>
                    <h3>RECEPCIÓN </h3>
                    <p class="evento-hora">5:30 PM</p>
                    <p class="evento-lugar">Salón</p>
                    <a href="#" class="btn-mapa" id="mapaFiestaBtn">🗺️ VER UBICACIÓN</a>

                </div>
                <!-- CONFIRMACION VÍA WHATSAPP -->
                <div class="confirmacion-whatsapp">
                    <a href="#" id="btnConfirmarWhatsApp" class="btn-whatsapp-confirm">
                        <span>📱</span> CONFIRMA TU ASISTENCIA
                    </a>
                    <p class="confirmacion-texto">Indícanos cuántas personas vendrán</p>
                </div>

                <!-- INFO NIÑOS -->
                <div class="info-ninos">
                    <h4>Niños bienvenidos</h4>
                    <p>✨ Nos encanta la idea de compartir este día también con los más chiquitos de la familia. Si
                        decides venir con tus pequeños, serán bienvenidos con mucho amor. ✨</p>
                    <p>Solo te pedimos que, por seguridad y para que todos podamos disfrutar la celebración, cada
                        pequeño esté siempre acompañado y bajo el cuidado directo de sus papás o adultos responsables;
                        sobre todo en esos momentos clave <strong>(Ceremonia, Brindis, Baile)</strong>.</p>
                    <p>¡Así garantizamos una experiencia mágica para grandes y chicos!</p>
                </div>

                <!-- CÓDIGO DE VESTIMENTA -->
                <div class="codigo-vestimenta">
                    <p class="vestimenta-titulo">CÓDIGO DE VESTIMENTA</p>
                    <p>Gala / Etiqueta · Elegancia atemporal</p>
                    <div class="color-exclusivo">
                        ✦ El color Azul es exclusivo de la Quinceañera ✦
                    </div>
                </div>
                <div id="seccion-boletos"
                    style="margin: 20px 0; padding: 15px; border: 1px dashed var(--dorado); border-radius: 10px;">
                    <p style="font-family: 'Cinzel'; font-size: 0.8rem; color: #666;">FAMILIA: <span id="nombreFamilia"
                            style="color:var(--azul-profundo); font-weight:bold;">Invitado Especial</span></p>
                    <p style="font-family: 'Cinzel'; font-size: 1.1rem; margin-top: 5px;">
                        PASES RESERVADOS: <span id="numPases"
                            style="font-size: 1.5rem; color: var(--azul-profundo); font-weight: bold;">--</span>
                    </p>
                </div>
                <!-- FRASE FINAL -->
                <div class="frase-final">
                    "La felicidad es real cuando se comparte"
                </div>

                <div class="firma-final">
                    ♔ XV Años · Un sueño hecho realidad ♔
                </div>
            </div>
            <div class="rodillo rodillo-bottom"></div>
        </div>
    </div>

    <!-- Modal de mapa (Lightbox) -->
    <div id="mapModal" class="modal">
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h3 id="modalTitle">Ubicación</h3>
            <div id="modalMapContainer"></div>
            <a href="#" id="modalOpenMaps" class="btn-mapa-modal" target="_blank">Abrir en Google Maps</a>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
