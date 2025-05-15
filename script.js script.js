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
const cidades = [
  {
    nome: "Salvador (BA)",
    descricao: "Salvador é famosa pelo Pelourinho, Igreja do Bonfim, praias como Porto da Barra e pelo Carnaval com trios elétricos. Mistura história, cultura afro-brasileira e gastronomia marcante como acarajé e moqueca."
  },
  {
    nome: "Recife (PE)",
    descricao: "Recife oferece cultura, canais e pontes históricas. Destaques incluem o Marco Zero, Instituto Ricardo Brennand, Praia de Boa Viagem e o Galo da Madrugada no Carnaval."
  },
  {
    nome: "Olinda (PE)",
    descricao: "Olinda é Patrimônio da Humanidade com casarios coloridos, igrejas barrocas e festas tradicionais como o Carnaval com bonecos gigantes e frevo pelas ladeiras."
  },
  {
    nome: "Natal (RN)",
    descricao: "Natal é conhecida por suas dunas e praias como Genipabu e Ponta Negra. Oferece passeios de buggy, o Forte dos Reis Magos e culinária com frutos do mar."
  },
  {
    nome: "Fortaleza (CE)",
    descricao: "Fortaleza é vibrante, com praias como Praia do Futuro, vida noturna intensa e acesso a destinos como Jericoacoara. Destaque para o Centro Cultural Dragão do Mar."
  },
  {
    nome: "São Luís (MA)",
    descricao: "São Luís tem centro histórico com azulejos portugueses, festas juninas com Bumba Meu Boi, e serve de ponto de partida para os Lençóis Maranhenses."
  },
  {
    nome: "João Pessoa (PB)",
    descricao: "João Pessoa é uma cidade tranquila com praias como Tambaú, piscinas naturais em Picãozinho e o ponto mais oriental das Américas, a Ponta do Seixas."
  },
  {
    nome: "Maceió (AL)",
    descricao: "Maceió encanta pelas águas cristalinas, jangadas para piscinas naturais em Pajuçara, e praias como Francês e Gunga. A culinária usa coco, peixe e frutos do mar."
  }
];

const container = document.getElementById("cidade-container");

cidades.forEach(cidade => {
  const card = document.createElement("div");
  card.classList.add("card");

  const titulo = document.createElement("h2");
  titulo.textContent = cidade.nome;

  const descricao = document.createElement("p");
  descricao.textContent = cidade.descricao;

  card.appendChild(titulo);
  card.appendChild(descricao);
  container.appendChild(card);
});
