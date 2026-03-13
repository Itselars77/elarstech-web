const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
