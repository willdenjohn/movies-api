import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { Observable, map } from 'rxjs';

export interface NavbarRoute {
  label: string;
  path: string;
  showWhenLoggedIn?: boolean;
  showWhenLoggedOut?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() routes: NavbarRoute[] = [];
  visibleRoutes$: Observable<NavbarRoute[]>;

  constructor(private authService: AuthService) {
    this.visibleRoutes$ = this.authService.isLoggedIn$.pipe(
      map(loggedIn =>
        this.routes.filter(r =>
          (loggedIn && r.showWhenLoggedIn) || (!loggedIn && r.showWhenLoggedOut)
        )
      )
    );
  }

  logout() {
    this.authService.logout();
  }
}
