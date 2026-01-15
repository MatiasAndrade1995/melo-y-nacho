# DOCUMENTO DE REFERENCIA DE DISEÑO

## SITIO PRINCIPAL: https://www.ramestudio.net/miraunademo

---

## 1. PALETA DE COLORES

### Colores Principales
- **Color 1 (Crema claro)**: `rgb(254, 247, 241)` - `#FEF7F1`
- **Color 2 (Beige)**: `rgb(243, 230, 212)` - `#F3E6D4`
- **Color 3 (Terracota claro)**: `rgb(236, 210, 196)` - `#ECD2C4`
- **Color 4 (Gris medio)**: `rgb(112, 112, 112)` - `#707070`
- **Color 5 (Gris oscuro/Negro)**: `rgb(52, 52, 52)` - `#343434`

### Colores Azul/Verde (Acento principal)
- **Color 6 (Azul muy claro)**: `rgb(189, 207, 213)` - `#BDCFD5`
- **Color 7 (Azul gris claro)**: `rgb(143, 164, 172)` - `#8FA4AC`
- **Color 8 (Azul gris medio)**: `rgb(86, 119, 130)` - `#567782` ⭐ **COLOR PRINCIPAL DE BOTONES Y ACENTOS**
- **Color 9 (Azul oscuro)**: `rgb(19, 90, 114)` - `#135A72`
- **Color 10 (Azul muy oscuro)**: `rgb(7, 53, 69)` - `#073545`

### Colores Dorados/Amarillos
- **Color 11 (Dorado muy claro)**: `rgb(232, 221, 188)` - `#E8DDBC`
- **Color 12 (Dorado claro)**: `rgb(209, 194, 149)` - `#D1C295`
- **Color 13 (Dorado medio)**: `rgb(186, 159, 80)` - `#BA9F50`
- **Color 14 (Dorado oscuro)**: `rgb(124, 106, 53)` - `#7C6A35`
- **Color 15 (Dorado muy oscuro)**: `rgb(62, 53, 27)` - `#3E351B`

### Colores Morados/Lilas
- **Color 17 (Lila claro)**: `rgb(150, 153, 189)` - `#9699BD`
- **Color 18 (Lila medio)**: `rgb(91, 96, 156)` - `#5B609C`
- **Color 19 (Lila oscuro)**: `rgb(61, 64, 104)` - `#3D4068`
- **Color 20 (Lila muy oscuro)**: `rgb(30, 32, 52)` - `#1E2034`

### Colores Rosas/Magentas
- **Color 21 (Rosa claro)**: `rgb(211, 177, 191)` - `#D3B1BF`
- **Color 22 (Rosa medio)**: `rgb(168, 127, 144)` - `#A87F90`
- **Color 23 (Magenta)**: `rgb(124, 64, 89)` - `#7C4059`
- **Color 24 (Magenta oscuro)**: `rgb(83, 43, 59)` - `#532B3B`
- **Color 25 (Magenta muy oscuro)**: `rgb(41, 21, 30)` - `#29151E`

### Color Especial
- **Color 16 (Blanco)**: `rgb(255, 255, 255)` - `#FFFFFF`

### Aplicación de Colores
- **Fondo principal**: Color 1 (Crema claro `#FEF7F1`)
- **Textos principales**: Color 5 (Gris oscuro `#343434`)
- **Botones principales**: Color 8 (Azul gris `#567782`)
- **Texto de botones**: Color 1 (Crema claro `#FEF7F1`)
- **Bordes**: Color 5 con 20% de opacidad `rgba(52, 52, 52, 0.2)`
- **Acentos y detalles**: Color 3 (Terracota `#ECD2C4`)

---

## 2. ESTRUCTURA DE SECCIONES

La página está construida en Wix y tiene la siguiente estructura de secciones:

### Sección 1: HEADER/HERO
- **Contenido**: Nombres de los novios con diseño destacado
- **Estilo**: Hero section con imagen de fondo o color sólido
- **Tipografía grande y elegante**

