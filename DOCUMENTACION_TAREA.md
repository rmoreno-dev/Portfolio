# Documentación de la tarea

## Objetivo

Incorporar un archivo externo de JavaScript al proyecto web y añadir una funcionalidad básica de interacción: un botón que permita desplazarse suavemente hacia la parte superior de la página.

## Cambios implementados

### 1. Estructura HTML

Se creó el archivo `index.html` en la raíz del proyecto con estructura base HTML5:

- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<body>`

También se utilizaron las etiquetas solicitadas:

- `<header>` para la cabecera y navegación.
- `<h1>` para el título principal.
- `<p>` para textos descriptivos.
- `<section>` para separar contenido temático.
- `<article>` para tarjetas de proyectos.
- `<aside>` para información complementaria.
- `<footer>` para cierre y datos finales del sitio.

Cada etiqueta principal tiene comentarios explicativos en el código.

### 2. Organización de carpetas

```text
ASSETS/
├── CSS/
│   └── styles.css
├── JS/
│   └── app.js
└── IMG/
    ├── portfolio-cloud-data.png
    └── captura-mobile-simulada.png
```

### 3. CSS externo

El archivo `ASSETS/CSS/styles.css` contiene los estilos principales de la maqueta.

Se aplicó una paleta visual personalizada:

| Uso | Color | HEX |
| --- | --- | --- |
| Base principal | Negro Café Profundo | `#0B0B0D` |
| Base elegante | Azul Nocturno | `#111A2E` |
| Acento | Vino Oscuro | `#4A1828` |
| Contraste cálido | Marfil Cálido | `#F2E8DA` |
| Acento natural | Verde Oliva Grisáceo | `#6F7356` |
| Acento sensible | Rosa Ceniza | `#B98A95` |

También se integraron las tipografías:

- Cormorant Garamond para títulos.
- IBM Plex Sans para textos y contenido profesional.

### 4. Diseño responsivo

El diseño se realizó con enfoque Mobile First.

Se utilizaron:

- Flexbox para hero, botones y tarjetas.
- CSS Grid para contenido principal y barra lateral.
- Media query para tablet desde `768px`.
- Media query para escritorio desde `992px`.

### 5. Bootstrap y Navbar

Se agregó Bootstrap por CDN en el `<head>`.

La navbar es responsive:

- En móvil se muestra como menú hamburguesa.
- En escritorio se muestra como navegación horizontal.

### 6. JavaScript externo

Se creó el archivo `ASSETS/JS/app.js`.

Funcionalidad implementada:

- El botón “Ir arriba” permanece oculto al cargar la página.
- El botón aparece solo cuando el usuario llega al fondo de la página.
- Al hacer clic, la página se desplaza suavemente hacia arriba.
- Después del clic, el botón se oculta nuevamente.

### 7. Footer 

`© Rodolfo Moreno, Portafolio Profesional`


