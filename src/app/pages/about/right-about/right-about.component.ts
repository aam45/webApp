import { Component, Input, OnInit } from '@angular/core';
import { Card } from './card';
import { TranslationsService } from '../../../core/TransaltionService/translations.service';

@Component({
  selector: 'app-right-about',
  templateUrl: './right-about.component.html',
  styleUrls: ['./right-about.component.css'],
})
export class RightAboutComponent implements OnInit {
  @Input() i18nPath!: string;
  public cards!: Array<Card>;

  constructor(private readonly transloco: TranslationsService) {}

  public ngOnInit(): void {
    this.cards = this.buildUpCards();
  }

  private buildUpCards(): Array<Card> {
    const trans = (key: string) =>
      this.transloco.translateWithKey(this.i18nPath, key);

    return [
      {
        title: trans('projects.number-of-Projects'),
        text: trans('projects.text'),
        subtext: trans('projects.subtext'),
      },
      {
        title: trans('experience.years'),
        text: trans('experience.text'),
        subtext: trans('projects.subtext'),
      },
      {
        title: trans('clients.number-of-clients'),
        text: trans('clients.text'),
        subtext: trans('clients.subtext'),
      },
      {
        title: trans('customer.number-of-reviews'),
        text: trans('customer.text'),
        subtext: trans('projects.subtext'),
      },
    ];
  }
}
