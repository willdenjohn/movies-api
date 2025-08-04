export interface Movie {
  id: number;
  nome: string;
  anoLancamento: number;
  descricao: string;
  genero: string;
}

export interface MoviesResponse {
  data: Movie[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalMovies: number;
    moviesPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  filters: {
    sortBy: string;
    order: string;
    genero: string | null;
  };
}

export interface MoviesFilters {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: string;
  genero?: string;
}

export interface FiltersResponse {
  availableGenres: string[];
  availableSortFields: string[];
  sortOrders: string[];
}