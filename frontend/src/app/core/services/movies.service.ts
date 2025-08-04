import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MoviesResponse, MoviesFilters, FiltersResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMovies(filters: MoviesFilters = {}): Observable<MoviesResponse> {
    let params = new HttpParams();
    if (filters.page) params = params.set('page', filters.page.toString());
    if (filters.limit) params = params.set('limit', filters.limit.toString());
    if (filters.sortBy) params = params.set('sortBy', filters.sortBy);
    if (filters.order) params = params.set('order', filters.order);
    if (filters.genero) params = params.set('genero', filters.genero);

    return this.http.get<MoviesResponse>(`${this.API_URL}/movies`, { params });
  }

  getFilters(): Observable<FiltersResponse> {
    return this.http.get<FiltersResponse>(`${this.API_URL}/movies/filters`);
  }
}
