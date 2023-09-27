import { Component } from '@angular/core';
import {
  TRANSLOCO_ALIAS_PORTFOLIO,
  TRANSLOCO_SCOPE_PORTFOLIO_PROVIDER,
} from './portfolio-scope.transloco';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [TRANSLOCO_SCOPE_PORTFOLIO_PROVIDER],
})
export class PortfolioComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_PORTFOLIO}.portfolio`;
}
