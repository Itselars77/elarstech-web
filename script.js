const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
sidebar.classList.toggle("active");
overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
sidebar.classList.remove("active");
overlay.classList.remove("active");
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

var typed = new Typed(".typing", {
strings: [
"Web Developer",
"Linux Enthusiast",
"Problem Solver",
"Future Tech Entrepreneur"
],
typeSpeed: 80,
backSpeed: 40,
loop: true
});
const repoContainer = document.getElementById("repo-container");

fetch("https://api.github.com/users/Itselars77/repos")
.then(response => response.json())
.then(data => {

repoContainer.innerHTML = "";

data.slice(0,6).forEach(repo => {

const repoCard = document.createElement("div");
repoCard.classList.add("repo-card");

repoCard.innerHTML = `
<h3>${repo.name}</h3>
<p>${repo.description || "No description available."}</p>
<a href="${repo.html_url}" target="_blank">View Repo</a>
`;

repoContainer.appendChild(repoCard);

});

});

const skills = document.querySelectorAll(".skill-level");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.width = entry.target.classList.contains("html") ? "95%" :
entry.target.classList.contains("css") ? "90%" :
entry.target.classList.contains("js") ? "80%" :
entry.target.classList.contains("linux") ? "70%" :
entry.target.classList.contains("db") ? "75%" : "50%";

}

});

});

skills.forEach(skill => observer.observe(skill));