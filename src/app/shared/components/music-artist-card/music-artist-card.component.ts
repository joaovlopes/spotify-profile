import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-artist-card',
  templateUrl: './music-artist-card.component.html',
  styleUrls: ['./music-artist-card.component.scss'],
})
export class MusicArtistCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() artist?: string;
  @Input() album?: string;
  @Input() duration?: string;
  @Input() variant: 'music' | 'artist' = 'artist';
}
