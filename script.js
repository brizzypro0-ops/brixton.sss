// NAVIGATION
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove("show");
        }
    });
}

// SCROLL ANIMATION
const elements = document.querySelectorAll("section, .card, .feature-box");

function reveal() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// GALLERY VIEW
const images = document.querySelectorAll(".gallery-grid img");

if (images.length > 0) {
    const viewer = document.createElement("div");
    viewer.classList.add("image-viewer");

    viewer.innerHTML = `
        <span class="close-btn">&times;</span>
        <img class="viewer-img">
    `;

    document.body.appendChild(viewer);

    const imgView = viewer.querySelector(".viewer-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            viewer.classList.add("active");
            imgView.src = img.src;
        });
    });

    viewer.addEventListener("click", () => {
        viewer.classList.remove("active");
    });
}