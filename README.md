# Portafolio Profesional - Rodolfo Moreno

Maqueta académica de portafolio personal desarrollada con HTML, CSS, Bootstrap y JavaScript.

## Descripción

Este proyecto presenta una maqueta simple de portafolio profesional, orientada a Cloud Data Analytics, AWS, Python, SQL, Power BI y análisis de operaciones gastronómicas.

## Estructura del proyecto

```text
Proyecto/
├── index.html
├── README.md
├── DOCUMENTACION_TAREA.md
├── DOCS/
│   └── checklist-entrega.md
└── ASSETS/
    ├── CSS/
    │   └── styles.css
    ├── JS/
    │   └── app.js
    └── IMG/
        ├── portfolio-cloud-data.png
        └── captura-mobile-simulada.png
```

## Requisitos implementados

- Estructura base HTML con `<!DOCTYPE html>`, `<html>`, `<head>` y `<body>`.
- Uso de etiquetas semánticas: `<header>`, `<section>`, `<article>`, `<aside>` y `<footer>`.
- Comentarios en el código explicando el uso de las etiquetas solicitadas.
- Hoja de estilos externa enlazada desde `ASSETS/CSS/styles.css`.
- Imagen local integrada desde `ASSETS/IMG/portfolio-cloud-data.png`.
- Diseño Mobile First.
- Uso de Flexbox para hero, botones y tarjetas de proyectos.
- Uso de CSS Grid para contenido principal + aside.
- Dos media queries: tablet y escritorio.
- Bootstrap por CDN.
- Navbar responsive con menú hamburguesa en móvil.
- Tipografías: Cormorant Garamond Bold para nombre/hero, IBM Plex Sans para subtítulos y textos, y JetBrains Mono para etiquetas técnicas.
- Botón “Ir arriba” visible solo al llegar al fondo de la página.

Se agregó el archivo app.js con la funcionalidad de scroll suave.


## Definir y ejemplificar comandos básicos de Git

Como parte de la documentación técnica del proyecto, se incluyen los comandos básicos de Git utilizados para inicializar, revisar y registrar cambios en un repositorio local.

| Comando | Definición breve | Ejemplo de uso |
|---|---|---|
| `git --version` | Muestra la versión instalada de Git en el sistema. | `git --version` |
| `git init` | Inicializa un repositorio Git en la carpeta actual del proyecto. | `git init` |
| `git add` | Agrega cambios al área de preparación o *staging*. | `git add .` |
| `git commit` | Registra los cambios preparados con un mensaje descriptivo. | `git commit -m "Primer commit"` |
| `git status` | Muestra el estado actual del repositorio y los archivos modificados, agregados o pendientes. | `git status` |

### Comentario técnico de uso

```bash
# Verifica que Git esté instalado y muestra la versión disponible.
git --version

# Inicializa Git dentro de la carpeta actual del proyecto.
git init

# Agrega todos los archivos modificados o nuevos al área de preparación.
git add .

# Crea un registro de cambios con un mensaje descriptivo.
git commit -m "Primer commit"

# Revisa el estado del repositorio después de agregar o confirmar cambios.
git status
```

### Flujo básico recomendado

```bash
git add .
git commit -m "mensaje"
git status
```

## Autor

© Rodolfo Moreno, Portafolio Profesional

## Ajustes visuales 

- Se actualizó la paleta a una dirección más profesional: Cloud Data Portfolio · Dark Professional · Food & Beverage Analytics.
- Se cambió el botón principal a Azul Cloud `#2563EB`.
- Las etiquetas de proyectos ahora usan un estilo tecnológico con azul cloud y cian datos.
- Se limitó Cormorant Garamond al nombre principal, marca y frase hero.
- Se usa IBM Plex Sans para secciones, párrafos, botones y navegación.
- Se agregó JetBrains Mono para etiquetas técnicas.
