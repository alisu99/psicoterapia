// Efeito de deslisar
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });

    const elementsToAnimate = document.querySelectorAll('.contato, .apresentacao, .frase, .quem-sou-eu, .d-flex, .servicos, .conteudo, .titulo-testimonials, .testimonials, .entre-em-contato, .video');

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Alterna a classe "show"
    burgerBtn.classList.toggle("active"); // Adiciona a animação ao botão
});
