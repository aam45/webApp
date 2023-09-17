import { Component } from '@angular/core';
import { TRANSLOCO_ALIAS_HOME } from './home-scope.transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_HOME}.pages.home.developer`;

  public constructor() {}
}
