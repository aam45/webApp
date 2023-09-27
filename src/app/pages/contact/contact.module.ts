import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslocoRootModule } from '../../transloco-root.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, TranslocoRootModule, SharedModule, NgOptimizedImage],
})
export class ContactModule {}
