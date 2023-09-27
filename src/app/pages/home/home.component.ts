import { Component } from '@angular/core';
import {
  TRANSLOCO_ALIAS_HOME,
  TRANSLOCO_SCOPE_HOME_PROVIDER,
} from './home-scope.transloco';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TRANSLOCO_SCOPE_HOME_PROVIDER],
})
export class HomeComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_HOME}.home`;
}
