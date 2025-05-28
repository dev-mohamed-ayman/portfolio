// Loader and Content Display Logic
document.addEventListener("DOMContentLoaded", () => {
    // Simulate an API request or any async operation
    setTimeout(() => {
        hideLoader();
        showContent();
    }, 2000); // Replace with your actual data loading logic and time

    function hideLoader() {
        const loader = document.getElementById("loader");
        loader.style.display = "none";
    }

    function showContent() {
        const content = document.getElementById("content");
        content.style.display = "block";
    }
});

// Offcanvas Info Toggle
const offcanvasInfoOpen = document.querySelector(".offcanvas-open");
const offcanvasInfoClose = document.querySelector(".offcanvas-info-close");
const offcanvasInfoMenu = document.querySelector(".offcanvas-info");


offcanvasInfoOpen.addEventListener("click", () => {
    offcanvasInfoMenu.classList.add("active");
});
offcanvasInfoClose.addEventListener("click", () => {
    offcanvasInfoMenu.classList.remove("active");
});


// Offcanvas Nav Toggle
const offcanvasNavOpen = document.querySelector(".open-nav");
const offcanvasNavClose = document.querySelector(".offcanvas-nav-close");
const offcanvasNavMenu = document.querySelector(".offcanvas-nav");

offcanvasNavOpen.addEventListener("click", () => {
    offcanvasNavMenu.classList.toggle("active");
});
offcanvasNavClose.addEventListener("click", () => {
    offcanvasNavMenu.classList.remove("active");
});
