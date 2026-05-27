/* =========================================================
   1. ANIMACIÓN REVEAL AL HACER SCROLL
========================================================= */
function activarReveal() {
    const elementos = document.querySelectorAll(".reveal");

    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight * 0.85;

        if (posicion < alturaPantalla) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", activarReveal);
window.addEventListener("load", activarReveal);


/* =========================================================
   2. FORMULARIO DE CONTACTO
========================================================= */
const form = document.getElementById("contactForm");
const mensajeEnviado = document.getElementById("mensajeEnviado");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        mensajeEnviado.style.display = "block";
        form.reset();

        setTimeout(() => {
            mensajeEnviado.style.display = "none";
        }, 3000);
    });
}




// ANIMACIÓN AL HACER SCROLL
const elements = document.querySelectorAll(".section");

function reveal() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.8s";
});
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }

    const inicioLink = document.querySelector(".inicio-link");
    if (inicioLink) {
        if (window.scrollY > 150) {
            inicioLink.classList.add("show");
        } else {
            inicioLink.classList.remove("show");
        }
    }
});
// ANIMACIÓN DE ESCRITURA
const text = "Soluciones tecnologicas profesionales";
let typingIndex = 0;

function type() {
    const typingElement = document.querySelector(".typing");

    if (!typingElement) return;

    typingElement.textContent = text.slice(0, typingIndex);
    typingIndex++;

    if (typingIndex <= text.length) {
        setTimeout(type, 80);
    }
}

type();


/* Carrusel */
const track = document.querySelector(".carrusel-track");
const slides = document.querySelectorAll(".carrusel img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let carruselIndex = 0;

function updateCarrusel() {
    track.style.transform = `translateX(-${carruselIndex * 100}%)`;
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        carruselIndex = (carruselIndex + 1) % slides.length;
        updateCarrusel();
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        carruselIndex = (carruselIndex - 1 + slides.length) % slides.length;
        updateCarrusel();
    });
}