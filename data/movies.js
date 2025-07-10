// Base de dados simulada de filmes
const movies = [];

// Gerando mais filmes para completar mais de 1000 itens
const genres = [
  "Drama",
  "Comédia",
  "Ação",
  "Terror",
  "Ficção Científica",
  "Romance",
  "Thriller",
  "Aventura",
  "Fantasia",
  "Crime",
  "Animação",
  "Documentário",
];
const adjectives = [
  "Épico",
  "Misterioso",
  "Último",
  "Primeiro",
  "Grande",
  "Pequeno",
  "Novo",
  "Antigo",
  "Perdido",
  "Encontrado",
  "Secreto",
  "Proibido",
  "Selvagem",
  "Urbano",
  "Rural",
  "Noturno",
  "Diurno",
  "Silencioso",
  "Barulhento",
  "Rápido",
  "Lento",
  "Alto",
  "Baixo",
  "Forte",
  "Fraco",
];
const nouns = [
  "Guerreiro",
  "Assassino",
  "Detetive",
  "Ladrão",
  "Herói",
  "Vilão",
  "Soldado",
  "Espião",
  "Médico",
  "Professor",
  "Estudante",
  "Artista",
  "Músico",
  "Escritor",
  "Jornalista",
  "Policial",
  "Bombeiro",
  "Piloto",
  "Marinheiro",
  "Astronauta",
  "Cientista",
  "Inventor",
  "Explorador",
  "Caçador",
  "Pescador",
];
const places = [
  "Nova York",
  "Los Angeles",
  "Paris",
  "Londres",
  "Tóquio",
  "Roma",
  "Barcelona",
  "Berlim",
  "Sydney",
  "Rio de Janeiro",
  "São Paulo",
  "Buenos Aires",
  "México",
  "Toronto",
  "Vancouver",
  "Miami",
  "Las Vegas",
  "Chicago",
  "Boston",
  "Seattle",
];

// Função para gerar um filme aleatório
function generateRandomMovie(id) {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const place = places[Math.floor(Math.random() * places.length)];
  const genre = genres[Math.floor(Math.random() * genres.length)];
  const year = 1950 + Math.floor(Math.random() * 75); // Anos entre 1950 e 2025

  const titleVariations = [
    `O ${adjective} ${noun}`,
    `${noun} de ${place}`,
    `${adjective} ${noun} em ${place}`,
    `A História do ${noun}`,
    `${place}: ${adjective} ${noun}`,
    `O ${noun} ${adjective}`,
    `${adjective}s de ${place}`,
    `${noun}: A ${adjective} Jornada`,
    `${place} ${adjective}`,
    `O ${adjective} de ${place}`,
  ];

  const nome =
    titleVariations[Math.floor(Math.random() * titleVariations.length)];

  const descriptions = [
    `Uma história emocionante sobre um ${noun.toLowerCase()} em ${place}`,
    `A jornada ${adjective.toLowerCase()} de um ${noun.toLowerCase()} que precisa salvar ${place}`,
    `Um ${noun.toLowerCase()} descobre um segredo que pode mudar ${place} para sempre`,
    `A vida de um ${noun.toLowerCase()} ${adjective.toLowerCase()} em ${place}`,
    `Uma aventura épica que acontece em ${place} com um ${noun.toLowerCase()} corajoso`,
    `A história de como um ${noun.toLowerCase()} se tornou ${adjective.toLowerCase()} em ${place}`,
    `Um ${adjective.toLowerCase()} ${noun.toLowerCase()} embarca em uma missão perigosa`,
    `A luta de um ${noun.toLowerCase()} contra as forças do mal em ${place}`,
    `Uma comédia sobre um ${noun.toLowerCase()} ${adjective.toLowerCase()} em ${place}`,
    `O drama de um ${noun.toLowerCase()} que precisa escolher entre o amor e o dever`,
  ];

  const descricao =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    id,
    nome,
    anoLancamento: year,
    descricao,
    genero: genre,
  };
}

// Adicionando mais filmes até completar mais de 1000
for (let i = 11; i <= 1010; i++) {
  movies.push(generateRandomMovie(i));
}

module.exports = movies;
