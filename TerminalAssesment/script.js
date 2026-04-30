function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}