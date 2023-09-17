import {
  HashMap,
  provideTransloco,
  TRANSLOCO_LOADER,
  TRANSLOCO_MISSING_HANDLER,
  TranslocoMissingHandler,
  TranslocoMissingHandlerData,
  TranslocoModule,
} from '@ngneat/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';

export class CustomHandler implements TranslocoMissingHandler {
  public handle(
    key: string,
    _data: TranslocoMissingHandlerData,
    params?: HashMap
  ): string {
    return params?.['fallback'] || key;
  }
}

@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['de', 'en'],
        defaultLang: 'de',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
    }),
    { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    {
      provide: TRANSLOCO_MISSING_HANDLER,
      useClass: CustomHandler,
    },
  ],
})
export class TranslocoRootModule {}
