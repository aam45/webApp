import { Injectable } from '@angular/core';
import { HashMap, TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  constructor(private readonly transloco: TranslocoService) {}

  public GetByID<T>(i18nPath: string, key: string, id: string): T {
    const translationKey: string = `${i18nPath}.${key + '_'}${id}`;
    console.log(translationKey);

    // Assuming you have a selectTranslateObject method that takes a HashMap as the second argument
    const translationHashMap: HashMap = {
      [key]: this.transloco.translateObject(translationKey),
    };

    return this.translateObjectToInterface<T>(translationKey) as T;
  }

  public translateWithKey(i18nPath: string, key: string): string {
    return this.transloco.translate(`${i18nPath}.${key}`);
  }

  public buildUpInterface<T>(i18nPath: string, key: string, length: number): T {
    const portfolio: Array<T> = [];
    for (let i: number = 1; i <= length; i++) {
      const translationKey: string = `${i18nPath}.${key + '_'}${i}`;
      portfolio.push(this.translateObjectToInterface<T>(translationKey));
    }
    return portfolio as T;
  }

  private translateObjectToInterface<T>(i18nPath: string): T {
    return this.transloco.translateObject(i18nPath) as T;
  }
}
