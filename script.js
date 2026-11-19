const filterTabs = document.querySelectorAll('.tab-pill');
const productCards = document.querySelectorAll('.catalog-card');

filterTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    filterTabs.forEach((btn) => btn.classList.remove('active'));
    tab.classList.add('active');

    const selectedCategory = tab.dataset.category;

    productCards.forEach((card) => {
      const matches = selectedCategory === 'todos' || card.dataset.category === selectedCategory;
      card.style.display = matches ? 'flex' : 'none';
    });
  });
});

const toggleButtons = document.querySelectorAll('.toggle-desc-btn');

toggleButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const description = btn.previousElementSibling;
    description.classList.toggle('clamped');
    btn.textContent = description.classList.contains('clamped') ? 'Ver mais ⌄' : 'Ver menos ⌃';
  });
});

const heroSlides = document.querySelectorAll('.hero-slide');
const heroDots = document.querySelectorAll('.hero-slider-dot');

if (heroSlides.length && heroSlides.length === heroDots.length) {
  let activeSlide = 0;

  const showSlide = (index) => {
    activeSlide = index;
    heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
  };

  heroDots.forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => showSlide((activeSlide + 1) % heroSlides.length), 4500);
  }
}