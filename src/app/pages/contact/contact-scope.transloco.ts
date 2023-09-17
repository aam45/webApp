import { Provider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const TRANSLOCO_ALIAS_CONTACT: string = 'contact';
export const TRANSLOCO_SCOPE_CONTACT: string = `pages/${TRANSLOCO_ALIAS_CONTACT}`;

export const TRANSLOCO_SCOPE_CONTACT_PROVIDER: Provider = {
  provide: TRANSLOCO_SCOPE,
  useValue: { scope: TRANSLOCO_SCOPE_CONTACT, alias: TRANSLOCO_ALIAS_CONTACT },
};
