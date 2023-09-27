import { Provider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const TRANSLOCO_ALIAS_ABOUT: string = 'about';
export const TRANSLOCO_SCOPE_ABOUT: string = `pages/${TRANSLOCO_ALIAS_ABOUT}`;

export const TRANSLOCO_SCOPE_ABOUT_PROVIDER: Provider = {
  provide: TRANSLOCO_SCOPE,
  useValue: { scope: TRANSLOCO_SCOPE_ABOUT, alias: TRANSLOCO_ALIAS_ABOUT },
};
