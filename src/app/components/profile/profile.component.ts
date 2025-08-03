import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from '@/core/services/spotify-api.service';
import { SpotifyAuthService } from '@/core/services/spotify-auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any = null;
  playlists: any[] = [];
  followingArtists: any = null;

  constructor(
    private api: SpotifyApiService,
    private auth: SpotifyAuthService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('spotify_token')!;
    // busca perfil
    this.api.getUserProfile(token).subscribe((u) => (this.user = u));
    // busca playlists
    this.api
      .getUserPlaylists(token)
      .subscribe((pl) => (this.playlists = pl.items));
    // busca artistas seguidos
    this.api.getFollowingArtists(token).subscribe((artists) => {
      this.followingArtists = artists.artists;
    });

    console.log(this.user, this.followingArtists);
  }

  logoutSpotify() {
    this.auth.logout();
  }

  navigateToTopArtists() {
    console.log('Navigating to top artists');
  }
}
