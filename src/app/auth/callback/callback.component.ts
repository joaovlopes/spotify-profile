// callback.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyAuthService } from '../../core/services/spotify-auth.service';
import { SpotifyApiService } from '../../core/services/spotify-api.service';

@Component({
  selector: 'app-callback',
  template: `<p>Autenticando...</p>`,
})
export class CallbackComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: SpotifyAuthService,
    private api: SpotifyApiService
  ) {}

  ngOnInit(): void {
    const code = this.route.snapshot.queryParamMap.get('code')!;
    this.auth.exchangeCodeForToken(code).subscribe((res: any) => {
      const token = res.access_token;
      // salva token e navega para rota principal
      this.auth.setToken(token);
      this.router.navigate(['/']);
    });
  }
}
