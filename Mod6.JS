document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    });
});

const slides = document.querySelectorAll(".carrossel img");
const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
let index = 2;

document.querySelector(".b1").addEventListener("click", () => {
    b2.classList.remove("active");
    b3.classList.remove("active");
    slides[index].classList.remove("active");
    index = 0;
    slides[index].classList.add("active");
    b1.classList.add("active");
});

document.querySelector(".b2").addEventListener("click", () => {
    b1.classList.remove("active");
    b3.classList.remove("active");
    slides[index].classList.remove("active");
    index = 1;
    slides[index].classList.add("active");
    b2.classList.add("active");
});

document.querySelector(".b3").addEventListener("click", () => {
    b2.classList.remove("active");
    b1.classList.remove("active");
    slides[index].classList.remove("active");
    index = 2;
    slides[index].classList.add("active");
    b3.classList.add("active");
});