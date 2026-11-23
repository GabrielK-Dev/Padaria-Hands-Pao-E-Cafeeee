const abasFiltro = document.querySelectorAll('.aba-pilula');
const cartoesProduto = document.querySelectorAll('.cartao-catalogo');

abasFiltro.forEach((aba) => {
  aba.addEventListener('click', () => {
    abasFiltro.forEach((btn) => btn.classList.remove('ativo'));
    aba.classList.add('ativo');

    const categoriaSelecionada = aba.dataset.category;

    cartoesProduto.forEach((cartao) => {
      const corresponde =
        categoriaSelecionada === 'todos' || cartao.dataset.category === categoriaSelecionada;
      cartao.style.display = corresponde ? 'flex' : 'none';
    });
  });
});

const botoesAlternarDesc = document.querySelectorAll('.botao-alternar-desc');

botoesAlternarDesc.forEach((btn) => {
  btn.addEventListener('click', () => {
    const descricao = btn.previousElementSibling;
    descricao.classList.toggle('cortado');
    btn.textContent = descricao.classList.contains('cortado') ? 'Ver mais ⌄' : 'Ver menos ⌃';
  });
});

const slidesDestaque = document.querySelectorAll('.slide-destaque');
const pontosCarrossel = document.querySelectorAll('.ponto-carrossel');

if (slidesDestaque.length && slidesDestaque.length === pontosCarrossel.length) {
  let slideAtivo = 0;

  const mostrarSlide = (indice) => {
    slideAtivo = indice;
    slidesDestaque.forEach((slide, i) => slide.classList.toggle('ativo', i === indice));
    pontosCarrossel.forEach((ponto, i) => {
      ponto.classList.toggle('ativo', i === indice);
      ponto.setAttribute('aria-current', i === indice ? 'true' : 'false');
    });
  };

  pontosCarrossel.forEach((ponto, indice) =>
    ponto.addEventListener('click', () => mostrarSlide(indice))
  );

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => mostrarSlide((slideAtivo + 1) % slidesDestaque.length), 4500);
  }
}
