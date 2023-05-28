
const getDarkMode = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const isSystemDarkMode = darkModeMediaQuery.matches;
  const darkMoveValue = window.localStorage.isDarkMode;
  if (!darkMoveValue) return isSystemDarkMode;

  return darkMoveValue  === 'true';
}

const handleDarkMode = () => {
  const darkMode = getDarkMode();
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

handleDarkMode();
window.addEventListener('storage', handleDarkMode);
