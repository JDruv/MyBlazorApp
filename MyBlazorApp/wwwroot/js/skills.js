window.animateSkills = () => {
    document.querySelectorAll('.skill-fill').forEach(el => {
        const level = el.style.getPropertyValue('--skill-level');
        setTimeout(() => {
            el.style.width = level;
            el.classList.add('active');
        }, 300);
    });
};
