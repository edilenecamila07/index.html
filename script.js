const descricoes = {
  salvador: "Salvador é a capital da Bahia, famosa por seu centro histórico (Pelourinho), praias urbanas e cultura afro-brasileira.",
  fortaleza: "Fortaleza encanta com suas praias, como a do Futuro, além do Beach Park e a animação noturna.",
  recife: "Recife é conhecida como a 'Veneza Brasileira', com canais, história e carnaval vibrante.",
  jericoacoara: "Jericoacoara, no Ceará, é uma vila paradisíaca com dunas, lagoas e pores do sol incríveis."
};

function mostrarDetalhes(cidade) {
  document.getElementById("descricao").textContent = descricoes[cidade];
  window.scrollTo({ top: document.getElementById("detalhes").offsetTop - 20, behavior: "smooth" });
}

function enviarMensagem(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
}
