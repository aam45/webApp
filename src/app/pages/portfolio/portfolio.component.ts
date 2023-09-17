import { Component } from '@angular/core';
import { TRANSLOCO_ALIAS_HOME } from '../home/home-scope.transloco';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_HOME}.pages.portfolio`;
}
