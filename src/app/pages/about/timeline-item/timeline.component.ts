import { Component, Input, OnInit } from '@angular/core';
import { TimeLine } from './time-line';
import { TranslationsService } from '../../../core/translations.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  @Input() i18nPath!: string;
  public timeLines!: Array<TimeLine>;

  constructor(private readonly transloco: TranslationsService) {}

  public ngOnInit(): void {
    this.timeLines = this.buildUpStats();
  }

  private buildUpStats(): Array<TimeLine> {
    const trans = (key: string) =>
      this.transloco.translateWithKey(this.i18nPath, key);

    return [
      {
        years: trans('time-line.occupation.ausbildung-background.years'),
        headline: trans('time-line.occupation.ausbildung-background.headline'),
        title: trans('time-line.occupation.ausbildung-background.title'),
        subtitle: trans('time-line.occupation.ausbildung-background.subtitle'),
      },
      {
        years: trans('time-line.occupation.java-background.years'),
        headline: trans('time-line.occupation.java-background.headline'),
        title: trans('time-line.occupation.java-background.title'),
        subtitle: trans('time-line.occupation.java-background.subtitle'),
      },
      {
        years: trans('time-line.occupation.angular-background.years'),
        headline: trans('time-line.occupation.ausbildung-background.headline'),
        title: trans('time-line.occupation.ausbildung-background.title'),
        subtitle: trans('time-line.occupation.ausbildung-background.subtitle'),
      },
      {
        years: trans('time-line.occupation.praktikum-1-background.years'),
        headline: trans('time-line.occupation.praktikum-1-background.headline'),
        title: trans('time-line.occupation.praktikum-1-background.title'),
        subtitle: trans('time-line.occupation.praktikum-1-background.subtitle'),
      },
      {
        years: trans('time-line.occupation.praktikum-2-background.years'),
        headline: trans('time-line.occupation.praktikum-2-background.headline'),
        title: trans('time-line.occupation.praktikum-2-background.title'),
        subtitle: trans('time-line.occupation.praktikum-2-background.subtitle'),
      },
    ];
  }
}
