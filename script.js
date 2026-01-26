// Countdown Timer with visibility optimization
let countdownInterval = null;
let isCountdownVisible = false;

function updateCountdown() {
    const weddingDate = new Date('2026-04-11T16:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '<p class="countdown-text">¡El gran día ha llegado!</p>';
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

function startCountdown() {
    if (!countdownInterval && isCountdownVisible) {
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
}

function stopCountdown() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

// Observe countdown visibility to pause when not visible
const countdownObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        isCountdownVisible = entry.isIntersecting;
        if (entry.isIntersecting) {
            startCountdown();
        } else {
            stopCountdown();
        }
    });
}, { threshold: 0.1 });

// Initialize countdown observer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        countdownObserver.observe(countdownEl);
    }
});

// Photo Carousel
class PhotoCarousel {
    constructor() {
        this.track = document.getElementById('carouselTrack');
        this.dotsContainer = document.getElementById('carouselDots');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        this.init();
    }

    init() {
        this.createDots();
        this.startAutoPlay();

        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        this.dots = document.querySelectorAll('.carousel-dot');
    }

    goToSlide(index) {
        this.currentIndex = index;
        const offset = -100 * index;
        this.track.style.transform = `translateX(${offset}%)`;

        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 3000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PhotoCarousel();
});

// Scroll indicator
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' });
});

// Toggle bank account details
document.getElementById('btnDatosCuenta')?.addEventListener('click', function() {
    const datosCuenta = document.getElementById('datosCuenta');
    datosCuenta.classList.toggle('hidden');
    this.textContent = datosCuenta.classList.contains('hidden')
        ? 'Datos de la Cuenta'
        : 'Ocultar Datos';
});

// Music Player Control
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const musicPlayer = document.getElementById('musicPlayer');
    const closeMusic = document.getElementById('closeMusic');
    const audioElement = document.getElementById('audioElement');
    const audioPlayPause = document.getElementById('audioPlayPause');
    const audioPlayIcon = document.getElementById('audioPlayIcon');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');

    if (!playButton || !musicPlayer || !playIcon || !closeMusic || !audioElement) return;

    // Función para formatear tiempo
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Control play/pause del botón principal
    playButton.addEventListener('click', () => {
        if (audioElement.paused) {
            // Si está pausado, mostrar reproductor y reproducir
            musicPlayer.classList.remove('hidden');
            playIcon.setAttribute('d', 'M22 20h6v20h-6V20zm10 0h6v20h-6V20z');
            playButton.style.opacity = '0.7';

            // Si es la primera vez o está al inicio, empezar desde el principio
            if (audioElement.currentTime === 0) {
                audioElement.currentTime = 0;
            }
            audioElement.play();
        } else {
            // Si está reproduciendo, pausar
            audioElement.pause();
            playIcon.setAttribute('d', 'M24 20L40 30L24 40V20Z');
            playButton.style.opacity = '1';
        }
    });

    // Cerrar reproductor
    closeMusic.addEventListener('click', () => {
        musicPlayer.classList.add('hidden');
        playIcon.setAttribute('d', 'M24 20L40 30L24 40V20Z');
        playButton.style.opacity = '1';
        audioElement.pause();
        audioElement.currentTime = 0;
    });

    // Control play/pause del reproductor
    audioPlayPause?.addEventListener('click', () => {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });

    // Actualizar íconos cuando cambia el estado
    audioElement.addEventListener('play', () => {
        audioPlayIcon.setAttribute('d', 'M6 4h4v16H6V4zm8 0h4v16h-4V4z');
        playIcon.setAttribute('d', 'M22 20h6v20h-6V20zm10 0h6v20h-6V20z');
        playButton.style.opacity = '0.7';
    });

    audioElement.addEventListener('pause', () => {
        audioPlayIcon.setAttribute('d', 'M8 5v14l11-7z');
        playIcon.setAttribute('d', 'M24 20L40 30L24 40V20Z');
        playButton.style.opacity = '1';
    });

    // Actualizar duración cuando se carga
    audioElement.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audioElement.duration);
        progressBar.max = Math.floor(audioElement.duration);
    });

    // Actualizar progreso con throttling para mejor rendimiento
    let lastUpdate = 0;
    audioElement.addEventListener('timeupdate', () => {
        const now = Date.now();
        // Throttle: actualizar solo cada 250ms en lugar de varias veces por segundo
        if (now - lastUpdate >= 250) {
            currentTimeEl.textContent = formatTime(audioElement.currentTime);
            progressBar.value = audioElement.currentTime;
            lastUpdate = now;
        }
    });

    // Cambiar posición con la barra de progreso
    progressBar?.addEventListener('input', (e) => {
        audioElement.currentTime = e.target.value;
    });

    // Cuando termina la canción, volver al inicio
    audioElement.addEventListener('ended', () => {
        audioElement.currentTime = 0;
        audioPlayIcon.setAttribute('d', 'M8 5v14l11-7z');
    });
});

// Intersection Observer for fade-in animations (optimized)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observedElements = new Set();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Dejar de observar este elemento para liberar recursos
            observer.unobserve(entry.target);
            observedElements.delete(entry.target);

            // Si todos los elementos fueron observados, desconectar el observer
            if (observedElements.size === 0) {
                observer.disconnect();
            }
        }
    });
}, observerOptions);

// Add fade-in class to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero-section):not(.foto-principal-section)');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observedElements.add(section);
        observer.observe(section);
    });
});

// Google Maps Integration
// function initMap() {
//     const location = { lat: -34.4582, lng: -58.9147 }; // Aproximate coordinates for Pilar, Fatima
//     const mapOptions = {
//         zoom: 15,
//         center: location,
//         styles: [
//             {
//                 featureType: 'all',
//                 elementType: 'geometry',
//                 stylers: [{ color: '#f5f5f5' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'geometry',
//                 stylers: [{ color: '#c9d9e8' }]
//             }
//         ]
//     };

//     const map = new google.maps.Map(document.getElementById('map'), mapOptions);

//     const marker = new google.maps.Marker({
//         position: location,
//         map: map,
//         title: 'Estación Fátima Eventos',
//         animation: google.maps.Animation.DROP
//     });

//     const infoWindow = new google.maps.InfoWindow({
//         content: '<div style="padding:10px;"><strong>Estación Fátima Eventos</strong><br>Isla Jorge 290, Fátima, Pilar</div>'
//     });

//     marker.addListener('click', () => {
//         infoWindow.open(map, marker);
//     });
// }

// Load Google Maps when page loads
window.addEventListener('load', () => {
    // Note: You'll need to add your Google Maps API key to the HTML
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    }
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Parallax effect removed to fix scroll issues
