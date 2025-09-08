import { Component } from '@angular/core';

@Component({
  selector: 'app-time-filter',
  templateUrl: './time-filter.component.html',
  styleUrls: ['./time-filter.component.scss'],
})
export class TimeFilterComponent {
  timeRanges = [
    { label: 'Last 4 weeks', value: 'short_term' },
    { label: 'Last 6 months', value: 'medium_term' },
    { label: 'All time', value: 'long_term' },
  ];

  selectedOption = this.timeRanges[0].value;

  selectOption(value: string) {
    this.selectedOption = value;
  }
}
