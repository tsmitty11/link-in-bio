document.querySelectorAll('.venture-image').forEach((image) => {
  const card = image.closest('.venture-card');

  const finish = () => {
    card.classList.remove('is-loading');
    card.removeAttribute('aria-busy');

    if (!image.naturalWidth && !card.querySelector('.venture-fallback')) {
      const fallback = document.createElement('span');
      fallback.className = 'venture-fallback';
      fallback.textContent = image.alt;
      image.hidden = true;
      card.append(fallback);
    }
  };

  image.addEventListener('load', finish, { once: true });
  image.addEventListener('error', finish, { once: true });

  if (image.complete) {
    finish();
  } else {
    card.classList.add('is-loading');
    card.setAttribute('aria-busy', 'true');
  }
});
