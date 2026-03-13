const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

tsParticles.load("particles", {
particles: {
number: {
value: 60
},
color: {
value: "#38bdf8"
},
links: {
enable: true,
color: "#38bdf8",
distance: 150
},
move: {
enable: true,
speed: 2
},
size: {
value: 3
}
},
background: {
color: "transparent"
}
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
