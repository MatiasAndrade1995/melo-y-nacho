// Configuración del template de boda
// Personaliza estos valores para tu evento

const weddingConfig = {
    // Información básica
    brideName: "Novia",
    groomName: "Novio",
    weddingDate: "2026-04-11T16:00:00", // Formato: YYYY-MM-DDTHH:MM:SS
    weddingTime: "16:30 hs",
    venue: "Nombre del Lugar",
    address: "Dirección completa",
    mapsLink: "https://maps.google.com/...",

    // Textos personalizables
    heroText: "Toda gran historia<br>tiene un momento inolvidable.<br>Este es el nuestro y solo faltan<span class=\"ellipsis-thin\">…</span>",
    storyText: "Nuestra historia comenzó en [mes/año]. Hoy, [años] años después, las cosquillas en la panza de aquel entonces siguen ahí, pero con la fuerza de un amor que no dejó nunca de crecer.<br><br>Nos casamos porque creemos que no hay nada más importante que el amor y queremos celebrarlo reuniendo, en un mismo lugar, a todas las personas que amamos. Gracias por formar parte de este momento que recordaremos por siempre.",
    dressCode: "Elegante",
    dressCodeDescription: "Elegí algo dentro de tu estilo que te haga sentir increíble y que sea, sobre todo, ¡apto para bailar toda la noche!",
    giftQuote: "No se puede vivir del amor, es por eso que habilitamos nuestra Caja de Supervivencia para recién casados...",
    playlistSubtitle: "Armemos juntos el mejor soundtrack.",
    playlistText: "Sugerí tu tema infaltable:",
    photosSubtitle: "Hay momentos que no vamos a llegar a ver<span class=\"ellipsis-thin\">...</span> Pero vos sí.",
    photosText: "Comparti tus fotos con nosotros.",
    photosApp: "Wedshoots",
    photosAppLink: "https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots",
    photosCode: "TU_CODIGO",

    // Enlaces
    rsvpLink: "https://docs.google.com/forms/...",
    playlistLink: "https://docs.google.com/forms/...",

    // Información bancaria
    bankInfo: {
        cbu: "TU_CBU",
        alias: "TU_ALIAS",
        titular: "Nombre del Titular"
    },

    // Música
    songTitle: "Nuestra Canción",
    songSrc: "musica/cancion.mp3",

    // Imágenes (cambia los nombres de archivos según necesites)
    mainPhoto: "fotos/FOTO_PRINCIPAL.jpg",
    backgroundImage: "fondo-hojas.jpg",
    sectionBackground: "fondo_recuadro.png", // Fondo decorativo de los recuadros internos
    carouselPhotos: [
        "fotos/1.jpg",
        "fotos/2.jpg",
        "fotos/3.jpg",
        "fotos/4.jpg",
        "fotos/5.jpg"
    ],

    // Iconos
    icons: {
        stars: "iconos/stars.png",
        rings: "iconos/anillos.png",
        fireworks: "iconos/fireworks.png",
        gift: "iconos/regalo.png",
        dj: "iconos/dj.png",
        camera: "iconos/camara.png"
    },

    // Colores (sobrescribe las variables CSS si necesitas)
    colors: {
        primary: "#707070",
        secondary: "#FEF7F1",
        accent: "#BA9F50",
        text: "#343434",
        background: "#FEF7F1"
    }
};

