function navigationScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (document.documentElement.scrollTop > 50) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener("scroll", navigationScroll);