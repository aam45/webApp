import { Component } from '@angular/core';
import { TRANSLOCO_ALIAS_CONTACT } from './contact-scope.transloco';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_CONTACT}.pages.contact`;
}
