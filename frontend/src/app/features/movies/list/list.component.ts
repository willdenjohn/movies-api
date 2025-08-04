import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../../core/services/movies.service';
import { FavoritesService } from '../../../core/services/favorites.service';
import { Movie, MoviesFilters, FiltersResponse } from '../../../core/models/movie.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  private moviesService = inject(MoviesService);
  private favoritesService = inject(FavoritesService);

  filters$!: Observable<FiltersResponse>;
  state$ = new BehaviorSubject<MoviesFilters>({
    page: 1,
    limit: 10,
    sortBy: '',
    order: undefined,
    genero: ''
  });
  movies$!: Observable<any>;

  loading = false;
  error: string | null = null;

  ngOnInit() {
    this.filters$ = this.moviesService.getFilters();
    this.movies$ = this.state$.pipe(
      switchMap(state => this.moviesService.getMovies(state))
    );
  }

  updateState(patch: Partial<MoviesFilters>) {
      if (patch.order === 'asc' || patch.order === 'desc') {
        // ok
      } else {
        patch.order = undefined;
      }
    this.state$.next({ ...this.state$.value, ...patch });
  }

  setFavorite(movie: Movie) {
    this.favoritesService.isFavorite(movie.id)
      ? this.favoritesService.removeFromFavorites(movie.id)
      : this.favoritesService.addToFavorites(movie);
  }

  isFavorite(movie: Movie): boolean {
    return this.favoritesService.isFavorite(movie.id);
  }
}