### Sección 2: NAVEGACIÓN
- **Menú de navegación** con enlaces a diferentes secciones
- Links incluyen:
  - Inicio
  - Nosotros
  - Evento
  - Galería
  - Confirmar asistencia
  - Regalos

### Sección 3: CONTADOR/FECHA
- **Cuenta regresiva** hasta el evento
- **Fecha del evento** destacada
- Diseño centrado con tipografía especial

### Sección 4: INFORMACIÓN DEL EVENTO
- **Detalles del lugar**
- **Hora y fecha completa**
- Posiblemente mapa integrado

### Sección 5: GALERÍA DE FOTOS
- **Galería de imágenes** de la pareja
- Layout de tipo grid o slider
- Efecto lightbox al hacer clic

### Sección 6: CONFIRMACIÓN DE ASISTENCIA
- **Formulario de RSVP**
- Campos para nombre, cantidad de invitados, mensaje
- Botón de envío estilizado

### Sección 7: REGALOS
- **Información sobre lista de regalos**
- Enlaces a tiendas o datos de transferencia
- Texto: "Compartilos con nosotros"

### Sección 8: FOOTER
- **Información de contacto**
- Redes sociales
- Copyright o créditos

---

## 3. ESTILO VISUAL

### Características Generales
- **Diseño limpio y minimalista**
- **Espaciado generoso** entre secciones
- **Paleta de colores suaves y elegantes**
- **Enfoque en la tipografía** como elemento decorativo

### Espaciados
- **Padding de secciones**: Aproximadamente 60-100px en desktop
- **Padding de contenedores**: 15-30px
- **Márgenes entre elementos**: 20-40px
- **Line-height**: Generoso (1.5-2) para legibilidad

### Contenedores
- **Max-width**: Contenedores centrados con ancho máximo ~1200px
- **Border-radius**: Botones con 24px de border-radius
- **Box-shadows**: Sombras sutiles `0 2px 5px rgba(0,0,0,0.2)` o `0 4px 6px rgba(0,0,0,0.3)`

### Efectos Visuales
- **Overlays**: Utilizados en imágenes con fondos semi-transparentes
- **Transitions**: Suaves con `0.3s ease` para hover states
- **Opacity changes**: Para efectos de fade

---

## 4. ANIMACIONES Y EFECTOS

### Transiciones de Página
- **View Transitions API** implementada
- **Tipo OutIn**: `animation: out-in-old .35s cubic-bezier(.22,1,.36,1)`
- **Slide Horizontal**: `animation: slide-horizontal-new .6s cubic-bezier(.83,0,.17,1)`
- **Slide Vertical**: `animation: slide-vertical-new .6s cubic-bezier(.83,0,.17,1)`
- **Duración típica**: 0.6 segundos para slides, 0.35s para fade

### Efectos Hover
- **Botones**:
  - `transition: opacity 0.3s ease, transform 0.3s ease`
  - Cambio de color de fondo en hover
  - Posible elevación o scale transform

### Efectos de Scroll
- **Fade-in**: Elementos aparecen con fade al hacer scroll
- **Transform animations**: Elementos se mueven sutilmente al entrar en viewport

### Animaciones Específicas
- **Gallery items**: Transición al cambiar de imagen
- **Formularios**: Focus states con transiciones suaves
- **Menu mobile**: Slide-in animation para menú hamburguesa

### Cubic-bezier Usados
- `.22,1,.36,1` - Ease out suave
- `.83,0,.17,1` - Ease in-out pronunciado
- `.87,0,.13,1` - Ease in-out muy pronunciado
- `.64,0,.78,0` - Ease in rápido

---

## 5. TIPOGRAFÍAS

### Fuentes Principales

#### Fuente 1: **Fahkwang** (Google Font)
- **Uso**: Posiblemente para títulos o textos decorativos
- **Pesos disponibles**:
  - 400 (Normal)
  - 400 Italic
  - 700 (Bold)
  - 700 Italic
