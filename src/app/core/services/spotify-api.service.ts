import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyApiService {
  private apiBase = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  private authHeaders(token: string): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  /** Pega perfil do usuário logado */
  getUserProfile(token: string): Observable<any> {
    return this.http.get(`${this.apiBase}/me`, {
      headers: this.authHeaders(token),
    });
  }

  /** Exemplo: lista as playlists do usuário */
  getUserPlaylists(token: string): Observable<any> {
    return this.http.get(`${this.apiBase}/me/playlists`, {
      headers: this.authHeaders(token),
    });
  }

  // Você pode adicionar aqui mais métodos: getRecentlyPlayed, getTopArtists, etc.
}
