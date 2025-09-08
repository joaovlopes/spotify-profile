import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-title-button',
  templateUrl: './title-button.component.html',
  styleUrls: ['./title-button.component.scss'],
})
export class TitleButtonComponent {
  @Input() title: string = '';
  @Input() type: string = 'button';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
