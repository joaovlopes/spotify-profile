import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthService {
  private clientId = environment.spotifyClientId;
  private redirectUri = environment.spotifyRedirectUri;
  private scope = 'user-read-private user-read-email';
  private codeVerifierKey = 'spotify_code_verifier';

  constructor(private http: HttpClient) {}

  private generateRandomString(length: number): string {
    const charset =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const values = crypto.getRandomValues(new Uint8Array(length));
    for (let i = 0; i < values.length; i++) {
      result += charset[values[i] % charset.length];
    }
    return result;
  }

  private async generateCodeChallenge(codeVerifier: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);

    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  async redirectToSpotifyAuth(): Promise<void> {
    const codeVerifier = this.generateRandomString(128);
    localStorage.setItem(this.codeVerifierKey, codeVerifier);

    const codeChallenge = await this.generateCodeChallenge(codeVerifier);

    // monta na mão para garantir %20 e %3A, %2F etc.
    const params = [
      `response_type=code`,
      `client_id=${encodeURIComponent(this.clientId)}`,
      `scope=${encodeURIComponent(this.scope)}`,
      `redirect_uri=${encodeURIComponent(this.redirectUri)}`,
      `code_challenge_method=S256`,
      `code_challenge=${encodeURIComponent(codeChallenge)}`,
    ].join('&');

    window.location.href = `https://accounts.spotify.com/authorize?${params}`;
  }

  exchangeCodeForToken(code: string) {
    const codeVerifier = localStorage.getItem(this.codeVerifierKey);

    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('code_verifier', codeVerifier!);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(
      'https://accounts.spotify.com/api/token',
      body.toString(),
      { headers }
    );
  }

  getUserProfile(accessToken: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${accessToken}`,
    });

    return this.http.get('https://api.spotify.com/v1/me', { headers });
  }

  setToken(token: string) {
    localStorage.setItem('spotify_token', token);
  }
}
