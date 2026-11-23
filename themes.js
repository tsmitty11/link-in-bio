(() => {
  const themes = [
    ['sapphire', 'Sapphire'],
    ['ruby', 'Ruby'],
    ['emerald', 'Emerald'],
    ['opal', 'Opal'],
    ['black-diamond', 'Black diamond'],
  ];
  const root = document.documentElement;
  const controls = document.querySelector('.theme-controls');
  const shuffle = document.querySelector('.theme-shuffle');
  const reset = document.querySelector('.theme-reset');
  const label = document.querySelector('.theme-name');
  if (!controls || !shuffle || !reset || !label) return;

  controls.hidden = false;
  shuffle.addEventListener('click', () => {
    const choices = themes.filter(([id]) => id !== root.dataset.theme);
    const [id, name] = choices[Math.floor(Math.random() * choices.length)];
    root.dataset.theme = id;
    label.textContent = name;
    reset.hidden = false;
  });
  reset.addEventListener('click', () => {
    delete root.dataset.theme;
    label.textContent = 'Default';
    reset.hidden = true;
    shuffle.focus();
  });
})();
