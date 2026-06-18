// ================= MOBILE MENU =================

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

// Открытие мобильного меню
burger.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// ================= SMOOTH SCROLL =================

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

        // Закрытие меню после клика
        nav.classList.remove("active");

    });

});

// ================= ANIMATION =================

// Простая анимация появления секций
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});

// Начальные стили анимации
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

});
