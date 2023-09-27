import { Provider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const TRANSLOCO_ALIAS_PORTFOLIO: string = 'portfolio';
export const TRANSLOCO_SCOPE_PORTFOLIO: string = `pages/${TRANSLOCO_ALIAS_PORTFOLIO}`;

export const TRANSLOCO_SCOPE_PORTFOLIO_PROVIDER: Provider = {
  provide: TRANSLOCO_SCOPE,
  useValue: {
    scope: TRANSLOCO_SCOPE_PORTFOLIO,
    alias: TRANSLOCO_ALIAS_PORTFOLIO,
  },
};
