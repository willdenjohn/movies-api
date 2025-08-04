# Movies API + Frontend Angular

Este repositório contém a API REST de filmes e o frontend Angular desenvolvido para o desafio técnico.

---

## Passos para Execução

### 1. Preparação

- Faça um **fork** deste repositório: [https://github.com/TesteDevGrowth/movies-api](https://github.com/TesteDevGrowth/movies-api)
- Clone o seu fork localmente.

### 2. Subindo a API

```bash
cd movies-api
npm install
npm start
```
A API estará disponível em `http://localhost:3000`.

### 3. Subindo o Frontend Angular

```bash
cd frontend
npm install
npm start
```
O frontend estará disponível em `http://localhost:4200`.

---

## Como Usar

1. **Login:**  
   Acesse `/login` no frontend e utilize as credenciais:
   - Usuário: `teste`
   - Senha: `teste`

2. **Listagem de Filmes:**  
   Após o login, navegue até `/movies` para visualizar a lista de filmes, aplicar filtros, ordenação e paginação.

3. **Favoritar Filmes:**  
   Clique em "Favoritar" para adicionar filmes à sua lista de favoritos.

4. **Filmes Favoritos:**  
   Acesse `/favorites` para visualizar e remover filmes favoritados.

---

## Estrutura do Projeto

```
├── index.js          # Servidor principal da API
├── swagger.js        # Documentação Swagger
├── data/
│   └── movies.js     # Base de dados simulada
├── frontend/
│   ├── src/
│   │   └── app/      # Aplicação Angular
│   ├── package.json
│   └── README.md     # Documentação do frontend
├── package.json      # Configuração da API
└── README.md         # Este arquivo
```

---

## Decisões Técnicas & Arquitetura

- **Angular Standalone Components:** Utilizado para simplificar a estrutura e facilitar manutenção.
- **Serviços centralizados:** Autenticação, filmes e favoritos implementados via serviços singleton.
- **Guards e Interceptors:** Proteção de rotas e injeção automática do token JWT nas requisições.
- **Observables e RxJS:** Gerenciamento reativo de estado e dados.
- **Separação de responsabilidades:** Componentes de container e apresentação.
- **Favoritos em localStorage:** Persistência simples e rápida para o usuário.

---

## Critérios de Avaliação

- **Organização do Código:** Estrutura modular, uso de boas práticas Angular.
- **Qualidade do Código:** Clareza, legibilidade e simplicidade.
- **Uso do Angular:** Solução dos requisitos com mindset Angular.
- **Arquitetura:** Justificativa das escolhas acima.
- **Documentação:** Este README detalha execução, decisões e estrutura.

---

## Observações

- O estilo visual não foi priorizado, conforme instruções do desafio.
- O repositório deve permanecer **público** para avaliação.
- Para exemplos de uso da API, consulte o arquivo [EXAMPLES.md](EXAMPLES.md).
