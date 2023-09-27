import { Provider } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

export const TRANSLOCO_ALIAS_BLOGS: string = 'blogs';
export const TRANSLOCO_SCOPE_BLOGS: string = `pages/${TRANSLOCO_ALIAS_BLOGS}`;

export const TRANSLOCO_SCOPE_BLOGS_PROVIDER: Provider = {
  provide: TRANSLOCO_SCOPE,
  useValue: {
    scope: TRANSLOCO_SCOPE_BLOGS,
    alias: TRANSLOCO_ALIAS_BLOGS,
  },
};
