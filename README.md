# Sitio Web - Casamiento Melo & Nacho

Invitación web para el casamiento del 11 de abril de 2026.

## Estructura del proyecto

```
casamiento/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript (cuenta regresiva, carrusel, animaciones)
├── GUION.MD           # Guion con el contenido
├── fotos/             # Carpeta con las fotos
│   ├── 5.JPG
│   ├── 6.JPG
│   ├── 7.JPG
│   ├── 8.JPG
│   └── 9.JPG
└── fonts/             # Carpeta para las tipografías (crear si no existe)
    ├── HighSpirited.ttf
    └── IMBlack.ttf
```

## Tipografías

El sitio utiliza dos tipografías personalizadas:
- **HIGH SPIRITED** - Para los títulos principales
- **IM BLACK** - Para el texto del cuerpo

### Instalación de tipografías

1. Crear una carpeta llamada `fonts` en el directorio del proyecto
2. Descargar las tipografías:
   - HIGH SPIRITED: Buscar y descargar el archivo .ttf
   - IM BLACK: Buscar y descargar el archivo .ttf
3. Guardar los archivos como:
   - `fonts/HighSpirited.ttf`
   - `fonts/IMBlack.ttf`

Si no tienes las tipografías, el sitio usará fuentes alternativas automáticamente.

## Google Maps API

Para que el mapa funcione correctamente:

1. Obtener una API key de Google Maps:
   - Ir a https://console.cloud.google.com/
   - Crear un proyecto o seleccionar uno existente
   - Habilitar "Maps JavaScript API"
   - Crear credenciales (API key)

2. Agregar el script de Google Maps al final de `index.html`, justo antes del cierre de `</body>`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap" async defer></script>
   ```
   Reemplazar `TU_API_KEY` con tu clave real.

## Configuraciones pendientes

### Datos a completar en el sitio:

1. **Foto principal del Hero**: Actualmente usa `fotos/5.JPG`. Para cambiarla:
   - Editar en `styles.css` línea 50: `url('fotos/TU_FOTO.JPG')`

2. **Frase en "Nosotros"**: Reemplazar "Frase que nos falta elegir" en `index.html` línea 35

3. **Datos de la cuenta bancaria**: Completar en `index.html` líneas 114-116:
   ```html
   <p>CBU: [COMPLETAR]</p>
   <p>Alias: [COMPLETAR]</p>
   <p>Titular: [COMPLETAR]</p>
   ```

4. **Enlaces a formularios**:
   - **Confirmar asistencia** (línea 95): Reemplazar `href="#"` con el link del formulario
   - **Recomendar canción** (línea 123): Reemplazar `href="#"` con el link del formulario de playlist

5. **Código de Webshoots**: Completar en `index.html` línea 132 cuando tengan el código del álbum

6. **Coordenadas del mapa**: Verificar/ajustar en `script.js` línea 110:
   ```javascript
   const location = { lat: -34.4582, lng: -58.9147 };
   ```
   Puedes obtener las coordenadas exactas buscando la dirección en Google Maps.

## Cómo ver el sitio localmente

### Opción 1: Abrir directamente
Simplemente abrir el archivo `index.html` en tu navegador (doble click).

### Opción 2: Servidor local (recomendado para probar todas las funcionalidades)

Con Python:
```bash
python -m http.server 8000
```
Luego abrir: http://localhost:8000

Con Node.js:
```bash
npx http-server
```

Con PHP:
```bash
php -S localhost:8000
```

## Características del sitio

- ✅ Diseño responsivo (se adapta a móviles y desktop)
- ✅ Cuenta regresiva en tiempo real
- ✅ Carrusel automático de fotos con controles
- ✅ Animaciones suaves al hacer scroll
- ✅ Mapa interactivo de Google Maps
- ✅ Secciones según el guion original
- ✅ Efecto parallax en el hero
- ✅ Botones interactivos con efectos hover

## Personalización de colores

Los colores principales se pueden cambiar en `styles.css` líneas 17-23:

```css
:root {
    --color-primary: #2c3e50;      /* Color principal (azul oscuro) */
    --color-secondary: #ecf0f1;    /* Color secundario (gris claro) */
    --color-accent: #d4af37;       /* Color de acento (dorado) */
    --color-text: #333;            /* Color del texto */
    --color-text-light: #666;      /* Color del texto secundario */
}
```

## Despliegue

Para publicar el sitio en internet, puedes usar:

- **GitHub Pages** (gratis)
- **Netlify** (gratis)
- **Vercel** (gratis)
- Cualquier hosting web tradicional

Solo necesitas subir los archivos: `index.html`, `styles.css`, `script.js`, y las carpetas `fotos/` y `fonts/`.

## Soporte

Si necesitas ayuda o ajustes, contacta al desarrollador.