- **Estilo**: Moderna, con personalidad

#### Fuente 2: **Din Next W01 Light**
- **Uso**: Textos generales, posiblemente cuerpo de texto
- **Peso**: Light (más delgada)
- **Estilo**: Sans-serif, limpia y legible

#### Fuente 3: **Avenir LT W01 35 Light**
- **Uso**: Texto secundario, detalles
- **Estilo**: Elegante y profesional
- **Especificaciones**:
  - `font-size: 20px` para textos primarios
  - `font-size: 14px` para textos secundarios
  - `font-size: 18px` para badges

#### Fuente 4: **EB Garamond**
- **Uso**: Posiblemente para títulos elegantes o citas
- **Estilo**: Serif clásica, muy elegante

#### Fuente 5: **Holy River**
- **Uso**: Títulos decorativos o nombres de los novios
- **Estilo**: Script/cursiva, muy decorativa
- **Tamaño típico**: `22px` con `font-weight: bold`

#### Fuente 6: **Assistant V2**
- **Uso**: Textos generales
- **Tamaño**: `16px`
- **Letter-spacing**: `0.05em` para espaciado adicional

#### Fuentes Personalizadas (Wix)
- **Fashion Signature** (personal use)
- **Boowie**
- **Gotham SSm Narrow Light**
- Otras fuentes custom de Wix

### Tamaños de Fuente Típicos
- **Títulos grandes**: 50px
- **Títulos medianos**: 28px
- **Subtítulos**: 22-24px
- **Texto normal**: 16-20px
- **Texto pequeño**: 14px
- **Badges**: 18px

### Jerarquía Tipográfica
- **H1**: Fuentes decorativas (Holy River, Fashion Signature) - 50px
- **H2**: Fuentes elegantes (EB Garamond, Fahkwang) - 28-30px
- **H3**: Din Next o Avenir - 22-24px
- **Body**: Assistant, Open Sans - 16-20px
- **Small**: Avenir Light - 14px

---

## 6. ESTILO DE BOTONES Y ELEMENTOS INTERACTIVOS

### Botones Principales

#### Estilo Base
```css
background-color: rgb(86, 119, 130); /* Color 8 */
color: rgb(254, 247, 241); /* Color 1 - Crema */
border-radius: 24px;
padding: 12px 24px;
font-size: 16px;
font-family: 'Gotham SSm', Arial, sans-serif;
border: none;
box-shadow: 0 2px 5px rgba(0,0,0,0.2);
transition: all 0.3s ease;
```

#### Hover State
```css
background-color: rgb(19, 90, 114); /* Color 9 - más oscuro */
transform: translateY(-2px);
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
```

#### Disabled State
```css
opacity: 0.6;
cursor: not-allowed;
```

### Botones Secundarios (Outline)
```css
background-color: transparent;
color: rgb(86, 119, 130); /* Color 8 */
border: 2px solid rgb(86, 119, 130);
border-radius: 24px;
padding: 12px 24px;
```

#### Hover Secundario
```css
background-color: rgb(86, 119, 130);
color: rgb(254, 247, 241);
```

### Links
- **Color normal**: `rgb(86, 119, 130)` (Color 8)
- **Hover**: Subrayado o cambio de color a Color 9
- **Transición**: `0.2s ease`

### Inputs y Formularios
```css
background-color: white;
border: 1px solid rgba(52, 52, 52, 0.2);
border-radius: 8px;
padding: 12px 16px;
font-family: 'Assistant V2', sans-serif;
font-size: 16px;
color: rgb(52, 52, 52);
```

#### Focus State
```css
border-color: rgb(86, 119, 130);
outline: none;
box-shadow: 0 0 0 3px rgba(86, 119, 130, 0.1);
```

