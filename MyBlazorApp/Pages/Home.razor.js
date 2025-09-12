// Animazione typewriter per "Su di Me"
export function animateAbout() {
    const about = document.querySelector(".typewriter-about");
    if (!about) return;

    // reset width e trigger reflow
    about.style.width = "0";
    void about.offsetWidth; // forza reflow

    // aggiunge l'animazione CSS
    about.style.animation = "typing-about 3s steps(60, end) forwards";
}

// Animazione barre skill con Intersection Observer e glow
export function animateSkills() {
    const fills = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const target = parseInt(fill.dataset.value, 10);
                let current = 0;

                // Glow animato durante il riempimento
                fill.style.boxShadow = "0 0 8px rgba(255,255,255,0.3)";

                const step = () => {
                    current++;
                    fill.style.width = current + "%";
                    fill.textContent = current + "%";

                    // piccolo glow pulsante
                    fill.style.boxShadow = `0 0 ${4 + current/20}px rgba(255,255,255,${0.2 + current/500})`;

                    if (current < target) {
                        requestAnimationFrame(step);
                    } else {
                        fill.style.boxShadow = "none"; // rimuove glow finale
                    }
                };
                requestAnimationFrame(step);

                obs.unobserve(fill); // animazione una sola volta
            }
        });
    }, { threshold: 0.5 }); // parte quando metà elemento è visibile

    fills.forEach(fill => observer.observe(fill));
}
