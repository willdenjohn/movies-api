const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Movies API',
    version: '1.0.0',
    description: `API simples para gerenciar filmes com paginação e ordenação.

**Autenticação:**
Para acessar os endpoints protegidos, você precisa:
1. Fazer login no endpoint POST /auth/login com as credenciais:
   - Usuário: "teste"
   - Senha: "teste"
2. Usar o token JWT retornado nos cabeçalhos Authorization como "Bearer {token}"
3. O token expira em 30 minutos

**Como usar no Swagger:**
1. Execute o endpoint POST /auth/login
2. Copie o token da resposta
3. Clique no botão "Authorize" no topo desta página
4. Cole o token no campo e clique "Authorize"`,
    contact: {
      name: 'Movies API',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor de desenvolvimento',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Token JWT obtido através do endpoint /auth/login'
      }
    },
    schemas: {
      Movie: {
        type: 'object',
        required: ['id', 'nome', 'anoLancamento', 'descricao', 'genero'],
        properties: {
          id: {
            type: 'integer',
            description: 'Identificador único do filme',
            example: 1,
          },
          nome: {
            type: 'string',
            description: 'Nome do filme',
            example: 'O Poderoso Chefão',
          },
          anoLancamento: {
            type: 'integer',
            description: 'Ano de lançamento do filme',
            example: 1972,
          },
          descricao: {
            type: 'string',
            description: 'Descrição do filme',
            example: 'A saga de uma família de mafiosos italianos em Nova York',
          },
          genero: {
            type: 'string',
            description: 'Gênero do filme',
            example: 'Drama',
          },
        },
      },
      MoviesResponse: {
        type: 'object',
        properties: {
          data: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Movie',
            },
          },
          pagination: {
            type: 'object',
            properties: {
              currentPage: {
                type: 'integer',
                example: 1,
              },
              totalPages: {
                type: 'integer',
                example: 10,
              },
              totalMovies: {
                type: 'integer',
                example: 1000,
              },
              moviesPerPage: {
                type: 'integer',
                example: 10,
              },
              hasNextPage: {
                type: 'boolean',
                example: true,
              },
              hasPrevPage: {
                type: 'boolean',
                example: false,
              },
            },
          },
          filters: {
            type: 'object',
            properties: {
              sortBy: {
                type: 'string',
                example: 'nome',
              },
              order: {
                type: 'string',
                example: 'asc',
              },
              genero: {
                type: 'string',
                nullable: true,
                example: null,
              },
            },
          },
        },
      },
      FiltersResponse: {
        type: 'object',
        properties: {
          availableGenres: {
            type: 'array',
            items: {
              type: 'string',
            },
            example: ['Drama', 'Crime', 'Fantasia', 'Ficção Científica'],
          },
          availableSortFields: {
            type: 'array',
            items: {
              type: 'string',
            },
            example: ['nome', 'anoLancamento', 'genero'],
          },
          sortOrders: {
            type: 'array',
            items: {
              type: 'string',
            },
            example: ['asc', 'desc'],
          },
        },
      },
      HealthResponse: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            example: 'OK',
          },
          timestamp: {
            type: 'string',
            format: 'date-time',
            example: '2025-07-10T10:30:00.000Z',
          },
          uptime: {
            type: 'number',
            example: 1234.567,
          },
        },
      },
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            example: 'Erro de validação',
          },
          message: {
            type: 'string',
            example: 'Detalhes do erro',
          },
        },
      },
      LoginRequest: {
        type: 'object',
        required: ['usuario', 'senha'],
        properties: {
          usuario: {
            type: 'string',
            description: 'Nome de usuário',
            example: 'teste',
          },
          senha: {
            type: 'string',
            description: 'Senha do usuário',
            example: 'teste',
          },
        },
      },
      LoginResponse: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Login realizado com sucesso',
          },
          token: {
            type: 'string',
            description: 'Token JWT para autenticação',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          },
          expiresIn: {
            type: 'string',
            example: '30 minutos',
          },
          tokenType: {
            type: 'string',
            example: 'Bearer',
          },
        },
      },
    },
    parameters: {
      PageParam: {
        name: 'page',
        in: 'query',
        description: 'Número da página (padrão: 1)',
        required: false,
        schema: {
          type: 'integer',
          minimum: 1,
          default: 1,
        },
      },
      LimitParam: {
        name: 'limit',
        in: 'query',
        description: 'Número de filmes por página (padrão: 10, máximo: 100)',
        required: false,
        schema: {
          type: 'integer',
          minimum: 1,
          maximum: 100,
          default: 10,
        },
      },
      SortByParam: {
        name: 'sortBy',
        in: 'query',
        description: 'Campo para ordenação',
        required: false,
        schema: {
          type: 'string',
          enum: ['nome', 'anoLancamento', 'genero'],
          default: 'nome',
        },
      },
      OrderParam: {
        name: 'order',
        in: 'query',
        description: 'Ordem da classificação',
        required: false,
        schema: {
          type: 'string',
          enum: ['asc', 'desc'],
          default: 'asc',
        },
      },
      GeneroParam: {
        name: 'genero',
        in: 'query',
        description: 'Filtrar por gênero (busca case-insensitive)',
        required: false,
        schema: {
          type: 'string',
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['./index.js'], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
