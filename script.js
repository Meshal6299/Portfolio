const toggleButton = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.style.opacity = 0; // fade out
        setTimeout(() => themeIcon.src = "./images/L2D.png", 100);
        setTimeout(() => themeIcon.style.opacity = 1, 150);
    } else {
        body.classList.remove('dark-mode');
        themeIcon.style.opacity = 0;
        setTimeout(() => themeIcon.src = "./images/D2L.png", 100);
        setTimeout(() => themeIcon.style.opacity = 1, 150);
    }
    localStorage.setItem('theme', theme);
};

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

toggleButton.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(newTheme);
});
