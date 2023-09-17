// Saytni yuklaganda
window.addEventListener("load", function () {
    // Preloaderni yopamiz
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector("body").classList.add("loaded");
    }, 2400);
});
