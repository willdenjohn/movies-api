import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, NavbarRoute } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  routes: NavbarRoute[] = [
    { label: 'Login', path: '/login', showWhenLoggedOut: true },
    { label: 'Filmes', path: '/movies', showWhenLoggedIn: true },
    { label: 'Favoritos', path: '/favorites', showWhenLoggedIn: true },
    { label: 'Sair', path: '/login', showWhenLoggedIn: true }
  ];
}
