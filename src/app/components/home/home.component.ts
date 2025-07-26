// home.component.ts
import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '../../core/services/spotify-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  user: any = null;
  playlists: any[] = [];

  constructor(private api: SpotifyApiService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('spotify_token')!;
    // busca perfil
    this.api.getUserProfile(token).subscribe((u) => (this.user = u));
    // busca playlists
    this.api
      .getUserPlaylists(token)
      .subscribe((pl) => (this.playlists = pl.items));
  }
}