### Elementos Interactivos
- **Cards**:
  - `background: white`
  - `border-radius: 10px`
  - `box-shadow: 0 2px 10px rgba(0,0,0,0.1)`
  - Hover: elevación con mayor sombra

- **Iconos**:
  - Color del tema (Color 8)
  - Tamaño: 20-24px
  - Hover: ligero scale o color change

---

## 7. DISEÑO RESPONSIVE

### Breakpoints
La página utiliza el sistema responsive de Wix con los siguientes comportamientos:

#### Desktop (> 1024px)
- **Layout**: Grid de múltiples columnas
- **Padding lateral**: ~100px
- **Tamaños de fuente**: Completos (según especificado arriba)
- **Espaciado**: Generoso entre elementos

#### Tablet (768px - 1024px)
- **Layout**: Grid de 2 columnas o columna única según sección
- **Padding lateral**: ~50px
- **Tamaños de fuente**: Ligeramente reducidos (90-95%)
- **Imágenes**: Ajustadas al ancho disponible

#### Mobile (< 768px)
- **Layout**: Columna única
- **Padding lateral**: 20-30px
- **Tamaños de fuente**:
  - Títulos: 30-35px (reducidos de 50px)
  - Texto normal: 14-16px
- **Botones**: Full-width o más grandes para tocar
- **Menú**: Hamburger menu con slide-in animation
- **Espaciado**: Reducido pero manteniendo jerarquía

### Adaptaciones Específicas
- **Galería**: De grid multi-columna a slider/carrusel en mobile
- **Formularios**: Inputs de full-width en mobile
- **Hero section**: Imagen de fondo ajustada, texto centrado
- **Footer**: Elementos apilados verticalmente

### Optimizaciones Mobile
- **Viewport meta tag**: `width=device-width, initial-scale=1`
- **Touch targets**: Mínimo 44x44px
- **Imágenes**: Lazy loading y versiones optimizadas
- **Scroll behavior**: Smooth scroll habilitado

---

## 8. OTROS DETALLES IMPORTANTES

### Plataforma
- **Construido en**: Wix
- **Editor**: Wix Editor (no ADI)
- **Componentes**: Pro Gallery, formularios Wix, elementos nativos

### Elementos Especiales

#### FAB (Floating Action Button)
```css
position: fixed;
bottom: 30px;
right: 30px;
background-color: rgb(86, 119, 130);
color: white;
border-radius: 50%;
width: 60px;
height: 60px;
box-shadow: 0 4px 12px rgba(0,0,0,0.3);
z-index: 1000;
```

#### Menu de Navegación Sticky
- Se mantiene visible al hacer scroll
- Backdrop blur o fondo sólido al scrollear
- Animación de transición suave

#### Lightbox de Galería
- Fondo oscuro con overlay `rgba(0,0,0,0.9)`
- Imagen centrada
- Navegación con flechas
- Botón de cerrar (X) en esquina superior derecha
- Swipe gestures en mobile

### Performance
- **Lazy loading**: Imágenes cargan al entrar en viewport
- **Font display**: `swap` para evitar FOIT
- **Transitions**: Respeta `prefers-reduced-motion`

### Accesibilidad
- **Contrast ratio**: Cumple WCAG AA
- **Focus indicators**: Visibles en elementos interactivos
- **ARIA labels**: En elementos interactivos sin texto visible
- **Alt text**: En todas las imágenes

### SEO
- **Meta tags**: Título, descripción, Open Graph
- **Structured data**: Posiblemente para evento
- **Favicon**: Personalizado

---

## SITIO SECUNDARIO - SECCIÓN NOSOTROS: https://www.ramestudio.net/miraunademo2-1

---

## 1. DESCRIPCIÓN DE LA SECCIÓN NOSOTROS

### Layout General
La sección "Nosotros" presenta información sobre la pareja con un diseño que combina:
- **Texto descriptivo** sobre la historia de la pareja
- **Carrusel/Galería de fotos** como elemento visual principal
- **Diseño de dos columnas** en desktop (texto + imágenes)
- **Layout apilado** en mobile (texto arriba, galería abajo)

