import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  constructor(private readonly transloco: TranslocoService) {}

  public translateWithKey(i18nPath: string, key: string): string {
    return this.transloco.translate(`${i18nPath}.${key}`);
  }

  public translateWithKeyAndParams(
    i18nPath: string
  ): Array<{ key: string; value: unknown }> {
    const translatedObject = this.transloco.translateObject(i18nPath);

    return Object.entries(translatedObject).map(([key, value]) => ({
      key,
      value,
    }));
  }
}
