import { Injectable } from '@angular/core';
import { TranslocoTranspiler } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root', // Depending on your app structure
})
export class MyTranslocoTranspiler implements TranslocoTranspiler {
  transpile(value: string): string {
    // Customize the translation value as needed
    return value;
  }
}
