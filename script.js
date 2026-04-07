const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
<<<<<<< HEAD
const sidebarLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll("section");
const repoContainer = document.getElementById("repo-container");
const skills = document.querySelectorAll(".skill-level");

/* SIDEBAR */

if (menu && sidebar && overlay) {
    menu.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });

    sidebarLinks.forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });
    });
}

/* PARTICLES */

if (window.tsParticles) {
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
}

/* SCROLL REVEAL */

function revealSections() {
    const trigger = window.innerHeight * 0.85;
=======

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
>>>>>>> a1b767f02091326c6a9d0ddcd53aaa81ca5bda05

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

<<<<<<< HEAD
        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* TYPING EFFECT */

if (window.Typed) {
    new Typed(".typing", {
        strings: [
            "Web Developer",
            "Linux Enthusiast",
            "Problem Solver",
            "Future Tech Entrepreneur 🚀"
        ],
        typeSpeed: 80,
        backSpeed: 40,
        loop: true
    });
}

/* GITHUB REPOSITORIES */

if (repoContainer) {
    fetch("https://api.github.com/users/Itselars77/repos")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch repositories.");
            }
            return response.json();
        })
        .then(data => {
            repoContainer.innerHTML = "";

            const filteredRepos = data
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6);

            filteredRepos.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.classList.add("card");

                repoCard.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description available."}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repo</a>
        `;

                repoContainer.appendChild(repoCard);
            });
        })
        .catch(error => {
            repoContainer.innerHTML = `
        <div class="card">
          <h3>GitHub Repositories</h3>
          <p>Unable to load repositories right now.</p>
        </div>
      `;
            console.error(error);
        });
}

/* SKILL BAR ANIMATION */

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width =
                entry.target.classList.contains("html") ? "95%" :
                    entry.target.classList.contains("css") ? "90%" :
                        entry.target.classList.contains("js") ? "80%" :
                            entry.target.classList.contains("linux") ? "70%" :
                                entry.target.classList.contains("db") ? "75%" :
                                    "50%";

            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.4 });

skills.forEach(skill => skillObserver.observe(skill));
=======
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
repoCard.classList.add("card");

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
>>>>>>> a1b767f02091326c6a9d0ddcd53aaa81ca5bda05
