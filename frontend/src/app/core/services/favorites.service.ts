import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly FAVORITES_KEY = 'favorite_movies';
  private favoritesSubject = new BehaviorSubject<Movie[]>(this.loadFavorites());
  public favorites$ = this.favoritesSubject.asObservable();

  private loadFavorites(): Movie[] {
    const stored = localStorage.getItem(this.FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private saveFavorites(favorites: Movie[]): void {
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  addToFavorites(movie: Movie): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!this.isFavorite(movie.id)) {
      this.saveFavorites([...currentFavorites, movie]);
    }
  }

  removeFromFavorites(movieId: number): void {
    const currentFavorites = this.favoritesSubject.value;
    const filtered = currentFavorites.filter(movie => movie.id !== movieId);
    this.saveFavorites(filtered);
  }

  isFavorite(movieId: number): boolean {
    return this.favoritesSubject.value.some(movie => movie.id === movieId);
  }

  getFavorites(): Movie[] {
    return this.favoritesSubject.value;
  }
}