---

## 2. CARRUSEL DE FOTOS - ESPECIFICACIONES

### Configuración del Carrusel

#### Tipo de Galería
- **Pro Gallery de Wix** (componente nativo)
- **Layout**: Slider horizontal
- **Ratio de imagen**: `--gallerySliderImageRatio: 1` (cuadrado 1:1)
- **Tamaño**: `--gallerySize: 45` (45% del contenedor)
- **Padding del slider**: `--te-padding-slider: 30px`

#### Comportamiento
- **Layout type**: `--galleryLayout: 4` (tipo slider)
- **Alineación vertical**: `--galleryVerticalAlign: 2` (centrado)
- **Alineación horizontal**: `--galleryHorizontalAlign: 0` (inicio)

### Transiciones del Carrusel

#### Tipo de Transición
```css
transition: transform 0.6s cubic-bezier(.83, 0, .17, 1);
```
- **Duración**: 0.6 segundos
- **Efecto**: Slide horizontal suave
- **Easing**: Cubic-bezier pronunciado para movimiento fluido

#### Animaciones Específicas
- **Slide horizontal**: Las imágenes se deslizan de derecha a izquierda
- **Sin fade**: No hay efecto de desvanecimiento, solo desplazamiento
- **Smooth transform**: Usa GPU acceleration para rendimiento óptimo

### Navegación del Carrusel

#### Controles
- **Flechas laterales**: Izquierda y derecha para navegación
- **Indicadores**: Puntos en la parte inferior (posiblemente)
- **Touch/Swipe**: Gestos táctiles habilitados en mobile
- **Keyboard**: Flechas del teclado para navegación (accesibilidad)

#### Estilo de Flechas
```css
background: rgba(86, 119, 130, 0.8); /* Color 8 con transparencia */
border-radius: 50%;
width: 40-50px;
height: 40-50px;
color: white;
box-shadow: 0 2px 8px rgba(0,0,0,0.2);
```

#### Hover de Flechas
```css
background: rgb(86, 119, 130); /* Opacidad completa */
transform: scale(1.1);
transition: all 0.2s ease;
```

### Imágenes en el Carrusel

#### Características
- **Aspect ratio**: 1:1 (cuadrado)
- **Número visible**: Probablemente 1-3 imágenes dependiendo del viewport
- **Separación**: 30px entre imágenes
- **Tratamiento**: Posible filtro o efecto de color para mantener cohesión

#### Efectos de Imagen
- **Hover**: Posible ligero zoom o overlay
- **Loading**: Skeleton o blur-up placeholder
- **Calidad**: Optimizadas para web pero manteniendo calidad

---

## 3. COLORES DE LA SECCIÓN NOSOTROS

### Paleta Idéntica al Sitio Principal
La sección usa la misma paleta de colores:

- **Fondo de sección**: `rgb(254, 247, 241)` - Color 1 (Crema)
- **Texto**: `rgb(52, 52, 52)` - Color 5 (Gris oscuro)
- **Acentos**: `rgb(86, 119, 130)` - Color 8 (Azul gris)
- **Elementos decorativos**: Posiblemente Color 3 (Terracota `#ECD2C4`)

### Aplicación Específica
- **Título "NOSOTROS"**:
  - Color: `rgb(86, 119, 130)` o `rgb(52, 52, 52)`
  - Tamaño: 40-50px
  - Fuente: Fashion Signature o Holy River (decorativa)

- **Texto descriptivo**:
  - Color: `rgb(52, 52, 52)`
  - Tamaño: 16-18px
  - Fuente: Assistant V2 o Open Sans
  - Line-height: 1.8-2 para legibilidad

---

## 4. TIPOGRAFÍA EN SECCIÓN NOSOTROS

### Fuentes Utilizadas

