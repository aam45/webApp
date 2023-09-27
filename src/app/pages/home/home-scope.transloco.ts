import { Provider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const TRANSLOCO_ALIAS_HOME: string = 'home';
export const TRANSLOCO_SCOPE_HOME: string = `pages/${TRANSLOCO_ALIAS_HOME}`;

export const TRANSLOCO_SCOPE_HOME_PROVIDER: Provider = {
  provide: TRANSLOCO_SCOPE,
  useValue: { scope: TRANSLOCO_SCOPE_HOME, alias: TRANSLOCO_ALIAS_HOME },
};
