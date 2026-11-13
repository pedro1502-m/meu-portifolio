// ==========================================
// 1. MENU MOBILE RESPONSIVO
// ==========================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// ==========================================
// 2. ANO AUTOMÁTICO NO RODAPÉ
// ==========================================

const yearElement = document.querySelector("#year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 3. ANIMAÇÃO DE SCROLL (REVEAL)
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach((el) => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ==========================================
// 4. CÓPIA DE E-MAIL COM NOTIFICAÇÃO (TOAST)
// ==========================================

const copyBtn = document.getElementById("copyEmailBtn");
const toast = document.getElementById("toast");

// Subsitua pelo seu e-mail pessoal/profissional
const emailAddress = "pedrohenriquemarianojustino@email.com"; 

if (copyBtn && toast) {
    copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(emailAddress).then(() => {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }).catch(err => {
            console.error("Erro ao copiar e-mail: ", err);
        });
    });
}
