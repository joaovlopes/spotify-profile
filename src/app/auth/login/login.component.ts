// login.component.ts
import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../core/services/spotify-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private auth: SpotifyAuthService) {}

  login() {
    this.auth.redirectToSpotifyAuth();
  }
}
