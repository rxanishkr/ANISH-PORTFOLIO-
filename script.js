document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("active");
});

document.getElementById("mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark");
    const icon = document.querySelector("#mode-toggle i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
