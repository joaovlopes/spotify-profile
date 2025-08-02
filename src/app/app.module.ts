import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopArtistsComponent } from './components/top-artists/top-artists.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';
import { RecentComponent } from './components/recent/recent.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SidebarComponent, ProfileComponent, TopArtistsComponent, TopTracksComponent, RecentComponent, PlaylistsComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
