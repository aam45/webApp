import { Component } from '@angular/core';
import {
  TRANSLOCO_ALIAS_CONTACT,
  TRANSLOCO_SCOPE_CONTACT_PROVIDER,
} from './contac-scope.transloco';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [TRANSLOCO_SCOPE_CONTACT_PROVIDER],
})
export class ContactComponent {
  public readonly i18nPath: string = `${TRANSLOCO_ALIAS_CONTACT}.contact`;
}
