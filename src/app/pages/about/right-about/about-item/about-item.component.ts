import { Component, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss'],
})
export class AboutItemComponent {
  @Input() card!: Card;
}
