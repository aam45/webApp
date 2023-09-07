import { ModuleWithProviders } from '@angular/core';
import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@ngneat/transloco';
import de from 'src/assets/i18n/de.json';
import home from 'src/assets/i18n/pages/home/de.json';
import about from 'src/assets/i18n/pages/about/de.json';
import portfolio from 'src/assets/i18n/pages/portfolio/de.json';
import blogs from 'src/assets/i18n/pages/blogs/de.json';
import contact from 'src/assets/i18n/pages/contact/de.json';

export const getTranslocoModule: (
  options?: TranslocoTestingOptions
) => ModuleWithProviders<TranslocoTestingModule> = (options = {}) => {
  const { langs, translocoConfig, ...rest } = options;
  return TranslocoTestingModule.forRoot({
    langs: {
      de,
      'home/de': home,
      'about/de': about,
      'portfolio/de': portfolio,
      'blogs/de': blogs,
      'contact/de': contact,
      ...langs,
    },
    translocoConfig: {
      availableLangs: ['de'],
      defaultLang: 'de',
      ...translocoConfig,
    },
    ...rest,
    preloadLangs: true,
  });
};
