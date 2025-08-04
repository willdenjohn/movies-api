import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../../core/services/favorites.service';
import { Movie } from '../../../core/models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  favorites: Movie[] = [];
  paginated: Movie[] = [];
  page = 1;
  limit = 10;

  constructor(private favoritesService: FavoritesService) {
    this.favoritesService.favorites$.subscribe(favs => {
      this.favorites = favs;
      this.updatePagination();
    });
  }

  updatePagination() {
    const start = (this.page - 1) * this.limit;
    const end = start + this.limit;
    this.paginated = this.favorites.slice(start, end);
  }

  removeFavorite(movieId: number) {
    this.favoritesService.removeFromFavorites(movieId);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePagination();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.favorites.length / this.limit) || 1;
  }
}