// Función para aplicar la configuración
function applyConfig() {
    // Nombres
    document.querySelectorAll('.names').forEach(el => el.textContent = `${weddingConfig.brideName} & ${weddingConfig.groomName}`);
    document.querySelectorAll('.footer-names').forEach(el => el.textContent = `${weddingConfig.brideName} & ${weddingConfig.groomName}`);

    // Fecha
    document.querySelectorAll('.footer-date').forEach(el => {
        const date = new Date(weddingConfig.weddingDate);
        el.textContent = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    });

    // Hero text
    const heroTextEl = document.querySelector('.hero-text');
    if (heroTextEl) heroTextEl.innerHTML = weddingConfig.heroText;

    // Story text
    const storyEl = document.querySelector('.nosotros-text');
    if (storyEl) storyEl.innerHTML = weddingConfig.storyText;

    // Fecha en sección cuando
    const fechaEl = document.querySelector('.cuando-fecha');
    if (fechaEl) {
        const date = new Date(weddingConfig.weddingDate);
        fechaEl.innerHTML = `${date.getDate()} DE ${date.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase()}<br><span class="cuando-year">DE ${date.getFullYear()}</span>`;
    }

    // Lugar
    const venueEl = document.querySelector('.donde-venue');
    if (venueEl) venueEl.textContent = weddingConfig.venue;

    const addressEl = document.querySelector('.donde-address');
    if (addressEl) addressEl.textContent = weddingConfig.address;

    const mapLink = document.querySelector('.btn-map');
    if (mapLink) mapLink.href = weddingConfig.mapsLink;

    // Hora
    const timeEl = document.querySelector('.donde-time');
    if (timeEl) timeEl.textContent = weddingConfig.weddingTime;

    // Dress code
    const dressTypeEl = document.querySelector('.dresscode-type');
    if (dressTypeEl) dressTypeEl.textContent = weddingConfig.dressCode;

    const dressDescEl = document.querySelector('.dresscode-description');
    if (dressDescEl) dressDescEl.textContent = weddingConfig.dressCodeDescription;

    // Regalos
    const giftQuoteEl = document.querySelector('.section-quote');
    if (giftQuoteEl) giftQuoteEl.textContent = weddingConfig.giftQuote;

    // Playlist
    const playlistSubEl = document.querySelector('.playlist-section .section-subtitle');
    if (playlistSubEl) playlistSubEl.textContent = weddingConfig.playlistSubtitle;

    const playlistTextEl = document.querySelector('.playlist-section .section-text');
    if (playlistTextEl) playlistTextEl.textContent = weddingConfig.playlistText;

    const playlistLink = document.querySelector('.playlist-section .btn-primary');
    if (playlistLink) playlistLink.href = weddingConfig.playlistLink;

    // Fotos
    const photosSubEl = document.querySelector('.fotos-section .section-subtitle');
    if (photosSubEl) photosSubEl.innerHTML = weddingConfig.photosSubtitle;

    const photosTextEl = document.querySelectorAll('.fotos-section .section-text');
    if (photosTextEl.length >= 2) {
        photosTextEl[0].textContent = weddingConfig.photosText;
        photosTextEl[1].innerHTML = `Descargá la app: <strong><a href="${weddingConfig.photosAppLink}" target="_blank" rel="noopener noreferrer" class="app-link">${weddingConfig.photosApp}</a></strong>`;
        photosTextEl[2].innerHTML = `Código del álbum: <strong>${weddingConfig.photosCode}</strong>`;
    }

    // RSVP
    const rsvpLink = document.querySelector('.btn-confirmar');
    if (rsvpLink) rsvpLink.href = weddingConfig.rsvpLink;

    // Banco
    const cbuEl = document.querySelector('.datos-cuenta p:nth-child(1)');
    if (cbuEl) cbuEl.textContent = `CBU: ${weddingConfig.bankInfo.cbu}`;

    const aliasEl = document.querySelector('.datos-cuenta p:nth-child(2)');
    if (aliasEl) aliasEl.textContent = `Alias: ${weddingConfig.bankInfo.alias}`;

    const titularEl = document.querySelector('.datos-cuenta p:nth-child(3)');
    if (titularEl) titularEl.textContent = `Titular: ${weddingConfig.bankInfo.titular}`;

    // Música
    const audioTitleEl = document.querySelector('.audio-title');
    if (audioTitleEl) audioTitleEl.textContent = weddingConfig.songTitle;

    const audioSrc = document.querySelector('#audioElement source');
    if (audioSrc) audioSrc.src = weddingConfig.songSrc;

    // Imágenes
    const mainPhoto = document.querySelector('.foto-principal');
    if (mainPhoto) mainPhoto.src = weddingConfig.mainPhoto;

    // Carrusel
    const carouselSlides = document.querySelectorAll('.carousel-slide img');
    weddingConfig.carouselPhotos.forEach((photo, index) => {
        if (carouselSlides[index]) carouselSlides[index].src = photo;
    });

    // Iconos
    if (weddingConfig.icons) {
        // Cambiar iconos específicos por su ubicación en el DOM
        const iconSelectors = {
            stars: '.hero-star-top img, .hero-star-bottom img, .dresscode-icon img',
            rings: '.decorative-icon.icon-rings img',
            fireworks: '.decorative-icon.icon-fireworks img',
            gift: '.decorative-icon.icon-candles img, .regalos-section .decorative-icon img',
            dj: '.playlist-section .decorative-icon img',
            camera: '.fotos-section .decorative-icon img'
        };

        Object.keys(iconSelectors).forEach(iconKey => {
            if (weddingConfig.icons[iconKey]) {
                const elements = document.querySelectorAll(iconSelectors[iconKey]);
                elements.forEach(el => el.src = weddingConfig.icons[iconKey]);
            }
        });
    }

    // Fondo
    const bodyAfter = document.querySelector('body::after');
    if (bodyAfter) {
        // Nota: No se puede cambiar pseudo-elementos dinámicamente, mejor usar una clase o variable CSS
    }

    // Cambiar la variable CSS para el fondo
    document.documentElement.style.setProperty('--background-image', `url('${weddingConfig.backgroundImage}')`);

    // Cambiar el fondo de los recuadros internos
    if (weddingConfig.sectionBackground) {
        document.documentElement.style.setProperty('--section-background-image', `url('${weddingConfig.sectionBackground}')`);
    }

    // Colores personalizables
    if (weddingConfig.colors) {
        Object.keys(weddingConfig.colors).forEach(key => {
            document.documentElement.style.setProperty(`--color-${key}`, weddingConfig.colors[key]);
        });
    }

    // Meta tags
    document.querySelector('meta[name="description"]').content = `Nos casamos el ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}. Celebremos juntos este amor en ${weddingConfig.venue}, ${weddingConfig.address}. Tu presencia es nuestro mejor regalo.`;
    document.querySelector('meta[property="og:title"]').content = `${weddingConfig.brideName} & ${weddingConfig.groomName} - ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}`;
    document.querySelector('meta[property="og:description"]').content = `Nos casamos el ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}. Celebremos juntos este amor en ${weddingConfig.venue}, ${weddingConfig.address}.`;
    document.querySelector('meta[name="twitter:title"]').content = `${weddingConfig.brideName} & ${weddingConfig.groomName} - ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}`;
    document.querySelector('meta[name="twitter:description"]').content = `Nos casamos el ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}. Celebremos juntos este amor.`;
    document.title = `${weddingConfig.brideName} & ${weddingConfig.groomName} - ${new Date(weddingConfig.weddingDate).toLocaleDateString('es-ES')}`;
}

// Aplicar configuración cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', applyConfig);