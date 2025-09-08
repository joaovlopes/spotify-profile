import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicArtistCardComponent } from './music-artist-card.component';

describe('MusicArtistCardComponent', () => {
  let component: MusicArtistCardComponent;
  let fixture: ComponentFixture<MusicArtistCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MusicArtistCardComponent]
    });
    fixture = TestBed.createComponent(MusicArtistCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
