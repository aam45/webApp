import { Component } from '@angular/core';
import {
  TRANSLOCO_ALIAS_ABOUT,
  TRANSLOCO_SCOPE_ABOUT_PROVIDER,
} from './about-scope.transloco';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [TRANSLOCO_SCOPE_ABOUT_PROVIDER],
})
export class AboutComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_ABOUT}.about`;
}
