const toggleDarkMode = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle('dark-mode');
};

new Splide('.splide', {
  type: 'loop',
  autoplay: true,
  interval: 3000
}).mount();