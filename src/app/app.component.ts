import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spotify-profile';
  isLoginRoute = false;
  showSidebar = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const hiddenSidebarRoutes = ['/login', '/callback'];
        this.showSidebar = !hiddenSidebarRoutes.includes(
          event.urlAfterRedirects
        );
      });

    this.router.events.subscribe(() => {
      this.isLoginRoute = this.router.url === '/login';
    });
  }
}
