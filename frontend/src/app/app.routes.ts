import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ListComponent as MoviesListComponent } from './features/movies/list/list.component';
import { ListComponent as FavoritesListComponent } from './features/favorites/list/list.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MoviesListComponent, canActivate: [AuthGuard] },
  { path: 'favorites', component: FavoritesListComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LoginComponent, canActivate: [AuthGuard] }
];
