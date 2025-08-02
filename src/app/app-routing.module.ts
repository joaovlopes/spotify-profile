import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { TopArtistsComponent } from '../app/components/top-artists/top-artists.component';
import { TopTracksComponent } from '../app/components/top-tracks/top-tracks.component';
import { RecentComponent} from '../app/components/recent/recent.component';
import { PlaylistsComponent } from '../app/components/playlists/playlists.component';
import { LoginComponent } from './auth/login/login.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'callback', component: CallbackComponent },

  // rotas protegidas com AuthGuard
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'top-artists', component: TopArtistsComponent },
      { path: 'top-tracks', component: TopTracksComponent },
      { path: 'recent', component: RecentComponent },
      { path: 'playlists', component: PlaylistsComponent },
    ],
  },

  // esta rota deve vir por último
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
