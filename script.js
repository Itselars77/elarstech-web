const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Scroll reveal

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if(top < trigger){
            section.classList.add("show");
        }
    });
});
