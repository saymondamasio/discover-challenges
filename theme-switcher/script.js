const switcherInput = document.querySelector('#switcher-theme');

function setTheme(theme) {
  if (theme === 'dark-theme') {
    switcherInput.setAttribute('checked', 'checked');

  } else {
    switcherInput.removeAttribute('checked');
  }

  document.documentElement.classList = theme;
}

let mainF = () => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const initialTheme = darkThemeMq.matches ? 'dark-theme' : 'light-theme';
  let currentTheme = localStorage.getItem('theme') || initialTheme;

  setTheme(currentTheme);

  darkThemeMq.addEventListener('change', (e) => {
    if (e.matches) {
      // Theme set to dark.
      setTheme('dark-theme');
    } else {
      // Theme set to light.
      setTheme('light-theme');
    }
  });


  switcherInput.addEventListener('change', () => {
    currentTheme = switcherInput.checked ? 'dark-theme' : 'light-theme';
    setTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
  });
}

window.addEventListener('load', mainF)