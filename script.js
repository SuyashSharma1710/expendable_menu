const ham = document.getElementById('ham');
const main = document.getElementById('main');
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');

// Toggle the hamburger menu on click
ham.addEventListener('click', () => {
  main.classList.toggle('active');
});

// Toggle light/dark theme
themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    body.removeAttribute('data-theme');
  } else {
    body.setAttribute('data-theme', 'dark'); 
  }
});
