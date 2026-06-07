// app.js
// Archivo externo de JavaScript solicitado en la actividad.
// El botón “Ir arriba” aparece solo cuando el usuario llega al fondo de la página.
// Al hacer clic, la página sube con desplazamiento suave y el botón vuelve a ocultarse.

const btnTop = document.getElementById("btnTop");

function userReachedBottom() {
  const scrollPosition = window.innerHeight + window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  return scrollPosition >= documentHeight - 80;
}

function updateTopButtonVisibility() {
  if (!btnTop) return;

  if (userReachedBottom()) {
    btnTop.classList.add("is-visible");
  } else {
    btnTop.classList.remove("is-visible");
  }
}

if (btnTop) {
  updateTopButtonVisibility();

  window.addEventListener("scroll", updateTopButtonVisibility);
  window.addEventListener("resize", updateTopButtonVisibility);

  btnTop.addEventListener("click", () => {
    btnTop.classList.remove("is-visible");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
