import { Component, Input } from '@angular/core';
import { Stats } from '../stats';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() stat!: Stats;
}
