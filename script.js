// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    observer.observe(element);

});


// =========================
// PAGE LOAD ANIMATION
// =========================

window.addEventListener("load", function () {

    const heroElements = document.querySelectorAll(".hero .reveal");

    heroElements.forEach(function (element) {

        element.classList.add("active");

    });

});