#### Título de Sección
- **Fuente**: Fashion Signature (wfont_294127) o similar
- **Tamaño**: 50px
- **Weight**: Normal
- **Letter-spacing**: 0em (normal)
- **Ejemplo**: "Compartilos con nosotros"

#### Texto Descriptivo
- **Fuente**: Assistant V2 o Open Sans V2
- **Tamaño**: 16-18px
- **Weight**: Normal (400)
- **Line-height**: 1.8
- **Color**: Color 38 en variables (equivale a Color 8 - azul gris)

#### Subtítulos (si los hay)
- **Fuente**: Avenir LT W01 85 Heavy o Gotham SSm
- **Tamaño**: 22-24px
- **Weight**: Bold o Heavy
- **Letter-spacing**: 0.05em

---

## 5. ESPACIADOS DE LA SECCIÓN

### Padding de Sección
```css
padding-top: 80-100px;
padding-bottom: 80-100px;
padding-left: 60-80px;
padding-right: 60-80px;
```

### Mobile
```css
padding-top: 40-60px;
padding-bottom: 40-60px;
padding-left: 20-30px;
padding-right: 20-30px;
```

### Espaciado Interno

#### Entre Título y Texto
- **Margin-bottom del título**: 30-40px

#### Entre Párrafos
- **Margin-bottom**: 20-24px

#### Entre Texto y Galería
- **Gap en desktop**: 60-80px (grid-gap o margin)
- **Gap en mobile**: 40-50px

#### Galería
- **Padding del slider**: 30px
- **Espacio entre imágenes**: 20-30px

---

## 6. EFECTOS Y ANIMACIONES

### Animación de Entrada (Scroll Trigger)
- **Texto**: Fade-in desde abajo
  ```css
  animation: fadeInUp 0.8s ease-out;
  ```
- **Galería**: Fade-in desde la derecha (posiblemente)
  ```css
  animation: fadeInRight 1s ease-out 0.3s; /* con delay */
  ```

### Hover Effects

#### Imágenes del Carrusel
```css
img:hover {
  transform: scale(1.05);
  transition: transform 0.4s ease;
}
```

#### Enlaces en Texto
```css
a {
  color: rgb(86, 119, 130);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease;
}

a:hover {
  border-bottom-color: rgb(86, 119, 130);
}
```

### Transiciones del Carrusel
- **Cambio de imagen**: 0.6s con cubic-bezier(.83, 0, .17, 1)
- **Tipo**: Slide horizontal
- **Smooth**: Sin saltos, fluido

---

## 7. DISEÑO RESPONSIVE DE LA SECCIÓN

### Desktop (> 1024px)
```css
.nosotros-section {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 50/50 */
  gap: 80px;
  align-items: center;
}

.texto-nosotros {
  order: 1; /* izquierda */
}

.galeria-nosotros {
  order: 2; /* derecha */
}
```

### Tablet (768px - 1024px)
```css
.nosotros-section {
  grid-template-columns: 1fr;
  gap: 50px;
}

.galeria-nosotros {
  max-width: 600px;
  margin: 0 auto;
}
```

### Mobile (< 768px)
```css
.nosotros-section {
  grid-template-columns: 1fr;
  gap: 40px;
}

.titulo-nosotros {
  font-size: 35px; /* reducido de 50px */
  text-align: center;
}

.texto-nosotros {
  text-align: center; /* posiblemente */
}

.galeria-nosotros {
  width: 100%;
  padding: 0 10px;
}

/* Carrusel en mobile */
.gallery-slider {
  --gallerySize: 90; /* más grande en mobile */
}
```

### Adaptaciones del Carrusel

#### Desktop
- **Imágenes visibles**: 2-3 simultáneamente
- **Navegación**: Flechas laterales visibles

#### Tablet
- **Imágenes visibles**: 2 simultáneamente
- **Navegación**: Flechas laterales

