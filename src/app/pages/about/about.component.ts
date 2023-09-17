import { Component } from '@angular/core';
import { TRANSLOCO_ALIAS_ABOUT } from './about-scope.transloco';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_ABOUT}.pages.about`;
}
