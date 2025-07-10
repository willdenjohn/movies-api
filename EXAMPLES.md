# Exemplo de Uso da Movies API

Este arquivo contém exemplos práticos de como usar a API Movies com autenticação JWT.

## 1. Iniciando o Servidor

```bash
npm install
npm start
```

O servidor estará disponível em `http://localhost:3000`

## 2. Testando com cURL

### Passo 1: Fazer Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "usuario": "teste",
    "senha": "teste"
  }'
```

**Resposta esperada:**
```json
{
  "message": "Login realizado com sucesso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": "30 minutos",
  "tokenType": "Bearer"
}
```

### Passo 2: Usar o Token para Acessar Filmes
```bash
# Substitua SEU_TOKEN pelo token recebido no login
curl -X GET "http://localhost:3000/movies?page=1&limit=5&sortBy=anoLancamento&order=desc" \
  -H "Authorization: Bearer SEU_TOKEN"
```

### Passo 3: Filtrar por Gênero
```bash
curl -X GET "http://localhost:3000/movies?genero=drama&page=1&limit=3" \
  -H "Authorization: Bearer SEU_TOKEN"
```

### Passo 4: Obter Filtros Disponíveis
```bash
curl -X GET http://localhost:3000/movies/filters \
  -H "Authorization: Bearer SEU_TOKEN"
```

### Passo 5: Verificar Health da API (não requer autenticação)
```bash
curl -X GET http://localhost:3000/health
```

## 3. Testando com Swagger UI

1. **Acesse**: `http://localhost:3000/api-docs`

2. **Faça Login**:
   - Clique em `POST /auth/login`
   - Clique em "Try it out"
   - Use as credenciais:
     ```json
     {
       "usuario": "teste",
       "senha": "teste"
     }
     ```
   - Clique em "Execute"
   - Copie o token da resposta

3. **Configure a Autenticação**:
   - Clique no botão "Authorize" 🔒 no topo da página
   - Cole o token no campo (não precisa digitar "Bearer")
   - Clique em "Authorize"
   - Clique em "Close"

4. **Teste os Endpoints**:
   - Agora você pode testar qualquer endpoint
   - Experimente `GET /movies` com diferentes parâmetros
   - Teste `GET /movies/filters`
   - Teste `GET /health`

## 4. Exemplos de Requisições

### Listar primeiros 10 filmes ordenados por nome
```
GET /movies
Authorization: Bearer SEU_TOKEN
```

### Página 2 com 5 filmes por página, ordenados por ano (mais recente primeiro)
```
GET /movies?page=2&limit=5&sortBy=anoLancamento&order=desc
Authorization: Bearer SEU_TOKEN
```

### Filtrar filmes de ficção científica
```
GET /movies?genero=ficção científica
Authorization: Bearer SEU_TOKEN
```

### Combinar filtros: filmes de drama, página 1, 3 por página, ordenados por ano
```
GET /movies?genero=drama&page=1&limit=3&sortBy=anoLancamento&order=desc
Authorization: Bearer SEU_TOKEN
```

### Verificar health da API (não requer autenticação)
```
GET /health
```

### Obter filtros disponíveis
```
GET /movies/filters
Authorization: Bearer SEU_TOKEN
```

## 5. Códigos de Status

- **200**: Sucesso
- **400**: Erro de validação nos parâmetros
- **401**: Token não fornecido ou usuário/senha incorretos
- **403**: Token inválido ou expirado
- **404**: Rota não encontrada
- **500**: Erro interno do servidor

## 6. Renovando o Token

O token expira em 30 minutos. Quando isso acontecer, você receberá um erro 403. Para continuar usando a API:

1. Faça login novamente no endpoint `/auth/login`
2. Use o novo token nas requisições subsequentes

## 7. Estrutura da Base de Dados

A API contém mais de 1000 filmes com os seguintes campos:
- `id`: Identificador único
- `nome`: Nome do filme
- `anoLancamento`: Ano de lançamento (1920-2024)
- `descricao`: Descrição do filme
- `genero`: Gênero (Drama, Ação, Comédia, etc.)

## 8. Dicas para Teste

1. **Use o Swagger UI** para uma experiência mais visual e interativa
2. **Teste a paginação** com diferentes valores de `page` e `limit`
3. **Experimente a ordenação** com diferentes campos e ordens
4. **Teste os filtros** com termos parciais (ex: "drama" encontrará "Drama")
5. **Monitore a expiração do token** - renove quando necessário