#### Mobile
- **Imágenes visibles**: 1 imagen completa
- **Navegación**: Swipe gestures + flechas
- **Indicadores**: Dots más prominentes

---

## 8. DETALLES ADICIONALES DE LA SECCIÓN NOSOTROS

### Elemento Destacado
Texto importante: **"Compartilos con nosotros"**
- Aparece como call-to-action relacionado con compartir momentos
- Estilo muy decorativo con la fuente Fashion Signature
- Posiblemente enlazado a redes sociales o hashtag del evento

### Estructura HTML Aproximada
```html
<section id="nosotros" class="seccion-nosotros">
  <div class="contenedor-nosotros">
    <div class="texto-nosotros">
      <h2 class="titulo-nosotros">Nosotros</h2>
      <div class="contenido-texto">
        <p>Historia de la pareja...</p>
        <p>Detalles adicionales...</p>
      </div>
    </div>

    <div class="galeria-nosotros">
      <div class="pro-gallery-wrapper">
        <!-- Wix Pro Gallery Component -->
        <div class="gallery-slider">
          <div class="gallery-item">
            <img src="foto1.jpg" alt="Descripción">
          </div>
          <div class="gallery-item">
            <img src="foto2.jpg" alt="Descripción">
          </div>
          <!-- más items -->
        </div>

        <button class="gallery-arrow gallery-arrow-prev">
          <svg><!-- Icono flecha izquierda --></svg>
        </button>
        <button class="gallery-arrow gallery-arrow-next">
          <svg><!-- Icono flecha derecha --></svg>
        </button>

        <div class="gallery-indicators">
          <span class="indicator active"></span>
          <span class="indicator"></span>
          <span class="indicator"></span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Variables CSS Importantes
```css
:root {
  /* Colores */
  --color-primary: rgb(86, 119, 130);
  --color-background: rgb(254, 247, 241);
  --color-text: rgb(52, 52, 52);

  /* Galería */
  --gallerySliderImageRatio: 1;
  --gallerySize: 45;
  --te-padding-slider: 30;
  --galleryLayout: 4;
  --galleryVerticalAlign: 2;
  --galleryHorizontalAlign: 0;

  /* Transiciones */
  --transition-duration: 0.6s;
  --transition-timing: cubic-bezier(.83, 0, .17, 1);
}
```

### Optimizaciones
- **Lazy loading**: Imágenes del carrusel cargan progresivamente
- **Preload**: Primera imagen precargada
- **Responsive images**: Diferentes tamaños según viewport
- **WebP + fallback**: Formato moderno con JPEG de respaldo

### Accesibilidad del Carrusel
- **Role**: `role="region"` y `aria-label="Galería de fotos"`
- **Botones**: `aria-label="Imagen anterior/siguiente"`
- **Keyboard**: Tab para navegar, Enter/Space para activar
- **Screen readers**: Anuncian imagen actual y total

---

## NOTAS FINALES

### Consistencia Visual
Ambas páginas mantienen:
- Misma paleta de colores
- Mismas tipografías
- Mismo estilo de botones
- Mismas transiciones y animaciones
- Mismo diseño responsive

### Elementos Clave para Replicar
1. **Color azul-gris** (`#567782`) como acento principal
2. **Fondo crema** (`#FEF7F1`) para calidez
3. **Tipografías mixtas**: Decorativas + Sans-serif limpias
4. **Transiciones suaves** con cubic-bezier específicos
5. **Carrusel horizontal** con ratio 1:1
6. **Espaciado generoso** en desktop, compacto pero funcional en mobile
7. **Border-radius de 24px** en botones principales
8. **Sombras sutiles** para profundidad sin exageración

### Stack Tecnológico
- **Wix Platform**
- **Pro Gallery Component**
- **Custom CSS variables**
- **View Transitions API**
- **Responsive Grid System**

---

**Documento creado**: 2026-01-14
**Propósito**: Referencia completa de diseño para desarrollo sin necesidad de acceder a URLs originales
