/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});


/* =========================
   THEME
========================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "Mode gelap";
    } else {
        themeButton.textContent = "Mode terang";
    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-label, .section-heading, .about-content, .project-item, .certificate, .cv-content, .media-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   CURSOR LIGHT
========================= */

const cursorLight = document.createElement("div");

cursorLight.className = "cursor-light";

document.body.appendChild(cursorLight);


document.addEventListener("mousemove", (event) => {

    cursorLight.style.left = event.clientX + "px";
    cursorLight.style.top = event.clientY + "px";

});