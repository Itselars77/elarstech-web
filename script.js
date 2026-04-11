const menu = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
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
            number: { value: 60 },
            color: { value: "#38bdf8" },
            links: {
                enable: true,
                color: "#38bdf8",
                distance: 150
            },
            move: {
                enable: true,
                speed: 2
            },
            size: { value: 3 }
        },
        background: { color: "transparent" }
    }).catch(err => console.error("Particles error:", err));
}

/* SCROLL REVEAL */
function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

/* TYPING EFFECT */
document.addEventListener("DOMContentLoaded", () => {
    if (window.Typed && document.querySelector(".typing")) {
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
    } else {
        const typingEl = document.querySelector(".typing");
        if (typingEl) {
            typingEl.textContent = "Web Developer";
        }
    }
});

/* GITHUB REPOSITORIES */
if (repoContainer) {
    repoContainer.innerHTML = "<p>Loading repositories...</p>";

    fetch("https://api.github.com/users/Itselars77/repos")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch repositories: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            repoContainer.innerHTML = "";

            const repos = data
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 6);

            repos.forEach(repo => {
                const repoCard = document.createElement("div");
                repoCard.classList.add("card");

                repoCard.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">View Repo</a>
                `;

                repoContainer.appendChild(repoCard);
            });

            if (repos.length === 0) {
                repoContainer.innerHTML = `
                    <div class="card">
                        <h3>No Repositories Found</h3>
                        <p>Your GitHub account has no public repositories yet.</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            console.error("GitHub fetch error:", error);
            repoContainer.innerHTML = `
                <div class="card">
                    <h3>GitHub Repositories</h3>
                    <p>Unable to load repositories right now.</p>
                </div>
            `;
        });
}

/* SKILL BAR ANIMATION */
if (skills.length > 0) {
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
}
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                formStatus.textContent = "✅ Message sent successfully!";
                formStatus.style.color = "#38bdf8";
                contactForm.reset();
            } else {
                formStatus.textContent = "❌ Failed to send message.";
                formStatus.style.color = "red";
            }

        } catch (error) {
            formStatus.textContent = "⚠️ Something went wrong. Try again.";
            formStatus.style.color = "orange";
        }
    });
}