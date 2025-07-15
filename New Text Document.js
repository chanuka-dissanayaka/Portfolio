// Select necessary elements
const styleSwitcher = document.querySelector('.style-switcher');
const switcherToggler = document.querySelector('.style-switcher-toggler');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle Style Switcher Visibility
switcherToggler.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

// Toggle Dark and Light Mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Update Button Text and Icon
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        themeToggle.textContent = ' Light Mode';
        themeToggle.prepend(icon);
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        themeToggle.textContent = ' Dark Mode';
        themeToggle.prepend(icon);
    }
});
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }
  