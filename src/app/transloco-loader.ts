import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the translation for a given language.
   *
   * @param {string} lang - The language code for the desired translation.
   * @return {Observable<Translation>} An observable that emits the translation for the given language.
   */
  public getTranslation(lang: string): Observable<Translation> {
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}
