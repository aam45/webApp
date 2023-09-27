import { Component, Input } from '@angular/core';
import { TimeLine } from '../time-line';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.css'],
})
export class TimelineItemComponent {
  @Input() timeLine!: TimeLine;
}
