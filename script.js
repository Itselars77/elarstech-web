const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu.onclick = () => {
sidebar.classList.toggle("active");
};
