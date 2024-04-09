import { Component, Input, OnInit } from '@angular/core';
import { TranslationsService } from '../../../core/TransaltionService/translations.service';
import { Stats } from './stats';

@Component({
  selector: 'app-about-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  @Input() i18nPath!: string;
  public stats!: Array<Stats>;

  constructor(private readonly transloco: TranslationsService) {}

  public ngOnInit(): void {
    this.stats = this.buildUpStats();
  }

  private buildUpStats(): Array<Stats> {
    const trans = (key: string) =>
      this.transloco.translateWithKey(this.i18nPath, key);

    return [
      {
        language: trans('skills.html.language'),
        percentage: trans('skills.html.percentage'),
      },
      {
        language: trans('skills.css.language'),
        percentage: trans('skills.css.percentage'),
      },
      {
        language: trans('skills.javascript.language'),
        percentage: trans('skills.javascript.percentage'),
      },
      {
        language: trans('skills.typescript.language'),
        percentage: trans('skills.typescript.percentage'),
      },

      {
        language: trans('skills.angular.language'),
        percentage: trans('skills.angular.percentage'),
      },
      {
        language: trans('skills.java.language'),
        percentage: trans('skills.java.percentage'),
      },
      {
        language: trans('skills.nodejs.language'),
        percentage: trans('skills.nodejs.percentage'),
      },
      {
        language: trans('skills.ci-dc.language'),
        percentage: trans('skills.ci-dc.percentage'),
      },
      {
        language: trans('skills.git.language'),
        percentage: trans('skills.git.percentage'),
      },
    ];
  }
}
